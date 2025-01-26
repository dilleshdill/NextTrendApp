import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import ProductItemDetails from './Components/ProductItemDetails/ProductItemDetails';
import ProductWraper from './Components/ProductItemDetails/ProductWraper';
const App= () =>{
  console.log(window.innerWidth)
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/login" element={<Login />} />
        <Route path='*' element = {<NotFound />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/' element = {<Home />} />
          <Route exact path='/products/:id' element = {<ProductWraper/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
