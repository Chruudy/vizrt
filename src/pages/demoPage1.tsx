import React from "react";
import Header from '../components/header';
import VizArenaDemo from "../components/VizArenaDemo";
import Footer from '../components/footer';

export default function demoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizArenaDemo />
            <Footer />
        </div>
    )
}