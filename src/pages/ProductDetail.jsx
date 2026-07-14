import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";
import Loading from "../components/Loading";

import { ChevronLeft, Tag, Zap, Star, CheckCircle, ShoppingCart, ArrowLeft } from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    const found = initialProducts.find((data) => data.id == id);
    setProduct(found || null);
    setLoading(false);
  }, [id]);

  if (loading) return <Loading />;

  if (!product) {
    return (
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <Link to="/" className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg w-fit">
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to All Products</span>
        </Link>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="p-8 bg-gray-900 rounded-full border border-gray-800 mb-6">
            <ShoppingCart className="w-16 h-16 text-gray-700" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Product Not Found</h2>
          <p className="text-gray-500 text-base max-w-sm mb-8">
            Sorry, the product you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-800/40 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Browse All Products</span>
          </Link>
        </div>
      </div>
    );
  }

  // Static 4.5-star rating display
  const rating = 4.5;
  const fullStars = Math.floor(rating);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link to={"/"}>
          <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full flex items-center justify-center">
            <div className="relative">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full max-w-[420px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-xs font-bold flex items-center space-x-1">
                <CheckCircle className="w-3 h-3" />
                <span>In Stock</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs font-bold text-orange-400 uppercase tracking-wider">
                  {product?.category}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
                {product?.name}
              </h1>

              {/* Star rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  <div className="relative w-5 h-5">
                    <Star className="w-5 h-5 text-gray-600 fill-gray-600 absolute" />
                    <div className="overflow-hidden w-[50%] absolute">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-400 font-medium">4.5 / 5.0</span>
                <span className="text-sm text-gray-600">· 128 reviews</span>
              </div>

              <p className="text-3xl font-extrabold text-orange-400 mb-5">
                ₹{product?.price.toLocaleString("en-IN")}
              </p>

              <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-orange-900/30 pb-2 flex items-center space-x-2">
                <Tag className="w-5 h-5 text-orange-500" />
                <span>Product Overview</span>
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-5">
                {product?.description}
              </p>

              <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700 mb-6">
                <li className="flex items-center space-x-3 text-base">
                  <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>High-Quality, Professional Grade Materials</span>
                </li>
                <li className="flex items-center space-x-3 text-base">
                  <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Comprehensive 1-Year Manufacturer Warranty</span>
                </li>
                <li className="flex items-center space-x-3 text-base">
                  <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Immediate Shipping for In-Stock Items</span>
                </li>
              </ul>
            </div>

            <div className="mt-2 space-y-4 flex justify-center items-center flex-col">
              <button
                onClick={() => addToCart(product)}
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider text-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>

              <Link
                to={"/"}
                className="w-full py-3 border-2 border-orange-600 text-orange-400 font-bold rounded-full cursor-pointer hover:bg-orange-900/30 transition duration-300 uppercase tracking-wider text-center"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

