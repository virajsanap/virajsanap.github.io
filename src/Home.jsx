// Home.jsx
import { NavLink, Outlet } from "react-router-dom";
import './App.css';
import React,{useState, useEffect} from "react";


function Home() {
  let [theme,setTheme] = useState("moon")
  // const [bgcolor, setBgcolor] = useState(["#fbf5ef"])
  const pages = [
    { title: "home", path: "/" },
    { title: "projects", path: "/projects" },
    { title: "experience", path: "/experience" },
    { title: "resume", path: "/resume" },
  ];

  function changeTheme(){
    var t = ((theme=="sun")?"moon":"sun")
    setTheme(t)
  };

  useEffect(()=>{
    document.body.style.backgroundColor = ((theme==="sun")?"#404550":"#f7edc1");
    document.body.style.color = ((theme=="sun")?"white":"black");
  },[theme]);
  

  return (
    
    <div className="flex flex-col justify-center w-full md:max-w-3xl mx-auto gap-8 mt-[8vh] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Sidebar */}
        <div className="w-full md:w-1/6 flex justify-center">
          <nav
            className="w-full flex flex-row md:flex-col gap-4 text-lg
                       items-center md:items-end pr-3
                       text-center md:text-right mt-4 md:mt-20"
          >
            {pages.map(({ path, title }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:text-black focus:outline-none ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                
                {title}
              </NavLink>
            ))}
            <button onClick={changeTheme} className={({ isActive }) =>
                  `hover:text-black focus:outline-none ${
                    isActive ? "font-bold" : ""
                  }`
                }>
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
