import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';
import { ThemeProvider } from './context/ThemeContext';

// Wrapper to conditionally render Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  // Hide Navbar/Footer on Waitlist page if desired, or keep them. 
  // For now, let's keep them on Home, maybe hide on Waitlist for a focused flow.
  const isWaitlist = location.pathname === '/waitlist';

  return (
    <>
      {!isWaitlist && <Navbar />}
      {children}
      {!isWaitlist && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
