import {useState} from "react";

const Galery = () => {
    // Define un estado para almacenar las imágenes de la galería.
    const [images, setImages] = useState([
        "galery/image-1.jpeg",
        "galery/image-2.jpeg",
        "galery/image-3.jpeg",
        "galery/image-4.jpeg",
        "galery/image-5.jpeg",
        "galery/image-6.jpeg",
        "galery/image-7.jpeg",
        "galery/image-8.jpeg",
        "galery/image-9.jpeg",
        "galery/image-10.jpeg",
        "galery/image-11.jpeg",
        "galery/image-12.jpeg",
        "galery/image-13.jpeg",
        "galery/image-14.jpeg",
        "galery/image-15.jpeg",
        "galery/image-16.jpeg",
        "galery/image-17.jpeg",
        "galery/image-18.jpeg",
        "galery/image-19.jpeg",
        "galery/image-20.jpeg",
        "galery/image-21.jpeg",
        "galery/image-22.jpeg",
        "galery/image-23.jpeg",
        "galery/image-24.jpeg",
        "galery/image-25.jpeg",
        "galery/image-26.jpeg",
        "galery/image-27.jpeg",
    ]);

    // Función para abrir una imagen en un modal.
    const openImage = (image) => {
        // Implementa la lógica para abrir la imagen en un modal o visor de imágenes.
        // Puedes usar una biblioteca de terceros como React-Image-Gallery o Lightbox, o crear tu propio modal.
    };
    return (
        <>
            <div className="hero_galery">
                <div className="hero_title">
                <h2>Galeria</h2>
                <p>Conoce a través de fotos</p>
                </div>
            </div>
            <section className="gallery">
                {images.map((image, index) => (
                    <div
                    key={index}
                    className="image_item"
                    onClick={() => openImage(image)}
                    >
                    <img src={image} alt={`img ${index}`} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Galery;
