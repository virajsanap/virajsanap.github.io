import React from "react";
import './App.css'; // Assuming App.css contains .home-header, .wave, and other necessary styles
import me from './assets/profileimg2.jpg'; // Ensure this path is correct relative to this file or your assets setup
// import logo from './assets/brainlogo1.png'; // Removed unused import
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function HomeContent() {
  const greeting = "Hi I'm Viraj!";
  // Replace spaces with non-breaking spaces to keep spacing intact for the wave animation
  const greetingCharacters = Array.from(greeting).map((char, index) =>
    char === ' ' ? '\u00A0' : char
  );

  return (
    <>
      <div className="h-full mx-2">
        {/* Greeting Header */}
        <div className="w-full flex justify-center pb-1">
          <h1>
            <span className="home-header wave">
              {greetingCharacters.map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}> 
                  {letter}
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start justify-center mt-4">
          <div className="flex flex-col items-start">
            {/* Profile Image + Tagline/Socials Block */}
            <div className="flex flex-row items-center mb-4">
              <img
                src={me}
                alt="Viraj Sanap" // Added a more descriptive alt text
                className="w-[450px] h-[250px] object-cover flex-shrink-0 shadow-lg" // Added rounded-lg, shadow-lg, object-cover
              />
              <div className="ml-8 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👨‍💻</span>
                  <span>ML Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>Raleigh, NC</span>
                </div>
                <div className="flex items-center gap-7 mt-3">
                  <a
                    href="https://www.linkedin.com/in/virajsanap14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile" // Added aria-label for accessibility
                    className="text-2xl hover:text-orange-500 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/virajsanap"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile" // Added aria-label
                    className="text-2xl hover:text-orange-500 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:viraj.sanap@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Viraj" // Added aria-label
                    className="text-2xl hover:text-orange-500 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>

            {/* About Me Text Block */}
            <div className="text-left max-w-4xl">
              <p>
                <b className="block mb-1">About Me</b>
                I'm Viraj, a passionate tech enthusiast. Recently I graduated with a Master's degree in Electrical and Computer Engineering from NC State University in Raleigh, NC.<br />
                My work revolves around harnessing Machine Learning, Data Science, and Computer Vision to create innovative solutions that address real-world challenges. I'm driven by the desire to develop socially impactful technology that makes a difference.
              </p>
              
              {/* Job Search Information Box */}
              <div className="border border-solid p-1 mt-6">
                <p>
                  I'm currently looking for full-time <b>Machine Learning / Data Science roles</b> starting <b>June 2025</b> in the US.
                  If you're hiring — or know someone who is — I'd love to connect and explore how I could contribute to your team!
                </p>
                <p>
                  Reach out anytime at&nbsp;
                  <a
                    href="mailto:viraj.sanap@gmail.com"
                    className="text-orange-600 hover:underline"
                  >
                    viraj.sanap@gmail.com
                  </a>
                  . You can also find me on&nbsp;
                  <a
                    href="https://www.linkedin.com/in/virajsanap14/"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="https://github.com/virajsanap"
                    className="text-orange-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          •───────• Built with <a href="https://github.com/virajsanap/virajsanap.github.io" className="text-orange-500 hover:underline">˙ᵕ˙</a> •───────•
        </div>
      </div>
    </>
  );
}

export default HomeContent;