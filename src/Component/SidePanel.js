import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/SidePanel.css'; // Import CSS for styling
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const SidePanel = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('token');
        navigate('/login');
      };
  return (
    <div className="side-panel">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/BookYourTable">
              <button className="side-button">BookYourTable</button>
            </Link>
          </li>
          <li>
            <Link to="/orderpage">
              <button className="side-button">Order</button>
            </Link>
          </li>
          <li>
            <Link to="/mybookings">
              <button className="side-button">MyBookings</button>
            </Link>
          </li>
          <li>
            <Link to="/myorders">
              <button className="side-button">MyOrders</button>
            </Link>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
  );
};

export default SidePanel;