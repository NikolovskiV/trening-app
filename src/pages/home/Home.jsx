import FAQs from "../../components/FAQs";
import Header from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonilas from "../../components/Testimonilas";
import Footer from "../../components/Footer";

import Values from "../../components/Values";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonilas />
    </>
  );
}

export default Home;
