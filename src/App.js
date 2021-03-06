import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddService from './components/AddService/AddService';
import Blogs from './components/Blogs/Blogs';
import CheckDetails from './components/CheckDetails/CheckDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
 
// import Permission from './components/Permission/Permission';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Stock from './components/Stock/Stock';

function App() {
  return (
    <div>
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        
        <Route path ='/stock' element={<Stock></Stock>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/checkout/:checkoutId' element={<RequireAuth><CheckDetails></CheckDetails></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/addservice' element={<RequireAuth><AddService></AddService></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
