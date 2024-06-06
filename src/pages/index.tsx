// Example of corrected index.tsx file
import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import CarouselItems from '../components/CarouselItems';
import Footer from '@/components/footer';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Categories />
            <CarouselItems />
            <Footer/>
        </div>
    );
}
