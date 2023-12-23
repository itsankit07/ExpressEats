import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
// import Cart from './components/Cart';
import { Suspense, lazy } from 'react';
import ShimmerMenu from './components/ShimmerMenu';
const About = lazy(()=>import("./components/About"));
const Cart = lazy(()=>import("./components/Cart"));

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/restaurants/:resId" element= {<RestaurantMenu/>}/>
        <Route path = "/cart" element=  {<Suspense fallback = {<ShimmerMenu/>} > <Cart/> </Suspense>}/>
        <Route path = "/offers" element= {<Home/>}/>
        <Route path = "/about" element = {<Suspense fallback = {<ShimmerMenu/>} > <About/> </Suspense>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
