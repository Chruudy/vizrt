import Header from "../components/header";
import Footer from "../components/footer";
import PopularPage from "../components/PopularPage";

export default function Popular() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <PopularPage />
      <Footer />
    </div>
  );
}
