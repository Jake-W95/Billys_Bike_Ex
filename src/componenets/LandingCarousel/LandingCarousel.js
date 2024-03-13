import '../../Pages/Landing/Landing.css'

import sortedData from './carouselData/sortCarouselData';
import { CarouselSlide } from './CarouselSlide';

import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = () => {   
    return (
        <>
            <div id='carouselContainer'>
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={200}
                    totalSlides={sortedData.length}
                    isPlaying={true}
                    infinite={true}
                    interval={3500}
                    orientation={'horizontal'}>
                    <Slider id='slider'>
                        {sortedData.map(({ type, make, model, year, details, image, review, reviewer, ref }, index) => (
                            <CarouselSlide
                            index={index}
                                key={ref}
                                type={type}
                                make={make}
                                model={model}
                                year={year}
                                details={details}
                                image={image}
                                review={review}
                                reviewer={reviewer} />
                        ))}
                    </Slider>
                </CarouselProvider>
            </div>
        </>
    );
}

export default Carousel
