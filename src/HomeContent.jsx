import React from "react";
import './App.css';
import me from './assets/profileimg2.jpg';
import logo from './assets/brainlogo1.png';

function HomeContent() {
  const greetingCharacters = "hi, i'm viraj!";
  return (
    <>
      <div className="h-full p-2">
        <div className="h-full w-full flex flex-col justify-center items-center">
          
        {/* <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={char === " " ? "inline-block w-2" : "inline-block animate-wave"}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1> */}

        <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">hi! i'm viraj</h1>
        
          {/* Image Section */}
          <div className="flex justify-center p-5 items-center">
            <img src={me} alt="Me" className="w-[200px] h-[200px] object-cover" /> 
          </div>

          <div className="text-left">
            <p>
              Hello! 👋<br />
              I'm Viraj, a passionate tech enthusiast from Pune, India. Currently, I’m pursuing a Master's degree in Electrical and Computer Engineering at NC State University in Raleigh, NC.<br />
              My work revolves around harnessing Machine Learning, Data Science, and Computer Vision to create innovative solutions that address real-world challenges. I'm driven by the desire to develop socially impactful technology that makes a difference.
              <br /><br />
              Reach out anytime at 
              <a href="mailto:viraj.sanap@gmail.com" className="text-orange-800 hover:underline"> viraj.sanap@gmail.com</a><br /><br />
              Else, find me at: 
              <a href="https://www.linkedin.com/in/virajsanap14/" className="text-orange-800 hover:underline"> LinkedIn</a>, 
              <a href="https://github.com/virajsanap" className="text-orange-800 hover:underline"> GitHub</a><br /><br />
            </p>
          </div>
          
          <div className="w-full text-center">
            •───────• Built with <a href="https://github.com/virajsanap/virajsanap.github.io">˙ᵕ˙</a> •───────•
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
