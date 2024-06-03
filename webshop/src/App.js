import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import NotFound from './pages/global/NotFound';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import EditCategories from './pages/admin/EditCategories';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import Footer from './components/Footer';
import CarouselProducts from './components/CarouselProducts';
import ModalStart from './components/ModalStart';


function App() {  return (
    <div className="App">
      <ModalStart/>
      <NavigationBar/>
       {/* <CarouselProducts/><hr /> <br /> */}
      
        <Routes>
          <Route path='' element={<HomePage/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='shops' element={<Shops/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='product/:index' element={<SingleProduct/>}></Route>

          <Route path='admin' element={<AdminHome/>}></Route>
          <Route path='admin/add-product' element={<AddProduct/>}></Route>
          <Route path='admin/edit-product/:index' element={<EditProduct/>}></Route>
          <Route path='admin/maintain-products' element={<MaintainProducts/>}></Route>
          <Route path='admin/edit-categories' element={<EditCategories/>}></Route>
          <Route path='admin/maintain-shops' element={<MaintainShops/>}></Route>

          <Route path='global/SingleProduct/:index' element={<SingleProduct/>}></Route>

          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>

          <Route path='Footer' element={<Footer/>}></Route>
          <Route path='CarouselProducts' element={<CarouselProducts/>}></Route>

          <Route path='*' element={<NotFound/>}></Route>

        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
