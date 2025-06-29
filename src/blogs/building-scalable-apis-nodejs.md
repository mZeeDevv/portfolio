# Building Scalable APIs with Node.js and Express

*Published on January 5, 2025 • 10 minute read*

Building scalable APIs is crucial for modern web applications. As your application grows, you need an architecture that can handle increased traffic, maintain performance, and remain maintainable. In this comprehensive guide, we'll explore best practices for building robust APIs with Node.js and Express.

## Setting Up the Foundation

### Project Structure

A well-organized project structure is the foundation of a scalable API:

```
api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
├── tests/
├── config/
└── server.js
```

### Environment Configuration

Always use environment variables for configuration:

```javascript
// config/config.js
const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }
};

module.exports = config;
```

## Implementing Proper Error Handling

### Global Error Handler

Create a centralized error handling middleware:

```javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
```

### Custom Error Classes

```javascript
// utils/errorResponse.js
class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;

// utils/asyncHandler.js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
```

## Database Integration and Optimization

### Connection Pooling

Use connection pooling for better database performance:

```javascript
// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0 // Disable mongoose buffering
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### Query Optimization

```javascript
// services/userService.js
class UserService {
  static async getUsersWithPagination(page = 1, limit = 10, filters = {}) {
    const skip = (page - 1) * limit;
    
    const query = User.find(filters)
      .select('-password') // Exclude sensitive fields
      .populate('profile', 'firstName lastName avatar')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const users = await query.exec();
    const total = await User.countDocuments(filters);

    return {
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  static async getUserById(id) {
    const user = await User.findById(id)
      .select('-password')
      .populate('profile')
      .lean(); // Returns plain JS object, better performance

    if (!user) {
      throw new ErrorResponse('User not found', 404);
    }

    return user;
  }
}
```

## Implementing Caching Strategies

### Redis Integration

```javascript
// services/cacheService.js
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

class CacheService {
  static async get(key) {
    try {
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  static async set(key, data, ttl = 3600) {
    try {
      await client.setEx(key, ttl, JSON.stringify(data));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  static async del(key) {
    try {
      await client.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }

  static async clearPattern(pattern) {
    try {
      const keys = await client.keys(pattern);
      if (keys.length > 0) {
        await client.del(keys);
      }
    } catch (error) {
      console.error('Cache clear pattern error:', error);
    }
  }
}

module.exports = CacheService;
```

### Cache Middleware

```javascript
// middleware/cache.js
const CacheService = require('../services/cacheService');

const cache = (duration = 300) => {
  return async (req, res, next) => {
    const key = `cache:${req.method}:${req.originalUrl}`;
    
    try {
      const cachedData = await CacheService.get(key);
      
      if (cachedData) {
        return res.json(cachedData);
      }

      // Store original res.json
      const originalJson = res.json;
      
      res.json = function(data) {
        // Cache the response
        CacheService.set(key, data, duration);
        
        // Call original json method
        return originalJson.call(this, data);
      };

      next();
    } catch (error) {
      console.error('Cache middleware error:', error);
      next();
    }
  };
};

module.exports = cache;
```

## Rate Limiting and Security

### Rate Limiting

```javascript
// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URL);

const createRateLimiter = (windowMs, max, message) => {
  return rateLimit({
    store: new RedisStore({
      client: redisClient,
      prefix: 'rl:',
    }),
    windowMs,
    max,
    message: {
      error: message || 'Too many requests, please try again later'
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

// Different limits for different endpoints
const generalLimiter = createRateLimiter(15 * 60 * 1000, 100); // 100 requests per 15 minutes
const strictLimiter = createRateLimiter(15 * 60 * 1000, 5);   // 5 requests per 15 minutes

module.exports = {
  generalLimiter,
  strictLimiter
};
```

### Security Middleware

```javascript
// middleware/security.js
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const setupSecurity = (app) => {
  // Set security headers
  app.use(helmet());

  // CORS configuration
  app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }));

  // Prevent NoSQL injection attacks
  app.use(mongoSanitize());

  // Prevent XSS attacks
  app.use(xss());

  // Prevent HTTP Parameter Pollution
  app.use(hpp());
};

module.exports = setupSecurity;
```

## API Versioning Strategy

```javascript
// routes/v1/index.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const authRoutes = require('./auth');
const productRoutes = require('./products');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;

// app.js
app.use('/api/v1', require('./routes/v1'));
app.use('/api/v2', require('./routes/v2')); // Future version
```

## Monitoring and Logging

### Structured Logging

```javascript
// utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;
```

### Request Logging

```javascript
// middleware/requestLogger.js
const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    
    logger.info({
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
      userAgent: req.get('User-Agent'),
      ip: req.ip
    });
  });

  next();
};

module.exports = requestLogger;
```

## Testing Strategy

### Unit Tests

```javascript
// tests/services/userService.test.js
const UserService = require('../../src/services/userService');
const User = require('../../src/models/User');

jest.mock('../../src/models/User');

describe('UserService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserById', () => {
    it('should return user when found', async () => {
      const mockUser = { id: '123', name: 'John Doe' };
      User.findById.mockReturnValue({
        select: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            lean: jest.fn().mockResolvedValue(mockUser)
          })
        })
      });

      const result = await UserService.getUserById('123');
      
      expect(result).toEqual(mockUser);
      expect(User.findById).toHaveBeenCalledWith('123');
    });

    it('should throw error when user not found', async () => {
      User.findById.mockReturnValue({
        select: jest.fn().mockReturnValue({
          populate: jest.fn().mockReturnValue({
            lean: jest.fn().mockResolvedValue(null)
          })
        })
      });

      await expect(UserService.getUserById('123')).rejects.toThrow('User not found');
    });
  });
});
```

### Integration Tests

```javascript
// tests/integration/users.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('Users API', () => {
  describe('GET /api/v1/users', () => {
    it('should return paginated users', async () => {
      const response = await request(app)
        .get('/api/v1/users?page=1&limit=10')
        .expect(200);

      expect(response.body).toHaveProperty('users');
      expect(response.body).toHaveProperty('pagination');
      expect(Array.isArray(response.body.users)).toBe(true);
    });

    it('should handle invalid pagination parameters', async () => {
      const response = await request(app)
        .get('/api/v1/users?page=invalid&limit=invalid')
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });
});
```

## Deployment Considerations

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

USER node

EXPOSE 3000

CMD ["node", "server.js"]
```

### Health Check Endpoint

```javascript
// routes/health.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    checks: {
      database: await checkDatabase(),
      redis: await checkRedis(),
    }
  };

  try {
    res.status(200).json(healthCheck);
  } catch (error) {
    healthCheck.message = error;
    res.status(503).json(healthCheck);
  }
});

const checkDatabase = async () => {
  try {
    await mongoose.connection.db.admin().ping();
    return 'Connected';
  } catch (error) {
    return 'Disconnected';
  }
};

const checkRedis = async () => {
  try {
    await redisClient.ping();
    return 'Connected';
  } catch (error) {
    return 'Disconnected';
  }
};

module.exports = router;
```

## Conclusion

Building scalable APIs requires careful planning and implementation of best practices. Key takeaways:

1. **Structure your code properly** with clear separation of concerns
2. **Implement comprehensive error handling** and logging
3. **Use caching strategically** to improve performance
4. **Secure your API** with proper authentication, rate limiting, and input validation
5. **Monitor and test** your API thoroughly
6. **Plan for deployment** with health checks and proper containerization

By following these patterns, you'll build APIs that can handle growth and maintain performance as your application scales.

---

*Tags: Node.js, Express, API Development, Scalability, Backend Development, JavaScript*
