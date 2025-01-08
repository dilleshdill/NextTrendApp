import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
const App= () =>{
  console.log(window.innerWidth)
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/header" element={<Header />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/' element = {<Home />} />
        <Route path='*' element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
