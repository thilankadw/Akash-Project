import BackgroundImage from '../../Assets/Contact Us/background_image.png';
import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { createContact } from '../../features/contact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const ContactUs = () => {

    const [firstName, setfirstName] = useState(null)
    const [lastName, setlastName] = useState(null)
    const [email, setemail] = useState(null)
    const [messagetext, setmessagetext] = useState(null)

    const dispatch = useDispatch();

    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.contact
    )

    const contactDetails = {
        firstName,
        lastName,
        email,
        messagetext,
    }

    const contactSubmit = (e) => {
        dispatch(createContact(contactDetails));
    }

    return(

        <>
            <div>
                <Header/>

                <div className='flex justify-center'>

                    <img src={BackgroundImage} className='w-[330px] sm:w-full h-[900px] top-0 sm:rounded-b-[110px]'/>

                    <div className='absolute top-[200px] text-[#fff] flex flex-col items-center justify-center gap-[116px] w-[330px] sm:w-full'>

                        <div className={`${styles.h4_70} w-[330px] sm text-[#fff] text-center text-[29px] sm:text-[70px]`}>Contact Us</div>

                        <div className='flex flex-col items-center justify-center sm:flex-row gap-[200px] w-[330px] sm:w-full'>

                            <div className='flex flex-col gap-[25px] ml-[30px] justify-center items-center'>

                                <div className={`${styles.body_40_semibols} text-[#fff]`}>New York</div>

                                <div className='flex flex-col justify-center items-center'>
                                    <div className={`${styles.body_14_regular}`}>Address</div>
                                    <div className={`${styles.body_18_regular} flex flex-col justify-center items-center text-center`}>3517 W. Gray St. Utica, Pennsylvania 57867</div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className={`${styles.body_14_regular}`}>Phone Number</div>
                                    <div className={`${styles.body_18_regular}`}>(219) 555-0114</div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className={`${styles.body_14_regular}`}>Email Address</div>
                                    <div className={`${styles.body_18_regular}`}>debra.holt@example.com</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col justify-center items-center py-[130px] w-[330px] sm:w-full'>

                    <div className={`${styles.h4_70} mb-[50px]`}>Let’s Talk</div>

                    <form className='flex flex-col gap-[63px] justify-center items-center w-[330px] ml-[30px]'>
                        <div className='flex gap-[30px] flex-col justify-center items-center sm:flex-row'>
                            <input 
                                type='text' 
                                placeholder='First Name' 
                                className={`${styles.body_14_regular} w-[300px] sm:w-[470px] border-b-[2px] outline-none pl-[20px]`}
                                onChange={(e) => {setfirstName(e.target.value)}}
                            />
                            <input 
                                type='text' 
                                placeholder='Last Name' 
                                className={`${styles.body_14_regular} w-[300px] sm:w-[470px] border-b-[2px] outline-none pl-[20px]`}
                                onChange={(e) => {setlastName(e.target.value)}}
                            />
                        </div>
                        <div>
                            <input 
                                type='email' 
                                placeholder='Email' 
                                className={`${styles.body_14_regular} w-[330px] sm:w-[970px] border-b-[2px] outline-none pl-[20px]`}
                                onChange={(e) => {setemail(e.target.value)}}
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder='Message' 
                                className={`${styles.body_14_regular} w-[330px] sm:w-[970px] h-[117px] border-b-[2px] outline-none resize-none pl-[20px]`}
                                onChange={(e) => {setmessagetext(e.target.value)}}
                            />
                        </div>
                        <div>
                            <input 
                                type='submit' 
                                value='Send Message'
                                className={`${styles.body_14_extrabold} uppercase w-[205px] py-[18px] px-[50px] border-[1px] border-[#181818] rounded-[27px]`}
                                onClick={contactSubmit}
                            />
                        </div>
                    </form>

                </div>

                <Footer />
            </div>
        </>

    );

};

export default ContactUs;