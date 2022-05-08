import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PagenotFound/PageNotFound';
import Registration from './Components/Registration/Registration';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ServiceDetail from './Components/ServiceDetial/ServiceDetial';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>

        <Route path="/About" element={<About></About>}></Route>
        <Route path='/product/:Id' element={<ServiceDetail> </ServiceDetail>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
