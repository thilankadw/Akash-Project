import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Image6 from '../../Assets/Product Details/image 40.png';
import Image7 from '../../Assets/Product Details/image 41.png';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Product from '../../Components/Product/Product';
import Image from '../../Assets/Shop/04 1.png';
import { addToCart } from '../../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { user } = useSelector((state) => state.auth) //get user id 
    const { products } = useSelector((state) => state.product) //get all products

    const { id } = useParams() //current product id from url
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentImage, setCurrentImage] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const foundProduct = products.find(product => product._id === id); //filter current product details from all products
    
    const productImages = foundProduct.productImageLinks;
    
    //function to handle image carousel
    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? productImages.length - 1 : prevImage - 1));
    };   
    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === productImages.length - 1 ? 0 : prevImage + 1));
    };

    //select quantity
    const quantityDecrement = () => {
        if(!(productQuantity <= 1)){
            setProductQuantity(productQuantity-1);
        }
    };
    const quantityIncrement = () => {
        if(productQuantity < 20){
            setProductQuantity(productQuantity+1);
        }else{
            setProductQuantity(productQuantity);
        }     
    }

    //prepare cart details to send server
    const cartImage = productImages[0];
    const productName = foundProduct.productName;
    const productPrice = foundProduct.productPrice;
    
    const cartProductDetails = { id, productName, productPrice, productQuantity, cartImage }

    return(

        <>
            <div>
                <Header/>

                <div className='mt-[150px] flex justify-center items-center'>

                    <div>

                        <div className='flex items-start justify-center gap-[120px] pb-[100px]'>                          

                            <div id="gallery" className="relative w-[500px]" data-carousel="slide">
                                <div className="relative h-[500px] w-[500px] overflow-hidden">
                                    {productImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`${index === currentImage ? 'duration-700 ease-in-out' : 'hidden duration-700 ease-in-out'
                                        }`}>
                                            <img
                                                src={image}
                                                className="absolute block w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                alt=""/>
                                        </div>
                                    ))}
                                </div>
                                
                                <button 
                                    type="button"
                                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    onClick={handlePrev}
                                >
                                    <ArrowBackIosIcon />
                                </button>
                                
                                <button 
                                    type="button"
                                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    onClick={handleNext}
                                >
                                    <ArrowForwardIosIcon />
                                </button>
                            </div>

                            <div className='flex flex-col gap-[30px]'>

                                <div className={`${styles.body_40_semibols}`}>{foundProduct.productName}</div>
                                <div className={`${styles.body_40_semibols}`}>$ {foundProduct.productPrice}.00</div>
                                <div className={`${styles.paragraph_20} w-[525px] text-[#4D4D4D]`}>{foundProduct.productDetails}</div>
                                <div className={`${styles.body_30_regular} flex items-center gap-[30px]`}> 
                                    Color:  <div className='w-[100px] h-[50px] rounded-[30px]' style={{backgroundColor: `${foundProduct.productColor}`}}></div>
                                </div>

                                <div className='flex items-center h-[60px] gap-[20px]'>

                                    <div className='flex w-[141px] h-[60px] items-center justify-center rounded-[30px] bg-[#F9F9F9] gap-[19px]'>
                                        <div>
                                            <button 
                                                className='w-[40px] h-[40px] bg-white rounded-[30px]'
                                                onClick={quantityDecrement}
                                            >
                                                <RemoveIcon />
                                            </button>
                                        </div>
                                        <div className={`${styles.body_26_regular} text-[#000]`}>{productQuantity}</div>
                                        <div>
                                            <button 
                                                className='w-[40px] h-[40px] bg-white rounded-[30px]'
                                                onClick={quantityIncrement}
                                            >
                                                    <AddIcon />
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <button 
                                            onClick={() => {
                                                if(!user){
                                                    navigate('/login')
                                                }else{
                                                    dispatch(addToCart(cartProductDetails))}
                                                }
                                            }
                                            className={`${styles.body_14_extrabold} bg-black py-[17px] px-[89px] text-[#fff] rounded-[30px]`}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='flex flex-col justify-center items-center py-[100px] bg-[#FAFAF4] rounded-t-[110px] gap-[70px]'>
                            
                            <div className='flex flex-col justify-center items-center gap-[35px]'>
                                <div className={`${styles.body_40_semibols}`}>Making home a happy place</div>
                                <div className='h-[2px] w-[122px] bg-black'></div>
                                <div className={`${styles.paragraph_20} w-[770px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Placerat orci nulla pellentesque</div>
                            </div>

                            <div className='flex flex-col gap-[30px] py-[65px]'>

                                <div>
                                    <img src={Image6} />
                                </div>
                                <div className='flex gap-[30px]'>
                                    <img src={Image7} />
                                    <img src={Image7} />
                                </div>

                            </div>

                        </div>

                        <div className='flex flex-col items-center justify-center py-[65px]'>
                            
                            <div className={`${styles.body_40_semibols}`}>Related Products</div>
                            <div className='h-[2px] w-[122px] bg-black mt-[32px]'></div>

                            <div className='flex gap-[20px] mt-[65px]'>
                                <Product ImageLink={Image} ProductName='Vegan Leather Chair' ProductPrice='79.00'/>
                                <Product ImageLink={Image} ProductName='Vegan Leather Chair' ProductPrice='79.00'/>
                                <Product ImageLink={Image} ProductName='Vegan Leather Chair' ProductPrice='79.00'/>
                            </div>
                        </div>


                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );

};

export default ProductDetails;