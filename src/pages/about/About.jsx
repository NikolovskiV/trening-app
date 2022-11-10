import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque
        quisquam incidunt facere alias natus facilis harum adipisci aperiam
        beatae?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Stroy</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              dolore repellat molestiae incidunt doloribus quis quaerat illo
              tempora voluptatum ullam eaque optio fuga repellendus eveniet,
              voluptas labore ex reprehenderit aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              neque quisquam incidunt facere alias natus facilis harum adipisci
              aperiam beatae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              est ullam, maxime reprehenderit ad ab minima architecto!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              neque quisquam incidunt facere alias natus facilis harum adipisci
              aperiam beatae?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              dolore repellat molestiae incidunt doloribus quis quaerat illo
              tempora voluptatum ullam eaque optio fuga repellendus eveniet,
              voluptas labore ex reprehenderit aspernatur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eligendi est ullam, maxime
              reprehenderit ad ab minima architecto!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Img" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Img" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              dolore repellat molestiae incidunt doloribus quis quaerat illo
              tempora voluptatum ullam eaque optio fuga repellendus eveniet,
              voluptas labore ex reprehenderit aspernatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              neque quisquam incidunt facere alias natus facilis harum adipisci
              aperiam beatae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              est ullam, maxime reprehenderit ad ab minima architecto!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
