import React from 'react';
import ProductForm from '../components/ProductForm';
import Header from '../components/header';
import Footer from '../components/footer';

const TestPage = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <h1 className="text-2xl font-bold mb-4">Test Page</h1>
            <ProductForm productId={0} />
            <Footer />
        </div>
    );
};

export default TestPage;