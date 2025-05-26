import React from "react";
import './App.css';
import me from './assets/profileimg2.jpg';
import logo from './assets/brainlogo1.png';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function HomeContent() {
  const greeting = "Hi I'm Viraj!";
  // Replace spaces with non-breaking spaces to keep spacing intact
  const greetingCharacters = Array.from(greeting).map(char =>
    char === ' ' ? '\u00A0' : char
  );

  return (
    <>
      <div className="h-full p-1">
        <div className="w-full flex justify-center pb-1">
          <h1>
            <span className="home-header wave">
              {greetingCharacters.map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start mt-4 px-4 gap-10">

          {/* Left column: Greeting, Image, About */}
          <div className="flex flex-col items-start">
            {/* Profile Image + Tagline */}
            <div className="flex flex-row items-start mb-4">
              <img
                src={me}
                alt="Me"
                className="w-[270px] h-[270px] object-cover rounded shadow"
              />
              <div className="ml-10 mt-8 space-y-1 text-sm ">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👨‍💻</span>
                  <span>ML Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>Raleigh, NC</span>
                </div>
                <div className="flex items-center gap-7 mt-2">
                  <a
                    href="https://www.linkedin.com/in/virajsanap14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-orange-600 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/virajsanap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-orange-600 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:viraj.sanap@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-orange-600 transition"
                  >
                    <FaEnvelope/>
                  </a>
                </div>
              </div>
          </div>

            {/* About Me */}
            <div className="text-left max-w-xl">
              <p>
                <b>About Me</b><br/>
                I'm Viraj, a passionate tech enthusiast. Recently I graduated with a Master's degree in Electrical and Computer Engineering from NC State University in Raleigh, NC.<br />
                My work revolves around harnessing Machine Learning, Data Science, and Computer Vision to create innovative solutions that address real-world challenges. I'm driven by the desire to develop socially impactful technology that makes a difference.
                <br /><br />
                {/* Reach out anytime at&nbsp;
                <b><a href="mailto:viraj.sanap@gmail.com" className=" hover:underline">viraj.sanap@gmail.com</a></b><br /><br />
                Else, find me at:&nbsp;
                <b><a href="https://www.linkedin.com/in/virajsanap14/" className="hover:underline">LinkedIn</a>,&nbsp; 
                <a href="https://github.com/virajsanap" className="hover:underline">GitHub</a></b><br /><br /> */}
              </p>
              <div className="border border-solid p-2">
                <p>
                  I'm currently looking for full-time <b>Machine Learning / Data Science roles</b> starting <b>June 2025</b> in the US.
                  If you're hiring — or know someone who is — I'd love to connect and explore how I could contribute to your team!
                </p>
                <p className="mt-3">
                  Reach out anytime at&nbsp;
                  <a
                    href="mailto:viraj.sanap@gmail.com"
                    className="font-semibold hover:underline hover:text-orange-600"
                  >
                    viraj.sanap@gmail.com
                  </a>
                  . You can also find me on&nbsp;
                  <a
                    href="https://www.linkedin.com/in/virajsanap14/"
                    className="font-semibold hover:underline hover:text-orange-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    href="https://github.com/virajsanap"
                    className="font-semibold hover:underline hover:text-orange-600"
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
        <div className="w-full text-center mt-5">
          •───────• Built with <a href="https://github.com/virajsanap/virajsanap.github.io">˙ᵕ˙</a> •───────•
        </div>
      </div>
    </>
  );
}

export default HomeContent;
