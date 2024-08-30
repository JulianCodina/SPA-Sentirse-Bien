import { useLayoutEffect } from "react";
import "./Gallery.css";

type Media = {
  img: string;
  titulo?: string;
  texto?: string;
};
const news: Media[] = [
  {
    img: "src/assets/noticia1.jpeg",
    titulo: "Titulo noticia 1",
    texto: "Prueba noticia 1",
  },
  {
    img: "src/assets/noticia1.jpeg",
    titulo: "Titulo noticia 2",
    texto: "Prueba noticia 2",
  },
];
const photos: Media[] = [
  {
    img: "src/assets/masaje-antiestres.jpg",
  },
  {
    img: "src/assets/temp.png",
  },
  {
    img: "src/assets/Dermohealth.jpg",
  },
  {
    img: "src/assets/masaje-antiestres.jpg",
  },
  {
    img: "src/assets/temp.png",
  },
  {
    img: "src/assets/Dermohealth.jpg",
  },
];

function Gallery() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery-page">
      <div className="background-image" />
      <div className="gallery-container">
        <div className="titulo">
          <h1>GALERÍA</h1>
          <hr className="linea-gallery" />
        </div>
        <div className="gallery-types">
          <div className="gallery-section">
            <h3>Noticias</h3>
            <div className="element-container">
              {news.map((element, index) => (
                <div className="element" key={index}>
                  <img src={element.img} />
                  <div className="text">
                    <h4>{element.titulo}</h4>
                    <p>{element.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-section">
            <hr className="linea-gallery" />
            <h3>Fotos</h3>
            <div className="element-container">
              {photos.map((element, index) => (
                <div className="element-img" key={index}>
                  <img src={element.img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
