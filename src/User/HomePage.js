import React from 'react';
import { Link } from 'react-router-dom';
import SidePanel from '../Component/SidePanel'; 
import '../Styles/HomePage.css' 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <SidePanel />
      <div className="main-content">
        <h1 className="text-white-">Welcome to Fast-Food Management System</h1>
        <p>This is the homepage of the Fast-Food Management System.</p>
        <p>Select an option from the navigation to proceed.</p>

        <div>
          <h2>Features:</h2>
          <ul>
            <li>Order Management</li>
            <li>Table Booking</li>
            <li>Customer Management</li>
            <li>Employee Management</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default HomePage;