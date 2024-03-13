import { BsFacebook, BsInstagram } from 'react-icons/bs'

import dayjs from 'dayjs'
import './Footer.css'

const Footer = () => {
    const year = dayjs().format('YYYY')
    return (
        <>
            <footer className='row' >
                <p className='kalam-regular' id='year'>{year}</p>
                <p className='kalam-regular'>Billy's Bike Exchange   &#169;</p>
                <div className='row SMlinks'>
                    <a href='https://www.facebook.com/people/Billys-Bike-Exchange/100083007708564/'>
                        <BsFacebook size={'1.5rem'} color={'#122C2D'} />
                    </a>
                    <a href='https://instagram.com/billysbikeexchange?igshid=YmMyMTA2M2Y='>
                        <BsInstagram size={'1.5rem'} color={'#122C2D'} />

                    </a>
                </div>
            </footer>

        </>
    )
}
export default Footer