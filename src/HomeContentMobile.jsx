import React from "react";
import "./App.css";
import me from "./assets/profileimg2.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function HomeContentMobile() {
  const greeting = "Hi I'm Viraj!";
  const greetingCharacters = Array.from(greeting).map((char) =>
    char === " " ? "\u00A0" : char
  );

  return (
    <div className="h-full overflow-x-hidden px-3 sm:px-4 lg:px-8 max-w-full mx-auto">
      {/* Greeting Header */}
      <div className="w-full flex justify-center pb-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          {/* {greetingCharacters.map((letter, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="home-header wave"
            >
              {letter}
            </span>
          ))} */}
          {greeting}
        </h1>
      </div>

      {/* Profile + Info Section */}
      <div className="w-full flex flex-col sm:flex-col md:flex-row items-start justify-center mt-4 md:mt-6 gap-4 min-w-0">
        <div className="flex flex-col items-center md:items-start w-full min-w-0">
          {/* Profile Image + Socials */}
          <div className="flex flex-col sm:flex-col md:flex-row items-center md:items-start w-full flex-wrap min-w-0">
            <img
              src={me}
              alt="Viraj Sanap"
              className="w-full sm:max-w-[350px] md:max-w-[450px] h-auto sm:h-[220px] md:h-[250px] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-2 md:mt-0 md:ml-6 flex-1 min-w-0 space-y-2 text-sm sm:text-base text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">👨‍💻</span>
                <span>ML Engineer</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-lg">📍</span>
                <span>Raleigh, NC</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6 mt-3">
                <a
                  href="https://www.linkedin.com/in/virajsanap14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:text-orange-500 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/virajsanap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:text-orange-500 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:viraj.sanap@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:text-orange-500 transition-colors"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="text-left w-full mt-4 min-w-0">
            <p className="text-sm sm:text-base leading-relaxed">
              <b className="block mb-1 text-base sm:text-lg">About Me</b>
              I'm Viraj, a passionate tech enthusiast. Recently I graduated with a Master's degree in Electrical and Computer Engineering from NC State University in Raleigh, NC.
              <br />
              My work revolves around harnessing Machine Learning, Data Science, and Computer Vision to create innovative solutions that address real-world challenges. I'm driven by the desire to develop socially impactful technology that makes a difference.
            </p>

            {/* Job Search Info Box */}
            <div className="border border-solid p-3 mt-5 rounded-md bg-white/30 dark:bg-transparent min-w-0">
              <p className="text-sm sm:text-base leading-relaxed">
                I'm currently looking for full-time <b>Machine Learning / Data Science roles</b> starting <b>June 2025</b> in the US. If you're hiring — or know someone who is — I'd love to connect and explore how I could contribute to your team!
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed">
                Reach out anytime at{" "}
                <a href="mailto:viraj.sanap@gmail.com" className="text-orange-600 hover:underline">
                  viraj.sanap@gmail.com
                </a>
                . You can also find me on{" "}
                <a href="https://www.linkedin.com/in/virajsanap14/" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>{" "}
                and{" "}
                <a href="https://github.com/virajsanap" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full text-center mt-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        •───────• Built with{" "}
        <a href="https://github.com/virajsanap/virajsanap.github.io" className="text-orange-500 hover:underline">˙ᵕ˙</a>{" "}
        •───────•
      </div>
    </div>
  );
}

export default HomeContentMobile;
