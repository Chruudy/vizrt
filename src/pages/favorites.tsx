import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FavoritesPage from "../components/FavoritesPage";

const Favorites: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <FavoritesPage />
      <Footer />
    </div>
  );
};

export default Favorites;
