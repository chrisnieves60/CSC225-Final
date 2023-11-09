import { Link } from "react-router-dom";
import Star from "../../public/Screenshot 2023-11-07 at 5.22.52 PM.png";

const Nav = () => {
  return (
    <nav className="flex items-center bg-blue-500  px-4">
      <img src={Star} className="w-12 mr-2" alt="star" /> {/* Image on the left */}
      <div className="flex-grow"> {/* Spacer that grows to push the links to the right */}
        <Link className="text-white font-bold px-3" to="/">Home</Link>
        <Link className="text-white px-3" to="/Stars">Stars</Link>
        <Link className="text-white px-3" to="/About">About</Link>
        <Link className="text-white px-3" to="/Contact">Contact</Link>
      </div>
      <Link to="/Checkout" className="flex items-center text-white font-bold">
        <span>Checkout</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h3l3 9h10l3-9H6"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 13a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </Link>
    </nav>
  );
};

export default Nav;