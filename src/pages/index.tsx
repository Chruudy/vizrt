import Header from "../components/header";
import Footer from "../components/footer";
import Categories from "../components/categories";
import CarouselItems from "../components/CarouselItems";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Categories />

      <Link href="/demoPage1">
        <p className="text-white text-center font-medium">Demo page (midlertidlig link)</p>
      </Link>

      <CarouselItems />
      <Footer />
    </div>
  );
}