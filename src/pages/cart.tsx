import Header from "../components/header";
import Footer from "../components/footer";
import ShoppingCart from "../components/shoppingCart";

export default function Cart() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ShoppingCart />
      <Footer />
    </div>
  );
}
