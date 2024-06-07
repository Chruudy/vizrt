import React from "react";
import Header from '../components/header';
import VizLibero from "../components/VizLiberoInfo";
import Footer from '../components/footer';

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizLibero />
            <Footer />
        </div>
    )
}