import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "@/components/Carousel";
import CarouselItems from "@/components/CarouselItems";
import CarouselItemsCategories from "@/components/CarouselItemsCategories";

export default function CategoriesPage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <CarouselItemsCategories/>
      <Footer />
    </div>
  );
}