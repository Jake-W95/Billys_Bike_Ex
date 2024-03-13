// REACT
import { useState } from 'react'
// CSS / COMPONENTS
import '../../Header/Header.css'
import { NavLinks } from './NavLinks'
//ICONS
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'

import { motion } from 'framer-motion'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const setMenuClosed = () => setMenuOpen(false)

    return (
        <>
            {!menuOpen && <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}>
                <GiHamburgerMenu size='2rem' color='#122C2D' onClick={() => setMenuOpen(!menuOpen)} className="menuIcon" />
            </motion.div>}

            {menuOpen && <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}>
                <MdOutlineClose size='3rem' color='#122C2D' onClick={() => setMenuOpen(!menuOpen)} className="menuIcon" />
            </motion.div>}
            
            {menuOpen && <NavLinks setMenuClosed={setMenuClosed} />}

        </>
    )
}

export default Hamburger