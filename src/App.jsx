import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
// Import individual blog post components
import JavaScriptPerformanceOptimization from './pages/BlogPosts/JavaScriptPerformanceOptimization';
import BuildingScalableAPIs from './pages/BlogPosts/BuildingScalableAPIs';
import ExportingGridDataToExcel from './pages/BlogPosts/ExportingGridDataToExcel';
import ModernCssTechniques from './pages/BlogPosts/ModernCssTechniques';
import MasteringReactHooks from './pages/BlogPosts/MasteringReactHooks';
import FromGamerToFullStackDeveloper from './pages/BlogPosts/FromGamerToFullStackDeveloper';
import AddingFirebaseToJavaScriptProject from './pages/BlogPosts/AddingFirebaseToJavaScriptProject';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-portfolio-neutral-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Individual blog post routes */}
          <Route path="/blog/javascript-performance-optimization" element={<JavaScriptPerformanceOptimization />} />
          <Route path="/blog/building-scalable-apis-nodejs" element={<BuildingScalableAPIs />} />
          <Route path="/blog/exporting-grid-data-to-excel-bryntum" element={<ExportingGridDataToExcel />} />
          <Route path="/blog/modern-css-techniques" element={<ModernCssTechniques />} />
          <Route path="/blog/mastering-react-hooks" element={<MasteringReactHooks />} />
          <Route path="/blog/from-gamer-to-full-stack-developer" element={<FromGamerToFullStackDeveloper />} />
          <Route path="/blog/adding-firebase-to-javascript-project" element={<AddingFirebaseToJavaScriptProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
