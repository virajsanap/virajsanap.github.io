import React from "react";
import './App.css';
import me from './assets/profileimg2.jpg';
import logo from './assets/brainlogo1.png';

function HomeContent() {
  const greeting = "hi i'm Viraj";
  // Replace spaces with non-breaking spaces to keep spacing intact
  const greetingCharacters = Array.from(greeting).map(char =>
    char === ' ' ? '\u00A0' : char
  );

  return (
    <>
    <div className="h-full p-2">
      <div className="h-full w-full flex flex-col justify-center items-center">
        
        {/* Animated Header */}
        <h1 className="pt-10 pb-5 text-center">
          <span className="home-header wave">
            {greetingCharacters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
        </h1>
        
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
            <a href="mailto:viraj.sanap@gmail.com" className="text-amber-700 hover:underline"> viraj.sanap@gmail.com</a><br /><br />
            Else, find me at: 
            <a href="https://www.linkedin.com/in/virajsanap14/" className="text-amber-700 hover:underline"> LinkedIn</a>, 
            <a href="https://github.com/virajsanap" className="text-amber-700 hover:underline"> GitHub</a><br /><br />
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
