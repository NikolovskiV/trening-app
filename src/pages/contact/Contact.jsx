import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

function Contact() {
  return (
    <>
      <Header image={HeaderImage} title="Get In Touch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        asperiores odit necessitatibus at, aliquid numquam maxime dicta commodi
        quos consequatur.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:info@nikolovski.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/vandenikolovski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+46700484114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
