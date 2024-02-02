import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderBackgroundImage from '../../Assets/Shop/Frame 95.png'
import Product from '../../Components/Product/Product';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, reset, setNextPage, setPreviousPage, setCurrentPage, setType} from '../../features/product/productSlice'
import ReactPaginate from 'react-paginate';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Shop = () => {

    const [allproducts, setallproducts] = useState(true);
    const [livingroom, setlivingroom] = useState(false);
    const [diningandkitchen, setdiningandkitchen] = useState(false);
    const [bedroom, setbedroom] = useState(false);
    const [outdoor, setoutdoor] = useState(false);
    const [open, setopen] = useState(false);

    const resetFilter = () => {

        setallproducts(false);
        setlivingroom(false);
        setdiningandkitchen(false);
        setbedroom(false);
        setoutdoor(false);

    }

    const dispatch = useDispatch()

    const { isError, isSuccess, message, products, nextPage, previousPage, currentPage, totalPages, type } = useSelector(
        (state) => state.product || {}
    )
    

    const handlePageClick = (e) => {
        dispatch(setCurrentPage(e.selected+1))
        dispatch(setNextPage(e.selected+2))
        dispatch(setPreviousPage(e.selected))
    }; 

    useEffect(() => {
        if (isError) {
            alert(message)
        }

        dispatch(allProducts({ currentPage, type }))

    }, [isError, isSuccess, nextPage, previousPage, currentPage, type]);

    return(

        <>
            <div>
                <Header/>

                <div className='flex flex-col items-center justify-center my-[100px]'>

                    <div className='relative flex justify-center w-[300px]'>
                        <img src={HeaderBackgroundImage} className='hidden sm:block'/>
                        <div className={`${styles.h4_70} absolute top-0`}>Shop</div>
                    </div>

                    <div className='relative top-[100px] left-[-120px]'>
                        <button class="sm:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => {setopen(!open)}}>
                            <FilterAltIcon />
                        </button>
                    </div>

                    <div className='relative top-[70px] flex items-center justify-start mt-[20px]'>
                        
                        <div className={`${open ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-[20px]`}>
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: allproducts? '#fff' : '#000', backgroundColor: allproducts ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setallproducts(true); dispatch(setType("all"));}}
                            >
                                All Products
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: livingroom? '#fff' : '#000', backgroundColor: livingroom ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setlivingroom(true); dispatch(setType("living"));}}
                            >
                                Living Room
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: diningandkitchen? '#fff' : '#000', backgroundColor: diningandkitchen ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setdiningandkitchen(true); dispatch(setType("dining"));}}
                            >
                                Dining & Kitchen
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: bedroom? '#fff' : '#000', backgroundColor: bedroom ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setbedroom(true); dispatch(setType("bed"));}}
                            >
                                Bed Room
                            </button>                                       
                            <button 
                                className={`${styles.body_14_regular} py-[10px] px-[20px] rounded-[27px]`} 
                                style={{color: outdoor? '#fff' : '#000', backgroundColor: outdoor ? '#000' : '#fff'}}
                                onClick={() => {resetFilter(); setoutdoor(true); dispatch(setType("outdoor"));}}
                            >
                                Out door
                            </button> 
                        </div>
                    </div>
                    
                    <div className='relative flex justify-center items-center w-[330px] sm:w-full mt-[20px] top-[80px]'>

                        <div className='flex items-center justify-center flex-wrap gap-[25px]'>

                            {products && products.map((product) => (

                                <Product ProductId={product._id} ImageLink={product.productImageLinks[0]} ProductName={product.productName} ProductPrice={product.productPrice}/>

                            ))}

                            {products.length == 0 && <div className={`${styles.body_40_semibols} my-[60px]`}>No Products</div>}

                        </div>

                    </div>
                    
                    <div className='my-[20px] w-[300px] mt-[80px]'>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={1}
                            pageCount={totalPages}
                            previousLabel="Previous"
                            marginPagesDisplayed={0}
                            containerClassName="flex justify-center"
                            pageClassName="mx-2"
                            pageLinkClassName="py-2 px-4 border rounded"
                            previousClassName="mr-2"
                            previousLinkClassName="py-2 px-4 border rounded"
                            nextClassName="ml-2"
                            nextLinkClassName="py-2 px-4 border rounded"
                            activeClassName="bg-black text-white"
                            activeLinkClassName="bg-black text-white"
                        />
                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );

};

export default Shop;