import React from 'react';
import ProductForm from '../components/ProductForm';
import Header from '../components/header';
import Footer from '../components/footer';

const TestPage = () => {
    return (
        <div className="overflow-hidden min-h-screen">
            <Header />
                <div className='w-full h-full'>
                    <ProductForm productId={null} />
                </div>
            <Footer />
        </div>
    );
};

export default TestPage;
