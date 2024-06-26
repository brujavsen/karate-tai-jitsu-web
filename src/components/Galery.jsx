import {useEffect, useRef, useState} from "react";
import { BiXCircle } from "react-icons/bi";

const Galery = () => {
    const [imageSelected, setImageSelected] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

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
        "/galery/image-28.jpeg",
        "/galery/image-29.jpeg",
        "/galery/image-30.jpeg",
        "/galery/image-31.jpeg",
        "/galery/image-32.jpeg",
        "/galery/image-33.jpeg",
        "/galery/image-34.jpeg",
        "/galery/image-35.jpg",
        "/galery/image-36.jpg",
        "/galery/image-37.jpg",
        "/galery/image-38.jpg",
        "/galery/image-39.jpg",
        "/galery/image-40.jpg",
        "/galery/image-41.jpg",
        "/galery/image-42.jpg",
        "/galery/image-43.jpg",
        "/galery/image-44.jpg",
        "/galery/image-45.jpg",
        "/galery/image-46.jpg",
    ]);

    const firstTenImages = images.slice(0, 15);
    const secondTenImages = images.slice(15, 31);
    const thirdTenImages = images.slice(31, 46);

    const openImage = (image) => {
        setImageSelected(image);
        setIsModalVisible(true);
    };

    const closeImage = () => {
        setImageSelected(null);
        setIsModalVisible(false);
    };

    useEffect(()=> {
        const handleKeyDown = e => {
            if(e.key === 'Escape') {
                closeImage();
            }
        };

        if(isModalVisible) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isModalVisible]);

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
            <div className={`popup-img ${isModalVisible ? '' : 'hidden'}`}>
                <BiXCircle className="close-icon" onClick={closeImage} />
                {imageSelected && (
                    <img loading="lazy" src={imageSelected} alt={`img`} onClick={closeImage}/>
                )}
            </div>
        </>
    );
};

export default Galery;
