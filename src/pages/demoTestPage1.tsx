import React from "react";
import Header from '../components/header';
import VizArenaDemo from '../components/vizArenaDemo';
import Footer from '../components/footer';

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizArenaDemo />
            <Footer />
        </div>
    )
}