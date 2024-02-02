import HeaderImage from '../../Assets/Our Services/our_services_header.png';
import OurServicesImage1 from '../../Assets/Our Services/our_services_image_1.png';
import OurServicesImage2 from '../../Assets/Our Services/our_services_image_2.png';
import OurServicesImage3 from '../../Assets/Our Services/our_services_image_3.png';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import styles from '../../Styles/styles';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PolicyIcon from '@mui/icons-material/Policy';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const OurServices = () => {

    return(

        <>
            <div className='flex flex-col justify-center items-center'>
                <Header/>

                <div className='flex justify-center items-center mt-[100px]'>
                    <img src={HeaderImage} className='w-full'></img>
                    <div className={`${styles.h4_70} hidden sm:block absolute top-[230px] text-[#fff]`}>Our Services</div>
                </div>

                <div className='flex flex-col w-[330px] sm:w-full sm:flex-row items-center justify-center py-[50px] px-[80px] bg-[#FAFAF4] gap-[54px]'>
                    
                    <div className='w-[279px] flex flex-col gap-[22px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div><ShoppingBagIcon/></div>
                            <div className={`${styles.body_20_regular} font-[600] tracking-[-0.6px] text-[#000]`}>Shop online</div>
                        </div>
                        <div className={`${styles.body_14_regular} leading-[24px]`}>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</div>
                    </div>

                    <div className='w-[279px] flex flex-col gap-[22px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div><LocalShippingIcon/></div>
                            <div className={`${styles.body_20_regular} font-[600] tracking-[-0.6px] text-[#000]`}>Free shipping</div>
                        </div>
                        <div className={`${styles.body_14_regular} leading-[24px]`}>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</div>
                    </div>

                    <div className='w-[279px] flex flex-col gap-[22px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div><PolicyIcon/></div>
                            <div className={`${styles.body_20_regular} font-[600] tracking-[-0.6px] text-[#000]`}>Return policy</div>
                        </div>
                        <div className={`${styles.body_14_regular} leading-[24px]`}>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</div>
                    </div>

                    <div className='w-[279px] flex flex-col gap-[22px]'>
                        <div className='flex items-center gap-[20px]'>
                            <div><PaymentsIcon/></div>
                            <div className={`${styles.body_20_regular} font-[600] tracking-[-0.6px] text-[#000]`}>Payment methods</div>
                        </div>
                        <div className={`${styles.body_14_regular} leading-[24px]`}>Id donec ultrices tincidunt arcu non sodales neque sodales habitasse.</div>
                    </div>

                </div>

                <div className='flex flex-col w-[330px] sm:w-full px-[20px] items-center justify-center py-[130px] gap-[130px]'>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[129px] '>
                        <div className='sm:w-[530px] flex flex-col gap-[28px]'>
                            <div className={`${styles.h6_60} text-[30px] sm:text-[60px] font-[600] capitalize tracking-[-1.8px]`}>Our Philosophy</div>
                            <div className={`${styles.body_20_regular} leading-[34px]`}>Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat. Pharetra magna ac placerat vestibulum lectus. Felis eget velit aliquet sagittis id consectetur.</div>
                        </div>
                        <div>
                            <img src={OurServicesImage1}/>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[129px] '>                           
                        <div className='sm:w-[530px] flex flex-col gap-[28px]'>
                            <div className={`${styles.h6_60} font-[600] capitalize tracking-[-1.8px]`}>Starting Projects</div>
                            <div className={`${styles.body_20_regular} leading-[34px]`}>Cursus eget nunc scelerisque viverra mauris. Sit amet justo donec enim diam vulputate. Laoreet sit amet cursus sit amet dictum sit amet justo. Sed vulputate.</div>
                        </div>
                        <div>
                            <img src={OurServicesImage2}/>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[129px] '>
                        <div className='sm:w-[530px] flex flex-col gap-[28px]'>
                            <div className={`${styles.h6_60} text-[30px] sm:text-[60px] font-[600] capitalize sm:w-[517px] tracking-[-1.8px]`}>Function and beauty</div>
                            <div className={`${styles.body_20_regular} leading-[34px]`}>Volutpat est velit egestas dui id. Arcu felis bibendum ut tristique et egestas quis ipsum. Sed risus pretium quam vulputate. Aliquam id diam maecenas.</div>
                        </div>
                        <div>
                            <img src={OurServicesImage3}/>
                        </div>
                    </div>

                </div>
                
                <Footer />
            </div>
        </>

    );

};

export default OurServices;