import Header from "../components/header";
import Footer from "../components/footer";
import Categories from "../components/categories";
import CarouselItems from "../components/CarouselItems";

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