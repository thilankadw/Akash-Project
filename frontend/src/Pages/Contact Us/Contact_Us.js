import BackgroundImage from '../../Assets/Contact Us/background_image.png';
import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const ContactUs = () => {
    return(

        <>
            <div>
                <Header fontcolor='#fff' hoverfontcolor='#fff'/>

                <div className='flex justify-center'>

                    <img src={BackgroundImage} className='w-full h-[900px] top-0 rounded-b-[110px]'/>
                    <div className='absolute top-0 left-0 w-full h-[900px] bg-[#000] opacity-50 rounded-b-[110px]'></div>

                    <div className='absolute top-[200px] text-[#fff] flex flex-col items-center justify-center gap-[116px]'>

                        <div className={`${styles.h4_70} text-[#fff]`}>Contact Us</div>
                        <div className='flex gap-[200px]'>

                            <div className='flex flex-col gap-[25px]'>

                                <div className={`${styles.body_40_semibols} text-[#fff]`}>New York</div>

                                <div>
                                    <div className={`${styles.body_14_regular}`}>Address</div>
                                    <div className={`${styles.body_18_regular}`}>3517 W. Gray St. Utica, Pennsylvania 57867</div>
                                </div>
                                <div>
                                    <div className={`${styles.body_14_regular}`}>Phone Number</div>
                                    <div className={`${styles.body_18_regular}`}>(219) 555-0114</div>
                                </div>
                                <div>
                                    <div className={`${styles.body_14_regular}`}>Email Address</div>
                                    <div className={`${styles.body_18_regular}`}>debra.holt@example.com</div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-[25px]'>

                                <div className={`${styles.body_40_semibols} text-[#fff]`}>California</div>

                                <div>
                                    <div className={`${styles.body_14_regular}`}>Address</div>
                                    <div className={`${styles.body_18_regular}`}>8502 Preston Rd. Inglewood, Maine 98380</div>
                                </div>
                                <div>
                                    <div className={`${styles.body_14_regular}`}>Phone Number</div>
                                    <div className={`${styles.body_18_regular}`}>(239) 555-0108</div>
                                </div>
                                <div>
                                    <div className={`${styles.body_14_regular}`}>Email Address</div>
                                    <div className={`${styles.body_18_regular}`}>felicia.reid@example.com</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center py-[130px] px-[235px]'>

                    <div className={`${styles.h4_70} mb-[50px]`}>Let’s Talk</div>

                    <form className='flex flex-col gap-[63px] justify-center items-center'>
                        <div className='flex gap-[30px]'>
                            <input type='text' placeholder='First Name' className={`${styles.body_14_regular} w-[470px] border-b-[2px] outline-none`}/>
                            <input type='text' placeholder='Last Name' className={`${styles.body_14_regular} w-[470px] border-b-[2px] outline-none`}/>
                        </div>
                        <div>
                            <input type='email' placeholder='Email' className={`${styles.body_14_regular} w-[970px] border-b-[2px] outline-none`}/>
                        </div>
                        <div>
                            <textarea placeholder='Message' className={`${styles.body_14_regular} w-[970px] h-[117px] border-b-[2px] outline-none resize-none`}/>
                        </div>
                        <div><input type='submit' value='Send Message' className={`${styles.body_14_extrabold} uppercase w-[205px] py-[18px] px-[50px] border-[1px] border-[#181818] rounded-[27px]`}/></div>
                    </form>

                </div>

                <Footer />
            </div>
        </>

    );

};

export default ContactUs;