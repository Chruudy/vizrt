import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

interface Product {
  image: string;
  src: string;
  alt: string;
  name: string;
  price: string | number;
}

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [transactionComplete, setTransactionComplete] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState(0);

  useEffect(() => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    setProducts(cartItems);
  }, []);

  const removeFromCart = (indexToRemove: number) => {
    const updatedProducts = products.filter((_, index) => index !== indexToRemove);
    setProducts(updatedProducts);
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  };

  const handlePayment = () => {
    const totalAmount = products.reduce((sum, product) => {
      const price = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;
      return sum + (isNaN(price) ? 0 : price);
    }, 0);

    setTransactionAmount(totalAmount);
    setProducts([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setTransactionComplete(true);
  };

  const total = products.reduce((sum, product) => {
    const price = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-grey085 rounded-lg p-6 mb-6">
          {products.map((product, index) => (
            <div key={index} className="flex items-center mb-4 border-b border-grey075 pb-4">
              <div className="w-32 h-20 relative">
                <Image src={`data:image/jpeg;base64,${product.image}`} alt={product.alt} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{product.name}</h2>
              </div>
              <div className="flex ml-4 text-right">
                <p className="text-xl font-bold">{typeof product.price === 'string' ? product.price : `$${product.price}`}</p>
                <button className="text-white hover:text-red02" onClick={() => removeFromCart(index)}>
                  <DeleteIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {transactionComplete ? (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
            Transaction Complete: You spent ${transactionAmount.toFixed(2)}
          </div>
        ) : (
          <>
            <div className="bg-grey085 rounded-lg p-6 mb-6 flex justify-between items-center">
              <p className="text-2xl font-bold">Total:</p>
              <p className="text-2xl font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-end">
              <button className="bg-brandOrange text-white px-6 py-3 rounded-lg font-bold hover:bg-brandOrangeDarker transition duration-300" onClick={handlePayment}>Pay</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
