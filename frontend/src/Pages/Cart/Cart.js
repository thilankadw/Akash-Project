import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useState } from 'react';
import Image from '../../Assets/Shop/04 1.png';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {

    const [cartproducts, setcartproducts] = useState(true);

    return(

        <>
            <div>
                <Header/>

                <div className='flex items-start justify-center mt-[123px] mb-[80px] gap-[150px]'>

                    {

                        cartproducts ? 

                        <div className='flex items-start justify-center gap-[150px]'>

                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex items-start gap-[40px]'>
                                    <div className='w-[100px] overflow-hidden'><img src={Image} className='rounded-[5px]'/></div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className={`${styles.body_18_regular} flex gap-[40px] w-[300px]`}>Vegan Leather Chair <div>2x</div></div>
                                        <div className={`${styles.body_14_regular} flex`}>$  <div>1000</div></div>
                                        <div className={`${styles.body_14_regular} `}><button><DeleteIcon></DeleteIcon></button></div>
                                    </div>                                    
                                </div>
                                <div className='flex items-start gap-[40px]'>
                                    <div className='w-[100px] overflow-hidden'><img src={Image} className='rounded-[5px]'/></div>
                                    <div className='flex flex-col gap-[10px]'> 
                                        <div className={`${styles.body_18_regular} flex gap-[40px] w-[300px]`}>Vegan Leather Chair <div>2x</div></div>
                                        <div className={`${styles.body_14_regular} flex`}>$  <div>1000</div></div>
                                        <div className={`${styles.body_14_regular} `}><button><DeleteIcon></DeleteIcon></button></div>
                                    </div>                                    
                                </div>
                                <div className='flex items-start gap-[40px]'>
                                    <div className='w-[100px] overflow-hidden'><img src={Image} className='rounded-[5px]'/></div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <div className={`${styles.body_18_regular} flex gap-[40px] w-[300px]`}>Vegan Leather Chair <div>2x</div></div>
                                        <div className={`${styles.body_14_regular} flex`}>$  <div>1000</div></div>
                                        <div className={`${styles.body_14_regular} `}><button><DeleteIcon></DeleteIcon></button></div>
                                    </div>                                    
                                </div>
                                
                            </div>
                            

                            <div className='flex flex-col w-[400px] relative top-[-15px] gap-[20px]'>
                                <div className={`${styles.body_40_semibols} font-[400]`}>Summary</div>
                                <div className={`${styles.body_20_regular} flex justify-between`}>Subtotal <div>1000</div></div>
                                <div className={`${styles.body_20_regular} flex justify-between`}>Discounts <div>0</div></div>
                                <div className={`${styles.body_24_regular} text-[30px] flex justify-between`}>Total<div>1000</div></div>
                                <div className={`${styles.body_20_regular} flex justify-center mt-[10px]`}>
                                    <button className='bg-black text-white py-[11px] px-[90px] rounded-[35px]'>Place Order</button>
                                </div>
                            </div>

                        </div>

                        : 

                        
                        <div className='flex flex-col items-center justify-center gap-[50px] mt-[50px]'>

                            <div className={`${styles.body_40_regular}`}>Your Cart is Empty</div>
                            <div className={`${styles.body_28_semibols}`}><Link to='/shop' className='flex gap-[30px] justify-center items-center bg-black text-white py-[10px] px-[50px] rounded-[30px]'>Visit Shop<ArrowForwardIosIcon></ArrowForwardIosIcon></Link></div>

                        </div>
    

                    }

                    

                    
                </div>

                <Footer/>
            </div>
        </>

    );

};

export default Cart;