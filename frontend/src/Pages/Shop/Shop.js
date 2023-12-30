import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderBackgroundImage from '../../Assets/Shop/Frame 95.png'
import Product from '../../Components/Product/Product';
import Image from '../../Assets/Shop/04 1.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, productdetails, reset } from '../../features/product/productSlice'

const Shop = () => {

    const [allproducts, setallproducts] = useState(true);
    const [livingroom, setlivingroom] = useState(false);
    const [diningandkitchen, setdiningandkitchen] = useState(false);
    const [bedroom, setbedroom] = useState(false);
    const [outdoor, setoutdoor] = useState(false);

    const resetFilter = () => {

        setallproducts(false);
        setlivingroom(false);
        setdiningandkitchen(false);
        setbedroom(false);
        setoutdoor(false);

    }

    const dispatch = useDispatch()

    const { isLoading, isError, isSuccess, message, products, productDetails } = useSelector(
        (state) => state.product
    )

    useEffect(() => {
        if (isError) {
            alert(message)
        }

        dispatch(allProducts())
    }, [isError, isSuccess,]);

    return(

        <>
            <div>
                <Header/>

                <div className='flex flex-col items-center justify-center mt-[103px]'>

                    <div className='relative flex justify-center'>
                        <img src={HeaderBackgroundImage}/>
                        <div className={`${styles.h4_70} absolute top-0`}>Shop</div>
                    </div>

                    <div className='flex items-center justify-start mt-[20px]'>
                        <div className='flex gap-[20px]'>
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: allproducts? '#fff' : '#000', backgroundColor: allproducts ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setallproducts(true)}}
                            >
                                All Products
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: livingroom? '#fff' : '#000', backgroundColor: livingroom ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setlivingroom(true)}}
                            >
                                Living Room
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: diningandkitchen? '#fff' : '#000', backgroundColor: diningandkitchen ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setdiningandkitchen(true)}}
                            >
                                Dining & Kitchen
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: bedroom? '#fff' : '#000', backgroundColor: bedroom ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setbedroom(true)}}
                            >
                                Bed Room
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: outdoor? '#fff' : '#000', backgroundColor: outdoor ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setoutdoor(true)}}
                            >
                                Out door
                            </button> 
                        </div>
                    </div>
                    
                    <div className='w-[1280px] my-[60px]'>

                        <div className='flex justify-center flex-wrap gap-[25px]'>

                            {products.map((product) => (

                                <Product ProductId={product._id} ImageLink={product.productImageLinks[0]} ProductName={product.productName} ProductPrice={product.productPrice}/>

                            ))}

                        </div>

                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );

};

export default Shop;