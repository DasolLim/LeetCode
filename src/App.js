import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProblemList from './components/ProblemList';
import ProblemDetails from './components/ProblemDetails';

function App() {
  return (
    <Router basename="/LeetCode">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProblemList />} />
          <Route path="/problem/:id" element={<ProblemDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
