import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Euro from './HomeCopy';
import Mad from './Home';
import Order from './Orders';
import Home from './welcome'; // Replace with your desired default component
import WelcomeAdmin from './welcomeAdmin'; // Replace with your desired default component
import AddOrder from './addOrder';
import Bugs from './Bugs';
import UpdateOrder from './UpdateOrder';
import UpdateSelectedOrder from './UpdateSelectedOrder';
import Client from './Client';
import Fortnite from './ItemShop';
import Paypal from './Paypal';
import Giveaway from './Giveaway';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Giveaway" element={<Giveaway />} />
        <Route path="/Fortnite" element={<Fortnite />} />
        <Route path="/mad" element={<Mad />} />
        <Route path="/client" element={<Client />} />
        <Route path="/euro" element={<Euro />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/updateOrder" element={<UpdateOrder />} />
        <Route path="/bugList" element={<Bugs />} />
        <Route path="/updateSelectedOrder" element={<UpdateSelectedOrder />} />
        <Route path="/*" element={<Home />} />
        <Route path="/welcomeAdmin" element={<WelcomeAdmin />} />
        <Route path="/paypal" element={<Paypal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;