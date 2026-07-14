import React, { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import { SearchX } from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex items-center justify-between mt-6 mb-2">
          <h2 className="text-2xl font-extrabold px-1">
            {searchTerm || selectedCategory !== "All"
              ? `Results (${filterProducts.length})`
              : `Featured Gear (${products.length} Items)`}
          </h2>
          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={clearFilters}
              className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition duration-200 underline underline-offset-2"
            >
              Clear Filters
            </button>
          )}
        </div>

        {filterProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="p-6 bg-gray-900 rounded-full border border-gray-800 mb-6">
              <SearchX className="w-14 h-14 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Products Found</h3>
            <p className="text-gray-500 text-base max-w-sm mb-8">
              We couldn't find anything matching{" "}
              {searchTerm && <span className="text-orange-400">"{searchTerm}"</span>}
              {searchTerm && selectedCategory !== "All" && " in "}
              {selectedCategory !== "All" && (
                <span className="text-orange-400">{selectedCategory}</span>
              )}
              . Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition duration-300 shadow-lg shadow-orange-800/40"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
            {filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;

