import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddCamera from './Components/AddCamera/AddCamera';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageCamera from './Components/ManageCamaras/ManageCamera';
import Myitems from './Components/MyItems/Myitems';
import PageNotFound from './Components/PagenotFound/PageNotFound';
import ProductDetail from './Components/ProductDetial/ProductDetial';
import Registration from './Components/Registration/Registration';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import UpdateCamera from './Components/UpdateCamera/UpdateCamera';
import {BarLoader} from 'react-spinners'

function App() {
  

  return (
    
     <div className="App">
      <Header></Header>
      <Routes>
     <Route path="/"  element={  <Home>  </Home>  }></Route>
        <Route path="/Blog"  element={<Blog></Blog>}></Route>

        <Route path="/About"  element={<About></About>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="*"  element={<PageNotFound></PageNotFound>}></Route>
        <Route path='/Product/:Id' element={
        <RequireAuth><ProductDetail></ProductDetail></RequireAuth>}></Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/AddCamera" element={
          <RequireAuth>
            <AddCamera></AddCamera>
          </RequireAuth>
        }></Route>
        <Route path="/ManageCamera" element={
          <RequireAuth>
            <ManageCamera></ManageCamera>
          </RequireAuth>
        }></Route>
        <Route path="/UpdateCamera/:Id"  element={
          <RequireAuth>
            <UpdateCamera></UpdateCamera>
          </RequireAuth>
        }></Route>
         <Route path="/Myitems"  element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
    
      </Routes>
      <Footer></Footer>
       
     
    </div>
  );

 
}


export default App;
