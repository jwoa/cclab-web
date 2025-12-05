import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Web Development! 🌐 BETA",
      content: (
        <div className="space-y-6">
          <p className="text-xl">Today you'll learn the basics of building websites</p>
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <h3 className="font-bold text-lg">What we'll cover:</h3>
            <ul className="space-y-2 text-lg">
              <li>✨ HTML - The structure of web pages</li>
              <li>🎨 CSS - Making things look beautiful</li>
              <li>♿ Accessibility - Making sites usable for everyone</li>
              <li>🔗 Connecting it all together for your portfolio</li>
            </ul>
          </div>
          <p className="text-gray-600">Think of it like p5.js, but for the web!</p>
        </div>
      )
    },
    {
      title: "What is HTML? 📝",
      content: (
        <div className="space-y-4">
          <p className="text-lg">HTML = <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage</p>
          <div className="bg-gray-50 p-6 rounded space-y-4">
            <p>HTML is the <strong>skeleton</strong> of a website. It defines the structure and content.</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded border-2 border-gray-300">
                <h4 className="font-bold mb-2">Like p5.js:</h4>
                <code className="text-sm">createCanvas()</code>
                <p className="text-sm mt-2">Sets up your space</p>
              </div>
              <div className="bg-white p-4 rounded border-2 border-gray-300">
                <h4 className="font-bold mb-2">In HTML:</h4>
                <code className="text-sm">&lt;html&gt;</code>
                <p className="text-sm mt-2">Sets up your webpage</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "HTML Structure 🏗️",
      content: (
        <div className="space-y-4">
          <p className="text-lg mb-4">Every HTML document has the same basic structure:</p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-lg text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to my portfolio!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`}
          </pre>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="text-sm"><strong>Pro tip:</strong> Type <code>!</code> and press Tab in VS Code to generate this automatically!</p>
          </div>
        </div>
      )
    },
    {
      title: "HTML Tags: The Building Blocks 🧱",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="mb-2">Tags are like containers. Most have an opening and closing tag:</p>
            <code className="bg-white px-2 py-1 rounded">&lt;tag&gt;content&lt;/tag&gt;</code>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-bold mb-3">Common Tags:</h4>
              <ul className="space-y-2 text-sm">
                <li><code>&lt;h1&gt;</code> - Big heading</li>
                <li><code>&lt;p&gt;</code> - Paragraph</li>
                <li><code>&lt;a&gt;</code> - Link</li>
                <li><code>&lt;img&gt;</code> - Image</li>
                <li><code>&lt;div&gt;</code> - Container</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-bold mb-3">Example:</h4>
              <pre className="text-sm bg-gray-50 p-3 rounded">
{`<h1>My Projects</h1>
<p>Check out my work!</p>
<a href="project1.html">
  Project 1
</a>
<img src="sketch.png" 
     alt="My sketch">`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Links & Navigation 🔗",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Links connect your pages together!</p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm">
{`<!-- Link to another page -->
<a href="about.html">About Me</a>

<!-- Link to external site -->
<a href="https://p5js.org">p5.js</a>

<!-- Navigation menu -->
<nav>
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
    <a href="about.html">About</a>
</nav>`}
          </pre>
          <div className="bg-green-50 p-4 rounded">
            <p><strong>href</strong> = where the link goes</p>
            <p className="text-sm mt-2">Text between tags = what people click</p>
          </div>
        </div>
      )
    },
    {
      title: "Images in HTML 🖼️",
      content: (
        <div className="space-y-4">
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm">
{`<!-- Basic image -->
<img src="mysketch.png" alt="A colorful generative art piece">

<!-- Image with size -->
<img src="photo.jpg" 
     alt="Self portrait" 
     width="400">

<!-- Image as a link -->
<a href="project.html">
    <img src="thumbnail.png" 
         alt="Click to see project">
</a>`}
          </pre>
          <div className="bg-red-50 p-4 rounded">
            <p className="font-bold">⚠️ ALWAYS include alt text!</p>
            <p className="text-sm mt-2">Describes the image for screen readers and if image doesn't load</p>
          </div>
        </div>
      )
    },
    {
      title: "Embedding Your p5 Sketches 🎨",
      content: (
        <div className="space-y-4">
          <p className="text-lg">For Part 1, use the embed code from p5 editor:</p>
          <div className="bg-gray-50 p-4 rounded space-y-3">
            <p className="font-bold">Steps:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Open your sketch in p5.js editor</li>
              <li>Click File → Share</li>
              <li>Copy the embed code</li>
              <li>Paste into your HTML</li>
            </ol>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs">
{`<iframe src="https://editor.p5js.org/username/full/sketchID" 
        width="400" 
        height="400"></iframe>`}
          </pre>
        </div>
      )
    },
    {
      title: "What is CSS? 🎨",
      content: (
        <div className="space-y-4">
          <p className="text-xl">CSS = <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets</p>
          <div className="bg-purple-50 p-6 rounded space-y-4">
            <p className="text-lg">CSS makes your website look beautiful!</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">HTML is:</p>
                <p>The structure (skeleton)</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">CSS is:</p>
                <p>The style (clothes & makeup)</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">Think: fill() and stroke() in p5.js, but for your whole website!</p>
        </div>
      )
    },
    {
      title: "CSS Syntax 📐",
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded">
            <p className="mb-4 font-bold text-lg">CSS has three parts:</p>
            <pre className="bg-gray-900 text-green-400 p-6 rounded">
{`selector {
    property: value;
    property: value;
}`}
            </pre>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-100 p-4 rounded">
              <p className="font-bold">Selector</p>
              <p className="text-sm">What to style</p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <p className="font-bold">Property</p>
              <p className="text-sm">What to change</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <p className="font-bold">Value</p>
              <p className="text-sm">How to change it</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "CSS Examples 🌈",
      content: (
        <div className="space-y-4">
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm">
{`/* Change all paragraphs */
p {
    color: blue;
    font-size: 18px;
    line-height: 1.6;
}

/* Change all h1 headings */
h1 {
    color: #FF6B6B;
    font-family: Arial, sans-serif;
    text-align: center;
}

/* Style the body */
body {
    background-color: #f0f0f0;
    margin: 40px;
    font-family: 'Courier New';
}`}
          </pre>
        </div>
      )
    },
    {
      title: "Connecting CSS to HTML 🔗",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Three ways to add CSS:</p>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded">
              <p className="font-bold mb-2">1. External (RECOMMENDED) ✅</p>
              <pre className="bg-white p-3 rounded text-sm mt-2">
{`<!-- In your HTML <head> -->
<link rel="stylesheet" href="style.css">`}
              </pre>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <p className="font-bold mb-2">2. Internal</p>
              <pre className="bg-white p-3 rounded text-sm mt-2">
{`<style>
    p { color: blue; }
</style>`}
              </pre>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="font-bold mb-2">3. Inline (not recommended)</p>
              <pre className="bg-white p-3 rounded text-sm mt-2">
{`<p style="color: blue;">Text</p>`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "CSS Box Model 📦",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Every element is a box!</p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="bg-orange-200 p-6 rounded">
              <p className="text-center font-bold mb-4">MARGIN (space outside)</p>
              <div className="bg-yellow-200 p-6 rounded">
                <p className="text-center font-bold mb-4">BORDER</p>
                <div className="bg-green-200 p-6 rounded">
                  <p className="text-center font-bold mb-4">PADDING (space inside)</p>
                  <div className="bg-blue-300 p-6 rounded text-center">
                    <p className="font-bold">CONTENT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm">
{`div {
    padding: 20px;    /* inside space */
    margin: 10px;     /* outside space */
    border: 2px solid black;
}`}
          </pre>
        </div>
      )
    },
    {
      title: "Layout with Flexbox 📏",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Flexbox makes layout easy!</p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm">
{`/* Container for projects */
.projects {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

/* Each project card */
.project-card {
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`}
          </pre>
          <div className="flex gap-4 mt-4">
            <div className="bg-blue-100 p-4 rounded flex-1 text-center">Project 1</div>
            <div className="bg-green-100 p-4 rounded flex-1 text-center">Project 2</div>
            <div className="bg-yellow-100 p-4 rounded flex-1 text-center">Project 3</div>
          </div>
        </div>
      )
    },
    {
      title: "Web Accessibility ♿",
      content: (
        <div className="space-y-4">
          <p className="text-xl">Making websites usable for EVERYONE</p>
          <div className="bg-blue-50 p-6 rounded space-y-4">
            <p className="text-lg">Why it matters:</p>
            <ul className="space-y-2">
              <li>🔍 Screen readers help blind users</li>
              <li>⌨️ Keyboard navigation for motor disabilities</li>
              <li>🎨 Color contrast for visual impairments</li>
              <li>📱 Clear structure helps everyone</li>
            </ul>
          </div>
          <p className="bg-yellow-100 p-4 rounded font-bold">15% of the world has some form of disability!</p>
        </div>
      )
    },
    {
      title: "Accessibility Best Practices ✅",
      content: (
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded">
            <p className="font-bold mb-2">✅ DO: Use semantic HTML</p>
            <pre className="bg-white p-2 rounded text-sm">
{`<nav>...</nav>
<header>...</header>
<main>...</main>
<footer>...</footer>`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="font-bold mb-2">✅ DO: Add alt text to images</p>
            <pre className="bg-white p-2 rounded text-sm">
{`<img src="art.png" alt="Abstract blue and red circles">`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="font-bold mb-2">✅ DO: Use sufficient color contrast</p>
            <p className="text-sm">Dark text on light backgrounds (or vice versa)</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="font-bold mb-2">✅ DO: Make interactive elements keyboard accessible</p>
            <pre className="bg-white p-2 rounded text-sm">
{`<button>Click me</button>  <!-- Can be tabbed to -->`}
            </pre>
          </div>
        </div>
      )
    },
    {
      title: "Accessibility: What to Avoid ❌",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded">
            <p className="font-bold mb-2">❌ DON'T: Use generic divs for everything</p>
            <pre className="bg-white p-2 rounded text-sm">
{`<div class="nav">...</div>  <!-- Bad -->
<nav>...</nav>              <!-- Good! -->`}
            </pre>
          </div>
          <div className="bg-red-50 p-4 rounded">
            <p className="font-bold mb-2">❌ DON'T: Forget alt text</p>
            <pre className="bg-white p-2 rounded text-sm">
{`<img src="art.png">  <!-- Bad -->`}
            </pre>
          </div>
          <div className="bg-red-50 p-4 rounded">
            <p className="font-bold mb-2">❌ DON'T: Use low contrast colors</p>
            <div className="bg-white p-2 rounded text-sm flex gap-4">
              <span className="text-gray-300">Bad: light gray on white</span>
              <span className="text-gray-900">Good: dark on white</span>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded">
            <p className="font-bold mb-2">❌ DON'T: Rely only on color for meaning</p>
            <p className="text-sm">Add text labels, icons, or patterns too!</p>
          </div>
        </div>
      )
    },
    {
      title: "Testing Your Site 🧪",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Ways to test accessibility:</p>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold mb-2">1. Keyboard Navigation Test</p>
              <p className="text-sm">Try using only Tab and Enter keys to navigate your site</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold mb-2">2. Check Color Contrast</p>
              <p className="text-sm">Use: <a href="https://webaim.org/resources/contrastchecker/" className="text-blue-600 underline">WebAIM Contrast Checker</a></p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold mb-2">3. View in Browser DevTools</p>
              <p className="text-sm">Right-click → Inspect → Accessibility tab</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold mb-2">4. Use a Screen Reader</p>
              <p className="text-sm">Mac: VoiceOver (Cmd+F5) | Windows: NVDA (free)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Your Portfolio Structure 📁",
      content: (
        <div className="space-y-4">
          <p className="text-lg">Recommended file structure:</p>
          <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm font-mono">
{`my-portfolio/
│
├── index.html          (home page)
├── about.html          (about page)
├── reflections.html    (extra page)
├── style.css           (your styles)
│
├── projects/
│   ├── project1.html
│   ├── project2.html
│   └── project3.html
│
└── images/
    ├── selfie.jpg
    ├── sketch1.png
    └── sketch2.png`}
          </pre>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="text-sm"><strong>Tip:</strong> Keep file names lowercase with no spaces!</p>
          </div>
        </div>
      )
    },
    {
      title: "Example Portfolio Page 📄",
      content: (
        <div className="space-y-4">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="reflections.html">Reflections</a>
    </nav>
    
    <main>
        <h1>Welcome to My Portfolio</h1>
        
        <section class="projects">
            <div class="project-card">
                <h2>Project 1: Generative Art</h2>
                <iframe src="p5-embed-url" width="400" height="400"></iframe>
                <p>A colorful exploration of random patterns and movement.</p>
                <a href="projects/project1.html">View More</a>
            </div>
        </section>
    </main>
    
    <footer>
        <p>© 2024 Your Name</p>
    </footer>
</body>
</html>`}
          </pre>
        </div>
      )
    },
    {
      title: "Example CSS Styling 🎨",
      content: (
        <div className="space-y-4">
          <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`/* style.css */

/* Overall page styling */
body {
    font-family: 'Courier New', monospace;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    color: #333;
}

/* Navigation */
nav {
    background-color: #2c3e50;
    padding: 20px;
    display: flex;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}

/* Main content */
main {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    font-size: 48px;
    text-align: center;
}

/* Project cards */
.projects {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.project-card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    max-width: 450px;
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 60px;
}`}
          </pre>
        </div>
      )
    },
    {
      title: "Resources 📚",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Learning Resources:</h3>
              <ul className="space-y-2">
                <li>📖 <a href="https://www.w3schools.com/html/" className="text-blue-600 underline">W3Schools HTML Tutorial</a></li>
                <li>📖 <a href="https://www.w3schools.com/css/" className="text-blue-600 underline">W3Schools CSS Tutorial</a></li>
                <li>🎮 <a href="https://flexboxfroggy.com/" className="text-blue-600 underline">Flexbox Froggy</a> - Learn flexbox through a game!</li>
                <li>🎨 <a href="https://coolors.co/" className="text-blue-600 underline">Coolors</a> - Color palette generator</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Accessibility:</h3>
              <ul className="space-y-2">
                <li>♿ <a href="https://webaim.org/resources/contrastchecker/" className="text-blue-600 underline">WebAIM Contrast Checker</a></li>
                <li>♿ <a href="https://www.a11yproject.com/" className="text-blue-600 underline">The A11Y Project</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Tools:</h3>
              <ul className="space-y-2">
                <li>💻 VS Code - Text editor</li>
                <li>🌐 Chrome DevTools - F12 to inspect</li>
                <li>📱 Responsive Design Mode - Test mobile</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Part 1 Checklist ✅",
      content: (
        <div className="space-y-4">
          <p className="text-lg font-bold">Due 11/21 - Make sure you have:</p>
          <div className="bg-green-50 p-6 rounded space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">☐</span>
              <div>
                <p className="font-bold">Home page (index.html)</p>
                <p className="text-sm text-gray-600">With links to all your projects</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">☐</span>
              <div>
                <p className="font-bold">Project pages</p>
                <p className="text-sm text-gray-600">Each with embedded p5 sketch + 1-2 sentence description</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">☐</span>
              <div>
                <p className="font-bold">About page</p>
                <p className="text-sm text-gray-600">Information about you</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">☐</span>
              <div>
                <p className="font-bold">One extra page</p>
                <p className="text-sm text-gray-600">Reflections, resume, or anything else!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">☐</span>
              <div>
                <p className="font-bold">Working navigation</p>
                <p className="text-sm text-gray-600">All links work and connect pages</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <p className="font-bold">Submit: Your HTML files on Canvas</p>
          </div>
        </div>
      )
    },
    {
      title: "Getting Started Today 🚀",
      content: (
        <div className="space-y-4">
          <p className="text-xl font-bold">Step-by-step for today's class:</p>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">1. Create your project folder</p>
              <p className="text-sm">Make a folder called "portfolio" on your computer</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">2. Create index.html</p>
              <p className="text-sm">Open VS Code, create new file, save as index.html</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">3. Type ! and press Tab</p>
              <p className="text-sm">This creates your HTML structure instantly</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">4. Start building!</p>
              <p className="text-sm">Add your content, link your CSS, embed your sketches</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">5. Test and refine</p>
              <p className="text-sm">Open in browser, check links, adjust styling</p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded mt-6">
            <p className="text-center font-bold text-lg">Let's get started! 🎉</p>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="application"
      aria-label="Portfolio slides presentation"
    >
      <div className="max-w-5xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <span className="text-sm text-gray-500">
              Use arrow keys or buttons to navigate
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              role="progressbar"
              aria-valuenow={currentSlide + 1}
              aria-valuemin={1}
              aria-valuemax={slides.length}
            />
          </div>
        </div>

        {/* Slide content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-h-[600px]">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-blue-500 pb-4">
            {slides[currentSlide].title}
          </h1>
          <div className="text-gray-700">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 font-semibold"
            aria-label="Previous slide"
            tabIndex={0}
          >
            <ChevronLeft size={20} />
            Previous
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
                tabIndex={0}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 font-semibold"
            aria-label="Next slide"
            tabIndex={0}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlides;
