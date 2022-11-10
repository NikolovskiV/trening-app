import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

function Gallery() {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header image={HeaderImage} title="Our Galleri">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem
        excepturi nisi quaerat facere fugiat consequuntur saepe soluta modi
        itaque repudiandae!
      </Header>
      <section className="gallery">
        <div className="container gallery-container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Our Gallery ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
