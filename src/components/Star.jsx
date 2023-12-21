import { useParams, Link } from 'react-router-dom';
import StarInfo from './StarInfo';
import { useState } from 'react';

const Star = ({ addToCart }) => {
  const { id } = useParams();
  const [itemAdded, setItemAdded] = useState(); 
  const star = StarInfo.find((star) => star.id.toString() === id);

  const handleClick = () => {
    addToCart(star)
    setItemAdded(1); 
    setTimeout(() => {
        setItemAdded(0)
    }, 2500)
  }
  return (
    <div className="text-white py-3">
  {star ? (
    <div className="container w-3/4 mx-auto px-4">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-5">
        <h1 className="text-4xl font-bold mb-3">{star.name}</h1>

        {/* Image and Details in Flex Container */}
        <div className="flex mb-5">
          <img className="w-1/2 h-64 object-contain" src={star.imageUrl} alt={star.name} />
          <div className="ml-4">
            <p className="text-gray-300 mb-3">Type: {star.type}</p>
            <p className="text-gray-300 mb-3">Age: {star.age}</p>
            <p className="text-gray-300 mb-3">Distance: {star.distance}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-3">{star.description}</p>

       
        <div className="flex justify-between items-center mb-5">
          <button 
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Add to Cart
          </button>
          {itemAdded ? <p className='text-red-500'>Item Added to Cart!</p> : null}

          <span className="text-2xl font-semibold">{`$${star.price}`}</span>
          
        </div>

        <div className="text-center">
          <Link 
            to="/Checkout" 
            className="bg-orange-800 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mx-auto px-4">
      <p className="text-center">Star not found</p>
    </div>
  )}
</div>

  );
};

export default Star;
