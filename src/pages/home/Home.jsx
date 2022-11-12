import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonilas from "../../components/Testimonilas";

import Values from "../../components/Values";

import "./home.css";

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonilas />
    </>
  );
}

export default Home;
