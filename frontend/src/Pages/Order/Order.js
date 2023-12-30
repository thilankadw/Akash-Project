import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { reset } from '../../features/order/orderSlice'
import { useNavigate } from 'react-router-dom';

const Order = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isError, isSuccess, message, orderId } = useSelector(
        (state) => state.order
    )

    return(

        <>
            <div>
                <Header/>
                <div className='flex justify-center h-screen'>
                    <div className='flex flex-col justify-center items-center gap-[20px]'>
                        <div className={`${styles.body_40_semibols} text-[#05a30d]`}>Your order was successful !...</div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className={`${styles.body_24_regular} font-[700]`}>Order ID</div>
                            <div className={`${styles.body_24_regular} font-[700]`}>{orderId}</div>
                        </div>
                        <div className={`${styles.body_20_regular}`}>You can collect products after 3 working days from our store.</div>
                        <div className={`${styles.body_20_regular}`}>Check your mail for further details...</div>
                        <div className='flex justify-center items-center gap-[50px] mt-[30px]'>
                            <div>
                                <button 
                                    onClick={() => {dispatch(reset()); navigate('/cart')}}
                                    className={`${styles.body_18_regular} bg-black text-white py-[11px] px-[20px] rounded-[35px]`}
                                >
                                    Return to cart
                                </button>
                            </div>
                            <div>
                                <button 
                                    onClick={() => {dispatch(reset()); navigate('/shop')}}
                                    className={`${styles.body_18_regular} bg-black text-white py-[11px] px-[20px] rounded-[35px]`}
                                >
                                    Shop More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    );

};

export default Order;