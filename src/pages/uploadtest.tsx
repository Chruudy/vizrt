import Footer from "@/components/footer";
import ProductForm from "../components/ProductForm";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <ProductForm />
      <Footer />
    </div>
  );
};

export default Home;
