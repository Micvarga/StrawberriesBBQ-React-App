import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import './CarouselStyles.css';
import brisket from '../../app/assets/img/brisketChop.jpg';
import burntEnds from '../../app/assets/img/burntEnds.jpg';
import ribs from '../../app/assets/img/ribsCloseUp.jpg'

const images = [
    {
        src: brisket,
        altText: 'Slide 1',
        caption: 'Brisket',
        key: 1,
    },
    {
        src: burntEnds,
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: ribs,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function CarouselComponent(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = images.map((image) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image.src}
            >
                <img src={image.src} alt={image.altText} className='img-fluid carouselImage' />
                <CarouselCaption
                    captionText={image.caption}
                    captionHeader={image.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className='carousel-fade'
            interval='8000'
            {...args}
        >
            <CarouselIndicators
                items={images}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default CarouselComponent;