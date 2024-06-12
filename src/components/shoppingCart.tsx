"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from "./ProductList"

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setProducts(cartItems);
  }, []);

  const removeFromCart = (indexToRemove: any) => {
    const updatedProducts = products.filter((_, index) => index !== indexToRemove);
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const total = products.reduce((sum, product) => sum + parseInt(product.price.replace('$', '')), 0);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          {products.map((product, index) => (
            <div key={index} className="flex items-center mb-4 border-b border-grey085 pb-4">
              <div className="w-32 h-20 relative">
                <Image src={product.src} alt={product.alt} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-grey035">{product.description}</p>
              </div>
              <div className="ml-4 text-right">
                <p className="text-xl font-bold">{product.price}</p>
                <button className="text-red01 hover:text-red03" onClick={() => removeFromCart(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 rounded-lg p-6 mb-6 flex justify-between items-center">
          <p className="text-2xl font-bold">Total:</p>
          <p className="text-2xl font-bold">${total}</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-brandOrange text-white px-6 py-3 rounded-lg font-bold hover:bg-brandOrangeDarker transition duration-300">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
