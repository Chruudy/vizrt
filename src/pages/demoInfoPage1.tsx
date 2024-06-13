import React from "react";
import Header from '../components/header';
import VizArena from "../components/VizArenaInfo";
import Footer from '../components/footer';
//test

export default function demoInfoPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <VizArena />
            <Footer />
        </div>
    )
}