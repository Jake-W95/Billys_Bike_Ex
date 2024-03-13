import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
export const PricingCard = (props) => {
    const closePriceCardStyle = {
        position: 'absolute', right: '0', top: '0', height: '3.5em', width: '3.5em', display: 'grid', placeItems: 'center'
    }
    return (
        <>
            <div class='col' style={{ background: 'beige', width: '90%', height: '90%', position: 'relative', justifyContent: 'stretch' }}>
                <h1 id="pricingCardTitle" className="kalam-bold" style={{ fontSize: '200%' }}>{props.title}</h1>
                <div id="closePricingCard" style={closePriceCardStyle} onClick={() => props.setShowCard('100%')}>
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </div>
                <ul class='col' id="pricingCardDetails" style={{ listStyle: 'none', padding: 0, minHeight: '60%', justifyContent: 'space-evenly'  }}>
                    {
                        props.title != 'Bespoke Build' ?
                            props.details.map((detail, index) => (
                                <li className='kalam-bold' style={{ fontSize: '110%' }} key={index}>{detail}</li>
                            )) :
                            <p className='kalam-regular' style={{ padding: '1em', fontSize: '120%' }}>{props.details}</p>

                    }
                </ul>
                <p className="kalam-bold" style={{ fontSize: '160%'}} >{props.price}</p>
            </div>
        </>
    )
}