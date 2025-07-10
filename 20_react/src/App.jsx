import React, { useState, useEffect } from 'react';
import {Mail, Sun, Moon, FileDown } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="w-full min-h-screen font-sans bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <header className="text-center py-16 px-6 relative max-w-7xl mx-auto">
        <div className="absolute top-4 right-4 flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a
            href="/RahulRaj_Resume.pdf"
            download
            className="flex items-center gap-1 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            <FileDown className="h-4 w-4" /> Resume
          </a>
        </div>
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Rahul Raj
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">AI Developer | Full Stack Web Developer | Problem Solver</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/rahulrajgit" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 hover:text-purple-400" />
          </a>
          <a href="https://linkedin.com/in/rahulrajdev" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 hover:text-purple-400" />
          </a>
          <a href="mailto:rahul@example.com">
            <Mail className="h-6 w-6 hover:text-purple-400" />
          </a>
        </div>
      </header>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
          I'm a third-year BTech student at IIT Bhilai majoring in Data Science & AI. My passion lies in building intelligent applications, merging full stack development with machine learning to create real-world impactful projects. I actively contribute to open-source, participate in hackathons, and continuously explore new tech like GenAI, LangChain, and Web3.
        </p>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">⚙️ LeetLab – DSA Practice Platform</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">LeetCode-style platform with AI code review, leaderboard, and stats. Tech: React, Express.js, MongoDB, Judge0 API.</p>
            <a href="https://github.com/rahulrajgit/LeetLab" target="_blank" className="text-purple-500 hover:underline">View Project →</a>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">💬 ChatLLM – AI Chatbot Assistant</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Custom ChatGPT-style app built with OpenAI + LangChain to support knowledge base Q&A and personalized replies.</p>
            <a href="https://github.com/rahulrajgit/chat-llm" target="_blank" className="text-purple-500 hover:underline">View Project →</a>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">🛠️ ProjectCamp – Team Showcase Website</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">A clean, responsive website built to display hackathon or student team projects with search and category filters.</p>
            <a href="https://github.com/rahulrajgit/project-camp" target="_blank" className="text-purple-500 hover:underline">View Project →</a>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">🏏 Cricket DataHub – Live Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Platform for live scores and match prediction using WASP model. React + FastAPI + IPL dataset.</p>
            <a href="https://github.com/rahulrajgit/cricket-datahub" target="_blank" className="text-purple-500 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-800 dark:text-gray-200 text-lg">
          <span>React.js</span><span>Next.js</span><span>TailwindCSS</span><span>Framer Motion</span>
          <span>Express.js</span><span>MongoDB</span><span>PostgreSQL</span><span>FastAPI</span>
          <span>Python</span><span>LangChain</span><span>OpenAI API</span><span>Pandas</span>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-purple-400">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Whether you want to collaborate, hire, or just chat tech — I’m open to it all!</p>
        <a href="mailto:rahul@example.com" className="text-purple-500 hover:underline text-lg">
          📧 rahul@example.com
        </a>
      </section>

      <footer className="text-center text-gray-400 dark:text-gray-500 mt-20 py-6 text-sm border-t border-gray-300 dark:border-gray-700">
        Built with 💻 by Rahul Raj | © 2025
      </footer>
    </main>
  );
}