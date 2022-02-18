import React from 'react';
import '../App.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="navbar navbar-dark bg-dark">
      <div className='container-fluid'>
  <a className="navbar-brand" href='#home' onClick={()=> handlePageChange('Home')}><h1>Taylor Garrey</h1></a>    
  
  <ul className="nav nav-tabs mx-auto home-link">
      <li className="nav-item ">
        <a className="home-link"
          href="#home"
          onClick={() => handlePageChange('Home')}
         

          className={currentPage === 'Home' ? 'nav-link myactive' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
      
          className={currentPage === 'Contact' ? 'nav-link myactive' : 'nav-link'}
        >
        Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        

          className={currentPage === 'Portfolio' ? 'nav-link myactive' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
        

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link myactive' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
    </header>
    
  );



}


export default Nav;
