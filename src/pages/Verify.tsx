import Header from "../components/header";
import Footer from "../components/footer";
import ValidatePhoneNumber from "@/components/ValidatePhoneNumber";

const Verify: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ValidatePhoneNumber />
      <Footer />
    </div>
  );
};

export default Verify;
