import React from 'react';
import Slider from "../../Slider";

const Slideshow = () => {
    const images = [
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "http://cdn.eso.org/images/screen/eso1907a.jpg",
        "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="
    ];
    return (
        <div>
            <Slider
                slides={images}
                size="medium"
                slideInterval={6}
                inContainer
                className="mt-20 mb-20"
            />
            <Slider slides={images} size="large" slideInterval={6} />
        </div>
    );
}

export default Slideshow;
