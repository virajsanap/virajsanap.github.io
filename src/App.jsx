import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Experience from './Experience';
import HomeContent from './HomeContent';
import './App.css'
import AnimatedRoutes from './AnimatedRoutes';


export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
      {/* <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<HomeContent />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="resume" element={<Resume />} />
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}
