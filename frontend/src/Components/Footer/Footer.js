import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo/logoblack.png';
import styles from '../../Styles/styles';

const Footer = () => {

    return(

        <>  
            <div className='flex justify-center'>

                <div className='py-[80px] px-[80px] flex flex-col sm:flex-row gap-[80px] items-center sm:gap-[300px] border-t-[2px] w-[300px] sm:w-[1000px]'>

                    <div><img src={Logo} className=''/></div>

                    <div className='flex flex-wrap justify-center items-center gap-[30px] sm:gap-[60px] w-[330px] sm:w-[1000px] px-[10px] sm:px-0'>
                        <div className='flex flex-col gap-[20px]'>
                            <div className={`${styles.body_14_extrabold}`}>Product</div>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Living Room</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Dining & Kitchen</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>BedRoom</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Outdoor</Link>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <div className={`${styles.body_14_extrabold}`}>About Us</div>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Our Team</Link>
                            <Link to='/services' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Services</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>Shop Page</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>FAQs</Link>
                        </div>
                        <div className='flex flex-col gap-[20px]'>
                            <div className={`${styles.body_14_extrabold}`}>Follow us</div>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>facebook</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>instagram</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>twitter</Link>
                            <Link to='/' className={`${styles.paragraph_16} text-[#5C5C5C] capitalize`}>behance</Link>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>

    );

}

export default Footer;