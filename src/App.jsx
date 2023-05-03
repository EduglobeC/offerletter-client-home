import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import components
import Homepage from './pages/homepage/Homepage';

// style
import './App.css';
import Signup from './pages/signup/Signup';
import Services from './pages/services/Services';
import Schools from './pages/schools/Schools';
import ResetPassword from './pages/signup/ResetPassword';
import Canada from './pages/schools/canada';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />
        {/* Login and Signup */}
        <Route path="/login" element={<Signup />} />
        {/* Reset password */}
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Services */}
        <Route path="/services" element={<Services />} />
        {/* Schools */}
        <Route path="/canada" element={<Canada />} />
        <Route path="/uk" element={<Schools country="uk" />} />
        <Route path="/australia" element={<Schools country="australia" />} />
      </Routes>
    </div>
  );
}

export default App;
