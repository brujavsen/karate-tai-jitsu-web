import {useRef, useState} from "react";
import { BiXCircle } from "react-icons/bi";

const Galery = () => {
    const [imageSelected, setImageSelected] = useState();
    const [images, setImages] = useState([
        "/galery/image-1.jpeg",
        "/galery/image-2.jpeg",
        "/galery/image-3.jpeg",
        "/galery/image-4.jpeg",
        "/galery/image-5.jpeg",
        "/galery/image-6.jpeg",
        "/galery/image-7.jpeg",
        "/galery/image-8.jpeg",
        "/galery/image-9.jpeg",
        "/galery/image-10.jpeg",
        "/galery/image-11.jpeg",
        "/galery/image-12.jpeg",
        "/galery/image-13.jpeg",
        "/galery/image-14.jpeg",
        "/galery/image-15.jpeg",
        "/galery/image-16.jpeg",
        "/galery/image-17.jpeg",
        "/galery/image-18.jpeg",
        "/galery/image-19.jpeg",
        "/galery/image-20.jpeg",
        "/galery/image-21.jpeg",
        "/galery/image-22.jpeg",
        "/galery/image-23.jpeg",
        "/galery/image-24.jpeg",
        "/galery/image-25.jpeg",
        "/galery/image-26.jpeg",
        "/galery/image-27.jpeg",
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
                            <img loading='lazy' src={image} alt={`img ${index + 1}`} />
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
                            <img loading='lazy' src={image} alt={`img ${index + 11}`} />
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
                            <img loading='lazy' src={image} alt={`img ${index + 21}`} />
                        </div>
                    ))}
                </div>
            </section>
            <div className="popup-img hidden" ref={popup}>
                <BiXCircle onClick={e => closeImage(popup)}/>
                <img loading='lazy' src={imageSelected} alt={`img`} />
            </div>
        </>
    );
};

export default Galery;
