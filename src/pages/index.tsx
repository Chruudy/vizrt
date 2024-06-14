import React from "react";
import Header from "../components/header";
import Categories from "../components/categories";
import CarouselItems from "../components/CarouselItems";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Categories />
      <CarouselItems />
      <Footer />
    </div>
  );
}
