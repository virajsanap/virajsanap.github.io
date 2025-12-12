// Home.jsx
import { NavLink, Outlet } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from "react";

function Home() {
  let [theme, setTheme] = useState("moon");
  const pages = [
    { title: "home", path: "/" },
    { title: "projects", path: "/projects" },
    { title: "experience", path: "/experience" },
    { title: "resume", path: "/resume" },
  ];

  function changeTheme() {
    const t = theme === "sun" ? "moon" : "sun";
    setTheme(t);
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme === "sun" ? "#404550" : "#F7EDC180";
    document.body.style.color = theme === "sun" ? "white" : "black";
  }, [theme]);

  // 1. Base: Box settings for mobile. On Desktop (md), we remove border and padding.
  const baseBoxStyle = "px-2 py-1 border rounded transition-all duration-200 text-sm sm:text-base md:border-0 md:p-0 md:text-lg";
  
  // 2. Inactive: Hover background works on mobile. On Desktop (md), hover background is transparent.
  const inactiveStyle = "border-gray-500/30 hover:border-orange-400 hover:bg-orange-50/10 hover:text-orange-500 md:hover:bg-transparent";
  
  // 3. Active: Background/Border on mobile. On Desktop (md), transparent background, no shadow, just bold text.
  const activeStyle = "bg-orange-100/20 border-orange-500 text-orange-500 font-bold shadow-sm md:bg-transparent md:shadow-none";

  return (
    <div className="flex flex-col justify-center w-full md:max-w-4xl mx-auto mt-[8vh] p-1">
      <div className="flex flex-col md:flex-row w-full ">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/6 flex justify-center">
          <nav
            className="w-full flex flex-row md:flex-col gap-1 text-lg flex-wrap
                       items-center md:items-end pr-3
                       text-center md:text-right mt-4 md:mt-20"
          >
            {pages.map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${baseBoxStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
              >
                {title}
              </NavLink>
            ))}
            <button
              onClick={changeTheme}
              className={`${baseBoxStyle} ${inactiveStyle} focus:outline-none`}
            >
              {theme}
            </button>
          </nav>
        </div>
  
        {/* Main Content Area */}
        <div className="w-full md:w-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
