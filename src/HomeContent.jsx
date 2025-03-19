import React from "react";
import './App.css'
import me from './assets/profileimg2.jpg'
import logo from './assets/brainlogo1.png';

function HomeContent() {
  const text= "hi, i'm viraj!"
    return (
        <>
        <div className="h-full p-2 ">
        <div className="h-full w-full  flex flex-col justify-center items-center ">
            
        <h1 className="text-4xl font-bold relative text-blue">
          <span>
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={char === " " ? "inline-block w-2" : "inline-block animate-wave"}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>

     
            {/* Image Section */}
            <div className="self-start p-4">
            <img src={me} alt="Me" className="w-50 h-50 full object-cover" /> 
            </div>
            <div className="text-left">
            <p>
                Hello! 👋<br />
                I'm Viraj, hailing from the vibrant city of Pune, India. <br />
                Currently, I am pursuing a Master's degree in Electrical and Computer Engineering at NC State University. <br />
                My passion lies in harnessing the power of Machine Learning, Data Science, and Computer Vision to develop innovative solutions for real-world challenges.<br/>
                
            </p>
            </div>
        </div>
        </div>

        </>
    );
  }
  
  export default HomeContent;