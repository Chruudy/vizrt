import React from 'react';
import ProductForm2 from '../components/ProductForm2';
import Header from '../components/header';
import Footer from '../components/footer';

const TestPage = () => {
    return (
        <div className="overflow-hidden min-h-screen">
            <Header />
            <main className="flex flex-col items-center justify-center py-8">
                <h1 className="text-2xl font-bold mb-4">Test Page</h1>
                <ProductForm2 productId={null} />
            </main>
            <Footer />
        </div>
    );
};

export default TestPage;
