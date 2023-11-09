import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Nav from './components/Nav';
import "./index.css"
import Stars from './components/Stars';
import Star from './components/Star';
import { useState } from 'react';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (star) => {
    //check if star is in cart already
    setCart(currentCart => {
      const isAlreadyInCart = currentCart.some(item => item.id === star.id);
      if(!isAlreadyInCart){
        //If not, add star to cart
        return [...currentCart, star]
      }

      return currentCart; 
    }) 
  }

  //when starid route is explored, we pass addToCart function into Star, so that
  //the user may add the star to his cart. 
  return (
    <Router>
      <div className='bg-hero bg-cover min-h-screen w-full '>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/> {/* Removed Outlet and index route seems to be for Home component */}
          <Route path="/about" element={<About/>}/> 
          <Route path="/Stars" element={<Stars/>}/>
          <Route path="/Stars/:id" element={<Star addToCart={addToCart}/>}/>
          <Route path="/Checkout" element={<Checkout cart={cart}/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
