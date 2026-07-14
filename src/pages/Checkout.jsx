import React, { useState } from "react";

import { useCart } from "../context/CartContext";
import OrderConfirmation from "./OrderConfirmation";
import { Link } from "react-router-dom";

import { Package, MapPin, ShoppingBag, ChevronLeft } from "lucide-react";

const fieldConfig = {
  name:    { label: "Full Name",     type: "text",   placeholder: "John Doe" },
  email:   { label: "Email Address", type: "email",  placeholder: "john@example.com" },
  phone:   { label: "Phone Number",  type: "tel",    placeholder: "+91 98765 43210" },
  address: { label: "Street Address",type: "text",   placeholder: "123 Main Street, Apartment 4B" },
  city:    { label: "City",          type: "text",   placeholder: "Mumbai" },
  zip:     { label: "PIN Code",      type: "number", placeholder: "400001" },
};

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  if (isConfirmed)
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link to={"/"} className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="p-8 bg-gray-900 rounded-full border border-gray-800 mb-6">
            <ShoppingBag className="w-16 h-16 text-gray-700" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Nothing to Checkout</h2>
          <p className="text-gray-500 text-base max-w-sm mb-8">
            Your cart is empty. Add some items before proceeding to checkout.
          </p>
          <Link to={"/"} className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-800/40">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 pb-16">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="w-7 h-7 text-orange-500" />
              <span>Shipping Information</span>
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {fieldConfig[key]?.label || key}
                  </label>
                  <input
                    type={fieldConfig[key]?.type || "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    placeholder={fieldConfig[key]?.placeholder || ""}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500 transition duration-200"
                  />
                </div>
              ))}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
                >
                  <span>₹ Pay and Confirm Order (₹{cartTotal.toFixed(2)})</span>
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary in Checkout */}
          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl sticky top-20 h-fit border border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
              <Package className="w-6 h-6 text-orange-400" />
              <span>Summary</span>
            </h3>
            <div className="space-y-4 text-gray-400">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-gray-800 pb-2"
                >
                  <div className="flex items-start space-x-2 max-w-[65%]">
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg border border-gray-700 flex-shrink-0" />
                    <span className="truncate text-gray-300 text-sm leading-tight">{item.name} × {item.quantity}</span>
                  </div>
                  <span className="font-medium text-orange-300 flex-shrink-0">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="space-y-3 text-gray-400 pt-2">
                <div className="flex justify-between text-xl">
                  <span>Subtotal :</span>
                  <span className="font-semibold text-white">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xl">
                  <span>Shipping (Express):</span>
                  <span className="font-semibold text-green-400">Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-700">
                  <span className="text-2xl font-extrabold text-white">
                    Total Due:
                  </span>
                  <span className="text-2xl font-extrabold text-orange-400">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
