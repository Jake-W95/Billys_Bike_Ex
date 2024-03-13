
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import './NavStyle.css'
export const NavLinks = (setMenuClosed) => {
    return (
        <>
            <nav className="col">
                <motion.div className="linkContainer"
                    initial={{ y: -290 }}
                    animate={{ y: -0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 130 }}>
                    <NavLink to={'/'} className='link' /*onClick={() => setMenuClosed()}*/>Home</NavLink>
                </motion.div>


                <motion.div className="linkContainer"
                    initial={{ y: -290 }}
                    animate={{ y: -0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 130 }}>
                    <NavLink to={'/Services'} className='link' /*onClick={() => setMenuClosed()}*/>Services</NavLink>
                </motion.div>
                <motion.div className="linkContainer"
                    initial={{ y: -290 }}
                    animate={{ y: -0 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 130 }}>
                    <NavLink to={'/Contact'} className='link' /*onClick={() => setMenuClosed()}*/>Contact</NavLink>
                </motion.div>
            </nav>
        </>
    )
}