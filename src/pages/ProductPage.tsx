import Header from "../components/header";
import Footer from "../components/footer";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
