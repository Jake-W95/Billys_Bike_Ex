import { useState } from 'react'

import './Services.css'
import { PricingCard, setPricingCard } from '../../componenets/PricingCards/PricingCard'
import servicesImage from '../../Assets/Images/Images/C2.png'
import stripDownImage from '../../Assets/Images/Images/B1.jpg'
import miscServiceImage from '../../Assets/Images/bikes/bike_2.jpg'
import generalServiceImage from '../../Assets/Images/Images/G2.png'
import bespokeServiceImage from '../../Assets/Images/bikes/bike_3.jpg'
export const Services = ({ pageRef }) => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState([])
    const [price, setPrice] = useState('')
    const [showCard, setShowCard] = useState('100%')

    const serviceArrays = {
        generalService: ['Full deep-clean / lubrication /polish', 'Full drive-chain removal (including chain rings)', 'Front and rear derailleurs removed, cleaned and oiled', 'Gear service', 'Brake service', 'Bolt check / health check'],
        fullService: ['Full bike disassembly and re-build', 'Headset treatment', 'Bottom bracket treatment', 'Hub check'],
        miscService: ['Hub services (cup and cone with bearing replacement) - £25', 'Wheel True - £15', 'Brake service (rim brake) - £25', 'Brake service (mechanical cable) - £25'],
        bespokeBuild: ['Discover the ultimate in personalized cycling with our bespoke bicycle building service. From consultation to construction, we tailor every aspect to your unique preferences. Our skilled artisans blend traditional craftsmanship with modern innovation, ensuring your custom bike is a masterpiece of performance and style. Elevate your ride with a bike that\'s as individual as you are.']
    }
    const serviceStyles = {
        generalService: {
            backgroundImage: `url(${generalServiceImage})`,
            backgroundSize: 'contain'
        },
        fullService: {
            backgroundImage: `url(${stripDownImage})`,
            backgroundSize: '130%',
            backgroundPositionX: 'right'
        },
        miscService: {
            backgroundImage: `url(${miscServiceImage})`,
            backgroundSize: '180%',
            backgroundPositionX: '100%',
            backgroundPositionY: '30%'
        },
        bespokeBuild: {
            backgroundImage: `url(${bespokeServiceImage})`,
            backgroundSize: '168%',
            backgroundPositionX: '0%',
            backgroundPositionY: '66%'
        }

    }
    const serviceCardDetailStyle = {
        position: 'absolute',
        right: showCard,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)'
    }
    // Style Objects
    const serviceImageContainerStyle = {
        width: '100vw',
        height: 'fit-content',
        position: 'relative'
    }

    const handleServiceClick = (service) => {
        if (service === 0) {
            setTitle('General Service');
            setDetails(serviceArrays.generalService);
            setPrice('£60')
        }
        if (service === 1) {
            setTitle('Full Service');
            setDetails(serviceArrays.fullService);
            setPrice('£100')
        }
        if (service === 2) {
            setTitle('Other Services');
            setDetails(serviceArrays.miscService);
            setPrice('')
        }
        if (service === 3) {
            setTitle('Bespoke Build');
            setDetails([serviceArrays.bespokeBuild]);
            setPrice('');
        }
        setShowCard('0%')
    }
    return (
        <>
            <section className="page"  ref={pageRef}>
                <img src={servicesImage}
                    alt='Services Header Image'
                    className='heroImage'
                />
                <article className='textContainer'>
                    <p className='kalam-regular fa1' >
                        At our workshop, we're all about using top-notch tools like <i>Park</i> and <i>Pedro's</i> <br />When it comes to keeping things squeaky clean, our trusty Muc Off 25L bio parts washer is our go-to for all our service work.
                    </p>
                </article>
                <div id="serviceButtonContainer" >
                    <div className='serviceButton' onClick={() => handleServiceClick(0)}>
                        <button id='generalServiceBtn' style={serviceStyles.generalService}></button>
                        <div className='serviceButtonOverlay'>
                            <p className='kalam-bold'>General Service</p>
                        </div>
                    </div>
                    <div className='serviceButton' onClick={() => handleServiceClick(1)}>
                        <button id='fullServiceBtn' style={serviceStyles.fullService}></button>
                        <div className='serviceButtonOverlay'>
                            <p className='kalam-bold'>Full Strip-down / Rebuild Service</p>
                        </div>

                    </div>
                    <div className='serviceButton' onClick={() => handleServiceClick(2)}>
                        <button id='miscServiceBtn' style={serviceStyles.miscService}>
                        </button>
                        <div className='serviceButtonOverlay'>
                            <p className='kalam-bold'>Additional Extras / Repairs</p>
                        </div>

                    </div>
                    <div className='serviceButton' onClick={(e) => handleServiceClick(3)}>
                        <button id='bespokeBuildBtn'
                            style={serviceStyles.bespokeBuild}></button>
                        <div className='serviceButtonOverlay'>
                            <p className='kalam-bold'>Bespoke Build</p>
                        </div>

                    </div>
                </div>
                <div id='serviceDetailCard' style={serviceCardDetailStyle}>
                    <PricingCard title={title} details={details} price={price} showCard={showCard} setShowCard={setShowCard} />
                </div>

            </section>
        </>
    )
}