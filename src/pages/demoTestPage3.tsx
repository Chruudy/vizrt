import React from "react";
import Header from "../components/header";
import VizWorldDemo from "../components/VizWorldDemo";
import Footer from "../components/footer";

export default function demoInfoPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <VizWorldDemo />
      <Footer />
    </div>
  );
}
