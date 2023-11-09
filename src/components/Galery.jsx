import {useRef, useState} from "react";
import { BiXCircle } from "react-icons/bi";

const Galery = () => {
    const [imageSelected, setImageSelected] = useState();
    const [images, setImages] = useState([
        "image-1.jpeg",
        "image-2.jpeg",
        "image-3.jpeg",
        "image-4.jpeg",
        "image-5.jpeg",
        "image-6.jpeg",
        "image-7.jpeg",
        "image-8.jpeg",
        "image-9.jpeg",
        "image-10.jpeg",
        "image-11.jpeg",
        "image-12.jpeg",
        "image-13.jpeg",
        "image-14.jpeg",
        "image-15.jpeg",
        "image-16.jpeg",
        "image-17.jpeg",
        "image-18.jpeg",
        "image-19.jpeg",
        "image-20.jpeg",
        "image-21.jpeg",
        "image-22.jpeg",
        "image-23.jpeg",
        "image-24.jpeg",
        "image-25.jpeg",
        "image-26.jpeg",
        "image-27.jpeg",
    ]);

    const popup = useRef();

    const firstTenImages = images.slice(0, 9);
    const secondTenImages = images.slice(9, 18);
    const thirdTenImages = images.slice(18, 27);

    const openImage = (image) => {
        setImageSelected(image)
        const hidden = document.querySelector('.hidden')
        hidden.classList.remove('hidden');
    };
    const closeImage = (pop) => {
        pop.current.classList.add('hidden');
    }
    return (
        <>
            <div className="hero_galery">
                <div className="hero_title">
                <h2>Galeria</h2>
                <p>Conoce a través de fotos</p>
                </div>
            </div>
            <section className="row">
                <div className="column">
                    {firstTenImages.map((image, index) => (
                        <div
                            key={index}
                            className="image_item"
                            onClick={() => openImage(image)}
                        >
                            <img src={image} alt={`img ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="column">
                    {secondTenImages.map((image, index) => (
                        <div
                            key={index}
                            className="image_item"
                            onClick={() => openImage(image)}
                        >
                            <img src={image} alt={`img ${index + 11}`} />
                        </div>
                    ))}
                </div>
                <div className="column">
                    {thirdTenImages.map((image, index) => (
                        <div
                            key={index}
                            className="image_item"
                            onClick={() => openImage(image)}
                        >
                            <img src={image} alt={`img ${index + 21}`} />
                        </div>
                    ))}
                </div>
            </section>
            <div className="popup-img hidden" ref={popup}>
                <BiXCircle onClick={e => closeImage(popup)}/>
                <img src={imageSelected} alt={`img`} />
            </div>
        </>
    );
};

export default Galery;
