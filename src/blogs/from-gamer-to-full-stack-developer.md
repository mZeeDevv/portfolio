# A Journey - From a Gamer to Full Stack Developer

*Published on November 2, 2023 • 6 minute read*

Hey 👋

Welcome to the blog where I'll be sharing my personal journey, experiences, and maybe a few laughs along the way. Let's dive into this adventure together!

## Late Night Adventures in GTA-SA (2020)

In the vibrant gaming landscape of 2020, my world revolved around the immersive realms of Grand Theft Auto: San Andreas (GTA-SA). Nights were spent in the company of friends on Teamspeak, navigating the digital streets of San Andreas, and relishing the thrill of engaging in intense battles with rival game hoods. The game's diverse features became the backdrop for countless memories and camaraderie.

![Grand Theft Auto: San Andreas](./images/gta-sa-gaming.jpg)
*Grand Theft Auto: San Andreas - Where it all began*

However, the narrative took an unexpected turn when my gaming escapades hit a roadblock. The revelation of my use of Aimbot, a form of cheating, led to a decisive ban from the server for a daunting 30 days 😭.

Refusing to let this setback be the end of my gaming journey, I decided to carve out my own path by establishing a personal server. Seeking guidance, I turned to my cousin, a seasoned full-stack developer. Under his mentorship, I embarked on the journey of learning **PAWN**, a programming language essential for creating servers on SA-MP, the online iteration of GTA-SA.

## Discovering a Passion for Programming 💡

As I delved into the intricacies of server creation, my cousin, ever the pragmatist, warned me about the potential pitfalls of investing time in an aging game. Initially dismissing his advice, I found myself captivated by the world of programming that PAWN introduced. The process of coding, debugging, and optimizing the server sparked a newfound passion.

```pawn
// My first lines of PAWN code - a simple teleport command
CMD:teleport(playerid, params[])
{
    new Float:x, Float:y, Float:z;
    if(sscanf(params, "fff", x, y, z)) 
        return SendClientMessage(playerid, -1, "Usage: /teleport [x] [y] [z]");
    
    SetPlayerPos(playerid, x, y, z);
    SendClientMessage(playerid, -1, "You have been teleported!");
    return 1;
}
```

Acknowledging the transformative potential of programming skills for the future, I sought a roadmap from my cousin. While the realms of HTML and CSS felt like familiar terrain, the introduction of JavaScript proved to be a formidable challenge. The transition from gaming enthusiast to server creator opened up a world of possibilities, reshaping not just my digital adventures but also my understanding of technology and its potential impact on my future endeavors.

## The Evolution Timeline

### 2019: The Gaming Era
![mZeeDev's PC (2019)](./images/mzedev-pc-2019.jpg)
*mZeeDev's PC (2019) - The battlestation where dreams began*

This was my setup back in 2019 - a modest gaming rig that would soon become my development workstation. Little did I know that this computer would be the foundation of my programming journey.

### 2020: The Ban That Changed Everything
- **The Incident**: Got banned for 30 days for using Aimbot
- **The Decision**: Instead of waiting, decided to create my own server
- **The Mentor**: My cousin introduced me to programming
- **First Language**: PAWN (for SA-MP server development)

### 2021: First Steps into Web Development
![mZeeDev's First Website (2021)](./images/mzedev-first-website-2021.jpg)
*mZeeDev's First Website (2021) - Humble beginnings*

This was my very first website! Looking back, it's amazing to see how far I've come. Every developer starts somewhere, and this was my starting point. The design might seem simple now, but it represented hours of learning HTML, CSS, and my first attempts at JavaScript.

```html
<!-- My first HTML structure - so proud of this back then! -->
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to mZeeDev's World</title>
    <style>
        body {
            background-color: #1a1a1a;
            color: #00ff00;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my first website!</p>
</body>
</html>
```

## The Learning Curve

### Challenges I Faced:
1. **JavaScript Complexity**: Coming from PAWN, JavaScript's asynchronous nature was mind-boggling
2. **Web Development Concepts**: Understanding the DOM, events, and browser APIs
3. **Debugging**: Learning to use developer tools effectively
4. **Best Practices**: Writing clean, maintainable code

### What Kept Me Going:
- **Gaming Background**: Problem-solving skills from gaming translated well to programming
- **Community Support**: Online forums and communities were incredibly helpful
- **Instant Feedback**: Seeing changes in the browser immediately was addictive
- **Endless Possibilities**: Realizing I could build anything I could imagine

## From PAWN to Full Stack

The journey from PAWN to becoming a full-stack developer wasn't linear. Here's how it unfolded:

```javascript
// The progression of my skills
const myJourney = {
    2020: ['PAWN', 'Basic Server Management'],
    2021: ['HTML', 'CSS', 'Basic JavaScript'],
    2022: ['React', 'Node.js', 'Express'],
    2023: ['Full Stack Projects', 'Firebase', 'Modern JavaScript'],
    2024: ['Advanced React', 'TypeScript', 'Cloud Services'],
    2025: ['Mentoring Others', 'Content Creation', 'Community Building']
};

console.log('Current Status: Full Stack Developer ✅');
```

## The Friends I Made Along the Way ❤️

I really miss my friends I met during my gaming period - they were from different countries like India, Bangladesh, USA, and many more. Those years left a very memorable mark on my career which is unforgettable. ❤️

Some of the most valuable lessons I learned came from:
- **Teamwork**: Coordinating with international friends taught me collaboration
- **Communication**: Explaining complex server features improved my technical communication
- **Leadership**: Managing a gaming community prepared me for leading development teams
- **Problem-Solving**: Debugging server issues under pressure built resilience

## Key Takeaways from My Journey

### 1. **Unexpected Beginnings**
Sometimes the best journeys start from the most unexpected places. A gaming ban led to discovering my passion for programming.

### 2. **Mentorship Matters**
Having my cousin guide me through the initial steps was invaluable. Find a mentor or be one for others.

### 3. **Community is Everything**
Whether it's gaming communities or developer communities, surrounding yourself with like-minded people accelerates growth.

### 4. **Embrace the Challenge**
JavaScript seemed impossible at first, but persistence pays off. Every expert was once a beginner.

### 5. **Skills Transfer**
Gaming taught me problem-solving, teamwork, and persistence - all crucial for programming.

## What's Next?

Today, I'm not just coding for myself - I'm sharing knowledge through:
- **Content Creation**: Writing tutorials and guides
- **Community Building**: Helping others start their programming journey
- **Open Source**: Contributing to projects that help others
- **Mentoring**: Paying it forward by guiding new developers

## Final Thoughts

From late-night gaming sessions to late-night coding sessions, the passion remains the same. The difference is that now, instead of just consuming digital experiences, I'm creating them.

If you're reading this and you're at the beginning of your journey - whether you're coming from gaming, another field, or just starting out - remember that every expert was once a beginner. Your unique background isn't a limitation; it's your superpower.

The skills you think are "just for fun" might be exactly what prepares you for your dream career.

---

**Want to connect?** I love hearing from fellow developers and gamers who are on their own journeys. Feel free to reach out and share your story!

*Keep coding, keep gaming, keep dreaming! 🚀*
