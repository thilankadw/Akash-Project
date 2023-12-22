import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/logowhite.png';
import styles from '../../Styles/styles';

const Header = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const regularStyles = {
        color: props.fontcolor
    };

    const hoverStyles = {
        color: props.hoverfontcolor
    };

    return (
        <>
            <div className={`flex justify-center `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className='fixed top-0 left-0 right-0 z-10 py-[20px] px-[80px] flex justify-center items-center gap-[560px] bg-black'>
                    <div><img src={Logo} className='w-[109px] h-[22px]' alt="Logo" /></div>
                    <div className='flex items-center gap-[60px]'>
                        <Link to='/' className={`${styles.body_14_regular}`} style={isHovered ? hoverStyles : regularStyles}>Home</Link>
                        <Link to='/services' className={`${styles.body_14_regular} text-[#fff]`} style={isHovered ? hoverStyles : regularStyles}>Services</Link>
                        <Link to='/' className={`${styles.body_14_regular} text-[#fff]`} style={isHovered ? hoverStyles : regularStyles}>About Us</Link>
                        <Link to='/' className={`${styles.body_14_regular} text-[#fff]`} style={isHovered ? hoverStyles : regularStyles}>Shop</Link>
                        <Link to='/contact-us' className={`${styles.body_14_regular} text-[#fff]`} style={isHovered ? hoverStyles : regularStyles}>Contact</Link>
                        <Link to='/' className={`${styles.body_14_extrabold} py-[11px] px-[30px] rounded-[20px] bg-[#EFF422]`}>
                            {true ? `Cart(0)` : `Cart(0)`}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
