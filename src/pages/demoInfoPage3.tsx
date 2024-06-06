import React from "react";
import Header from '../components/header';
import VizWorld from "../components/VizWorldInfo";
import Footer from '../components/footer';

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizWorld />
            <Footer />
        </div>
    )
}