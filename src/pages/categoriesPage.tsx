import Header from "../components/header";
import Footer from "../components/footer";
import CarouselItemsCategories from "@/components/CarouselItemsCategories";

import Categories from "@/components/categories";
import CarouselCategories from "@/components/CarouselCategories";
const CategoriesPage = () => {
  return (
    <div className="overflow-x-hidden">
      
      <Header />
      
      <Categories />
      <div className="mb-10">
       <CarouselCategories/>
      </div>
      <div className="container mx-auto p-5">
         
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
