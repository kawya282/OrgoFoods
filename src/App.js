import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import JoinUs from './pages/join us/JoinUs';
import Login from './pages/registration/Login';
import Dashboard from './pages/admin/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/joinus" element ={<JoinUs/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/admin" element ={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
