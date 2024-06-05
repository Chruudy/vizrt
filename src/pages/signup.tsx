import Header from "../components/header";
import Footer from "../components/footer";
import SigninPage from "../components/SigninPage";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
        <SigninPage />
      <Footer />
    </div>
  );
}