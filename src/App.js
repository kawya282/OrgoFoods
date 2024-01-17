import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Admin from './pages/admin/Admin';
import Cart from './pages/cart/Cart';
import JoinUs from './pages/join us/JoinUs';
import Login from './pages/registration/Login';
import SignUp from './pages/registration/SignUp';

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
          <Route path="/signup" element ={<SignUp/>}/>
          <Route path="/admin" element = {<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
