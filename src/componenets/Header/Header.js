import './Header.css'
// import { NavLink } from 'react-router-dom'

import Logo_Text from '../../Assets/Images/Branding/BBE_Title_No_BG.png'
import Hamburger from '../Nav/Hamburger/Hamburger'
function Header() {

    return (
        <>
            <header>
                    <img id='headerTitle' src={Logo_Text} alt='banner' />
                    {/* <Hamburger /> */}
            </header>
        </>
    )
}

export default Header