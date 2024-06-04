// src/pages/categoriesPage.tsx
import Header from "../components/header";
import Footer from "../components/footer";
import CarouselItemsCategories from "@/components/CarouselItemsCategories";
import CategoryBoxes from "@/components/CategoryBoxes"; // Importing the CategoryBoxes component

const CategoriesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <CarouselItemsCategories />
      <CategoryBoxes /> 
      <Footer />
    </div>
  );
};

export default CategoriesPage;
