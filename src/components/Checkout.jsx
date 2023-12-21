import { useNavigate } from "react-router-dom";
import StarInfo from "./StarInfo";
import { useState, useEffect } from "react";

const Checkout = ({ cart }) => {
const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false); 
  const [tax, setTax] = useState(0); 
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    email: '',
    paymentMethod: ''
  });

  useEffect(() => {
    // Calculate cart subtotal
    const subtotalSum = cart.reduce((currentTotal, item) => currentTotal + item.price, 0);
    const taxAmount = subtotalSum * 0.0875; // Assuming 8.75% sales tax
    const totalSum = subtotalSum + taxAmount + 16; // Adding a flat $16 shipping fee
    setSubtotal(subtotalSum);
    setTax(taxAmount);
    setTotal(totalSum);
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value
    });
  };
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true); 
    setTimeout(() => {
        navigate('/')
    }, 2000)
    console.log(orderDetails);
  };
  if(orderPlaced){
    return(
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-4 py-6">
        <h2 className="text-3xl font-bold text-white">Order placed!</h2>
      </div>
    )
  }
  return (
    <div className="py-10 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart:</h1>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-1">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <br/>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>shipping: $16</p>
        <p className="text-2xl font-semibold mb-4">Total: ${total.toFixed(2)}</p>

        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg">
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-2">Name</label>
            <input type="text" id="customerName" name="customerName" onChange={handleInputChange} value={orderDetails.customerName} className="w-full p-2 rounded text-black" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" onChange={handleInputChange} value={orderDetails.email} className="w-full p-2 rounded text-black" placeholder="you@example.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
            <select id="paymentMethod" name="paymentMethod" onChange={handleInputChange} value={orderDetails.paymentMethod} className="w-full p-2 rounded text-black" required>
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300" onClick={handleSubmit}>Place order</button>
        </form>

      </div>
    </div>
  );
};

export default Checkout;
