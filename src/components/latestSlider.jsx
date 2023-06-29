import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PosterImage } from './posterImage';


export const LatestSlider = ({data}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <PosterImage title={data.title}/>
            <PosterImage title={data.title}/>
            <PosterImage title={data.title}/>
        </Slider>

    );
}
