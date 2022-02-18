import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  //  This will reander pages based on the click 
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home/>;
    }
    if (currentPage === 'Contact') {
      return <Contact/>;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio/>;
    }
    if (currentPage === 'Resume') {
        return <Resume/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}