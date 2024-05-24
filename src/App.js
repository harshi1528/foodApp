import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from '../src/Component/Signup';
import Logincomp from '../src/Component/Login';
import BookYourTable from './User/BookYourTable';
import HomePage from '../src/User/HomePage';
import Cookies from 'js-cookie';
import OrderPage from '../src/User/OrderPage';
import Admindashboard from '../src/Admin/AdminDashboard';
import TableBooking from '../src/Admin/TableBooking';
import MenuItemForm from '../src/Admin/MenuItemForm';
import OrderDetails from '../src/Admin/OrderDetails';
import MyOrders from './User/MyOrders';
import MyBookings from './User/MyBookings';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setLoggedIn(true);
    }
    setLoading(false);
  }, []);


  // Redirect to login if not logged in
  if (!loggedIn && window.location.pathname !== '/login') {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Logincomp onLogin={() => setLoggedIn(true)} />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/BookYourTable" element={<BookYourTable />} />
        <Route path='/admindashboard' element={<Admindashboard/>}/>
        <Route path='/admin/tablebookings' element={<TableBooking/>}/>
        <Route path='/admin/menuitems' element={<MenuItemForm/>}/>
        <Route path='/admin/orderdetails' element={<OrderDetails/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
      </Routes>
    </div>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;