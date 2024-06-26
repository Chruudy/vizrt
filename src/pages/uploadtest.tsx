import React from "react";
import ProductForm from "../components/ProductForm";
import Header from "../components/header";
import Footer from "../components/footer";

const TestPage = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center py-8">
        <ProductForm productId={null} />
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;
