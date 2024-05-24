import React from 'react';
import AdminPanel from '../Component/AdminPanel';


const Admindashboard = () => {
  return (
    <div className="homepage-container">
      {/* Side Panel */}
      <AdminPanel/>
      {/* Main Content */}
      
     {/* <div className="text"> */}
     <div className="main-content">
        {/* Content goes here */}
        <h1 text-align="center" color='red'>Welcome to Our Restaurant Management </h1>
        <p>This is the homepage of the Fast-Food Management System.</p>
        <p>Select an option from the navigation to proceed.</p>

        {/* Additional Content */}
        <div>
          <h2>Features:</h2>
          <ul>
            <li>Order Management</li>
            <li>Feedback Collection</li>
            <li>Table Booking</li>
            <li>Customer Management</li>
            <li>Employee Management</li>
          </ul>
          {/* <div class="container"></div> */}
        </div>
   
        
      </div>
    </div>
  );
};

export default Admindashboard;