import { Slide } from "pure-react-carousel"

export const CarouselSlide = (props) => {
    if (props.type === 'review') {
        return (
            <Slide index={props.index}>
                <img className='reviewImg' src={props.image} alt="Review" />
            </Slide>
        )
    }
    if (props.type === 'bike') {
        return (
            <Slide index={props.index} className="slide">
                <img className="sliderImg" src={props.image} alt="Bike" />
            </Slide>
        )
    }
}