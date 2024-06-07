import Header from "../components/header";
import Footer from "../components/footer";
import ProductList from "../components/ProductList";

const ProductPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ProductPage;
