import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  // Save cart on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQtyChange = (id, qty) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: Number(qty) } : item
    ));
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleClear = () => {
    setCart([]);
    alert("You are going to remove all products from cart");
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mx-auto p-6">
      <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="text-left text-gray-600">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id} className="bg-white shadow rounded">
              <td className="flex items-center gap-3 p-4">
                <img  src={`http://37.27.29.18:8002/images/${item.image}`}
              alt={item.name} className="w-16 h-16 object-cover" />
                <span>{item.name}</span>
              </td>
              <td className="p-4">${item.price}</td>
              <td className="p-4">
                <select
                  value={item.qty}
                  onChange={(e) => handleQtyChange(item.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </td>
              <td className="p-4 font-semibold">${item.price * item.qty}</td>
              <td className="p-4">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Link to="/">
        <button className="border px-4 py-2 rounded">Return To Shop</button>
        </Link>
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded">Update Cart</button>
          <button
            onClick={handleClear}
            className="border px-4 py-2 rounded text-red-500 border-red-400 hover:bg-red-500 hover:text-white"
          >
            Remove all
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-6">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-3 py-2 rounded w-60"
          />
          <button className="border border-red-400 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
            Apply
          </button>
        </div>

        <div className="border rounded p-6 w-full max-w-sm shadow">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-3 mt-3">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="bg-red-500 text-white w-full py-2 rounded mt-4 hover:bg-red-600">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
