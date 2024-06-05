import React from "react";
import Header from '../components/header';
import VizArenaDemoInfo from "../components/VizArenaDemoInfo";
import Footer from '../components/footer';

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizArenaDemoInfo />
            <Footer />
        </div>
    )
}