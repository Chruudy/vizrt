import React from "react";
import Header from '../components/header';
import VizLiberoDemo from '../components/VizLiberoDemo';
import Footer from '../components/footer';

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizLiberoDemo />
            <Footer />
        </div>
    )
}