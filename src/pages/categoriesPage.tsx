import Header from "../components/header";
import Footer from "../components/footer";
import CarouselItemsCategories from "@/components/CarouselItemsCategories";
import CategoryBoxes from "@/components/CategoryBoxes"; // Importing the CategoryBoxes component

const CategoriesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      
      <div className="mb-10">
        <CarouselItemsCategories />
      </div>
      <div className="container mx-auto p-5">
        <CategoryBoxes /> 
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
