// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Experience from './Experience';
import HomeContent from './HomeContent';
import HomeContentMobile from './HomeContentMobile';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <PageWrapper>
                <HomeContentMobile />
              </PageWrapper>
            }
          />
          <Route
            path="projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="experience"
            element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            }
          />
          <Route
            path="resume"
            element={
              <PageWrapper>
                <Resume />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}   // Start slightly above
      animate={{ opacity: 1, y: 0 }}     // Animate to normal position
      exit={{ opacity: 0, y: 30 }}       // Exit downward
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
