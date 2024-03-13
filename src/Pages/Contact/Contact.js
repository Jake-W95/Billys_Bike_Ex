import ContactForm from "../../componenets/ContactForm"
import contactHeroImage from '../../Assets/Images/Images/H2.png'
import { useState } from "react"
import env from 'react-dotenv'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const libraries = []
const center = {
    lat: 51.439661705083395,
    lng: -2.6121126935675574
}
const mapContainerStyle = {
    width: '90vw',
    height: '50vw'
}

export const Contact = ({ pageRef }) => {
    const [displayContactForm, setDisplayContactForm] = useState('none')
    const [contactFormType, setContactFormType] = useState('none')
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: env.MAPS_API,
        libraries
    })
    if (loadError) {
        return <div>Couldn't find the map!</div>
    }
    if (!isLoaded) {
        return <div>Loading Map</div>
    }

    return (
        <>
            <section className="page" ref={pageRef}>
                <img src={contactHeroImage} alt="Contact Hero" style={{ width: '100vw' }} />
                <div className="row" style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100vw',
                    height: '3em',
                }}>
                    <MdOutlineEmail onClick={() => {setContactFormType('email') ;setDisplayContactForm('flex') }}  size={'2.5em'} color={'#122C2D'}/>
                    <MdPhone onClick={() => {setContactFormType('phone') ;setDisplayContactForm('flex'); }} size={'2.5em'} color={'#122C2D'}/>
                    <a href='https://www.facebook.com/people/Billys-Bike-Exchange/100083007708564/' >
                        <BsFacebook size={'2.5em'} color={'#122C2D'}/>
                    </a>
                    <a href='https://instagram.com/billysbikeexchange?igshid=YmMyMTA2M2Y=' >
                        <BsInstagram size={'2.5em'} color={'#122C2D'}/>
                    </a>
                </div>

                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center} >
                    <Marker position={center} />
                </GoogleMap>
                <ContactForm displayContactForm={displayContactForm} setDisplayContactForm={setDisplayContactForm} formType={contactFormType}/>
                <div id="addressContainer">
                    <p className='kalam-regular'>  Billy's Bike Exchange &#169;<br />
                        Monarch House <br />
                        1 Smyth Road <br />
                        Bedminster, Bristol<br />
                        BS3 2BX
                    </p>
                </div>
            </section >
        </>
    )
}