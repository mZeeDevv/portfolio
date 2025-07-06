import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddingFirebaseToJavaScriptProject = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-portfolio-primary-600 hover:text-portfolio-primary-800 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-neutral-900 mb-4">
            Adding Firebase to JavaScript Project
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>December 9, 2023</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>8 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Firebase', 'JavaScript', 'Web Development', 'Tutorial'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-portfolio-primary-100 text-portfolio-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-portfolio-neutral-800">
          <h1>Adding Firebase to JavaScript Project</h1>

          <p><em>Published on: December 9, 2023</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: Firebase, JavaScript, Web Development, Tutorial</em></p>

          <hr />

          <p>Firebase is Google's comprehensive platform for building web and mobile applications. It provides backend services like authentication, real-time databases, hosting, and more. This guide walks you through integrating Firebase into a JavaScript project from scratch.</p>

          <h2>What is Firebase?</h2>

          <h3>Firebase Services Overview</h3>

          <p>Firebase offers a suite of services that can accelerate your development:</p>

          <ul>
            <li><strong>Authentication</strong> - User management and authentication</li>
            <li><strong>Firestore</strong> - NoSQL document database</li>
            <li><strong>Realtime Database</strong> - Real-time synchronized database</li>
            <li><strong>Storage</strong> - File storage and serving</li>
            <li><strong>Hosting</strong> - Web hosting with CDN</li>
            <li><strong>Functions</strong> - Serverless backend functions</li>
            <li><strong>Analytics</strong> - App usage analytics</li>
          </ul>

          <h2>Setting Up Firebase</h2>

          <h3>1. Create Firebase Project</h3>

          <p>Start by creating a new Firebase project in the Firebase Console.</p>

          <h3>2. Project Configuration</h3>

          <p>Configure your project settings, including authentication methods and database rules.</p>

          <h3>3. Get Configuration Object</h3>

          <p>Obtain your Firebase configuration object from the project settings.</p>

          <h2>Installation and Setup</h2>

          <h3>Install Firebase SDK</h3>

          <p>You can add Firebase to your project using npm or by including it via CDN.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Using npm
npm install firebase

// Or using yarn
yarn add firebase`}
              </code>
            </pre>
          </div>

          <h3>Initialize Firebase</h3>

          <p>Initialize Firebase in your application with your configuration.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };`}
              </code>
            </pre>
          </div>

          <h2>Authentication Implementation</h2>

          <h3>Setting Up Authentication</h3>

          <p>Enable authentication methods in the Firebase Console.</p>

          <h3>User Registration</h3>

          <p>Implement user registration functionality.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    );
    const user = userCredential.user;
    console.log('User registered:', user);
    return user;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}`}
              </code>
            </pre>
          </div>

          <h3>User Login</h3>

          <p>Create login functionality for existing users.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      email, 
      password
    );
    const user = userCredential.user;
    console.log('User logged in:', user);
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}`}
              </code>
            </pre>
          </div>

          <h3>Authentication State Management</h3>

          <p>Monitor authentication state changes in your application.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// Set up authentication state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});`}
              </code>
            </pre>
          </div>

          <h2>Firestore Database</h2>

          <h3>Database Structure</h3>

          <p>Plan your Firestore database structure with collections and documents.</p>

          <h3>Writing Data</h3>

          <p>Learn how to add and update data in Firestore.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

// Add a new document to a collection
async function addItem(data) {
  try {
    const docRef = await addDoc(collection(db, 'items'), data);
    console.log('Document written with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
}

// Set a document with a specific ID
async function updateItem(id, data) {
  try {
    await setDoc(doc(db, 'items', id), data);
    console.log('Document updated successfully');
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
}`}
              </code>
            </pre>
          </div>

          <h3>Reading Data</h3>

          <p>Implement data retrieval from Firestore.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

// Get all documents from a collection
async function getItems() {
  try {
    const querySnapshot = await getDocs(collection(db, 'items'));
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return items;
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
}

// Get a specific document
async function getItem(id) {
  try {
    const docRef = doc(db, 'items', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting document:', error);
    throw error;
  }
}`}
              </code>
            </pre>
          </div>

          <h3>Real-time Listeners</h3>

          <p>Set up real-time listeners for live data updates.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

// Set up a real-time listener for a collection
function subscribeToItems(callback) {
  return onSnapshot(collection(db, 'items'), (snapshot) => {
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    callback(items);
  }, (error) => {
    console.error('Listener error:', error);
  });
}

// Usage
const unsubscribe = subscribeToItems((items) => {
  console.log('Current items:', items);
  // Update your UI here
});

// Call unsubscribe() when you no longer want updates
// unsubscribe();`}
              </code>
            </pre>
          </div>

          <h2>Firebase Storage</h2>

          <h3>File Upload</h3>

          <p>Implement file upload functionality to Firebase Storage.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from './firebase';

const storage = getStorage(app);

async function uploadFile(file, path) {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log('File uploaded successfully, download URL:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}`}
              </code>
            </pre>
          </div>

          <h2>Security Rules</h2>

          <p>Configure security rules to protect your Firebase data.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Firestore security rules example
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read for all users, but only authenticated users can write
    match /items/{item} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User-specific data is only accessible to the user it belongs to
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}`}
              </code>
            </pre>
          </div>

          <h2>Conclusion</h2>

          <p>Firebase provides a powerful backend-as-a-service solution that can significantly speed up your JavaScript application development. With proper setup and implementation, you can focus on building features rather than managing backend infrastructure.</p>

          <p>Start with the basics - authentication and a simple database - then gradually expand to use more Firebase services as your application grows.</p>

          <hr />

          <p><em>Ready to build more complex applications? Explore my other tutorials on advanced JavaScript patterns and full-stack development.</em></p>
        </div>

        {/* Share and Navigate */}
        <div className="mt-16 pt-8 border-t border-portfolio-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-portfolio-neutral-900 font-semibold mb-2">Share this article</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share via Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                to="/blog/from-gamer-to-full-stack-developer"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/javascript-performance-optimization"
                className="px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Back to First Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingFirebaseToJavaScriptProject;
