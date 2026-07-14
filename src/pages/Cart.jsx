import React from "react";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

import { ShoppingCart, ChevronLeft, Zap, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="relative mb-8">
            <div className="p-8 bg-gray-900 rounded-full border border-gray-800 shadow-2xl">
              <ShoppingBag className="w-20 h-20 text-gray-700" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-gray-950">
              0
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 text-base max-w-sm mb-10">
            Looks like you haven't added anything yet. Explore our premium tech collection and find something you'll love.
          </p>
          <Link
            to={"/"}
            className="px-10 py-4 bg-orange-600 text-white font-extrabold text-lg rounded-full shadow-lg shadow-orange-800/50 hover:bg-orange-700 transition duration-300 flex items-center space-x-2 hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
          Shopping Cart ({cartCount})
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl sticky top-20 h-fit border border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-gray-700 pb-3 flex items-center space-x-2">
              <span className="w-6 h-6 text-orange-400">₹</span>
              <span>Order Total</span>
            </h3>
            <div className="space-y-4 text-gray-400">
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
              <div className="flex justify-between pt-6 border-t border-gray-700">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total:
                </span>
                <span className="text-2xl font-extrabold text-orange-400">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to={"/checkout"}
              className="w-full mt-8 py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
            >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>
            
            <p className="text-xs text-gray-500 text-center mt-4">All transactions are encrypted and secure.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

