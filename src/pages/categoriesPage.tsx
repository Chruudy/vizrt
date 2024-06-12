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
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold text-white">Sub Categories</h2> {/* Changed text-5xl to text-4xl */}
        <div className="mt-2 border-b-4 border-orange-500 w-1/4 mx-auto"></div>
      </div>
      <div className="mb-10">
        <CarouselCategories />
      </div>
      <div className="container mx-auto p-5">
        <CategoryBoxes />
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
