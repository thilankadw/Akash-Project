import { Link } from 'react-router-dom';
import styles from '../../Styles/styles';
import MainImage from '../../Assets/Home Page/hero_main_image.png';
import HeroImage2 from '../../Assets/Home Page/hero_image_2.png';
import HeroImage3 from '../../Assets/Home Page/hero_image_3.png';
import HeroImage4 from '../../Assets/Home Page/hero_image_4.png';
import HeroImage5 from '../../Assets/Home Page/hero_image_5.png';
import HeroImage6 from '../../Assets/Home Page/hero_image_6.png';
import HeroImage7 from '../../Assets/Home Page/hero_image_7.png';
import HeroImage8 from '../../Assets/Home Page/hero_image_8.png';
import HeroImage9 from '../../Assets/Home Page/hero_image_9.png';
import HeroImage10 from '../../Assets/Home Page/hero_image_10.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { useState } from 'react';
import HomePageShowCase from '../../Components/HomePageShowCase/HomePageShowCase';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const HomePage = () => {

    const [modernFurnitureData, setmodernFurnitureData] = useState(true);
    const [minimalistDesignData, setminimalistDesignData] = useState();

    return (

        <>
            
            <div className='flex justify-center items-center '>

                <Header/>                                                      
                <div className="flex flex-col w-[330px] sm:w-full justify-center items-center">

                    <div className="flex flex-col justify-center items-center bg-cover bg-center mt-[90px] h-auto py-[50px] gap-[50px] w-[325px] md:w-[950px] max-w-screen xl:w-full" style={{ backgroundImage: `url(${MainImage})` }}>
                        <div className=" text-[50px] md:text-[150px] uppercase font-[300] leading-[66px] md:leading-[150px] max-w-screen text-[#fff] text-center">Your style<br/>reflection</div>
                        <div className=' text-[22px] md:text-[34px] capitalize font-[400] leading-normal text-[#fff] text-center'>Furniture that fits and hits home</div>
                        <div className=''><Link to='/shop' className={`${styles.body_14_regular} uppercase text-[#fff] bg-white bg-opacity-50 backdrop-blur-4 px-[48px] py-[14px] rounded-[25px] w-[260px] flex justify-center gap-[13px]`}>View Collection<ArrowForwardIcon /></Link></div>
                    </div>

                    <div className="container flex flex-col justify-center items-center relative bg-[#E9EADD] pb-[132px] w-[325px] sm:w-[950px] sm:px-[50px] xl:w-[1300px]">

                        <div
                            x-data="{}"
                            x-init="$nextTick(() => {
                                let ul = $refs.texts;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })"
                            className="inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] w-[300px] sm:w-[950px]"
                        >
                            <ul x-ref="texts" class="flex items-center justify-center gap-[86px]  [&_li]:mx-8 animate-infinite-scroll sm:w-[950px]">
                                <li className='text-[120px] uppercase leading-normal font-[300] p-0 m-0'>
                                    Furniture                                
                                </li>
                                <li className='text-[120px] uppercase leading-normal font-[300]'>
                                    Interior
                                </li>
                                <li className='text-[120px] uppercase leading-normal font-[300]'>
                                    Design
                                </li>
                            </ul>           
                        </div>

                        <div className='mt-[82px] flex justify-center xl:gap-[40px]'>

                            <div >
                                <img src={HeroImage2} className='rounded-[10px] hidden xl:block '/>
                            </div>

                            <div>

                                <div className='flex justify-center'>
                                    <img src={HeroImage3} className='rounded-[10px] w-[300px] sm:w-full'/>
                                </div>

                                <div className='w-[300px] sm:w-full xl:w-[500px] mt-[55px] sm:ml-[52px] pl-[15px] sm:pl-0'>

                                    <div className={`${styles.body_40_light}`}>Choose the change</div>
                                    <div className={`${styles.paragraph_16} mt-[20px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus.</div>
                                    <Link to='/shop' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[260px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>View Collection<ArrowForwardIcon/></Link>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='my-[130px] mx-[80px] flex flex-col justify-center items-center'>
                        
                        <div className={`${styles.body_14_regular} uppercase py-[9px] px-[30px] bg-[#F5F5F5] rounded-[25px]`}>Our Services</div>
                        <div className={`${styles.h6_60} uppercase w-[270px] sm:w-[1000px] text-center my-[40px] text-[17px] sm:text-[60px]`}>Your comfort and aesthetic design suitable for you is before anything else</div>

                        <div className='flex my-[50px]'>

                            <img src={HeroImage5} className='rounded-l-[10px] hidden sm:block'/>
                            <img src={HeroImage6} className='w-[300px] sm:w-full sm:hidden md:hidden lg:hidden xl:block'/>
                            <img src={HeroImage7} className='rounded-r-[10px] hidden sm:block'/>
                            
                        </div>

                        <Link to='/services' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>Learn More<ArrowForwardIcon/></Link>
                    </div>

                    <div className='flex justify-center'>
                        <img src={HeroImage8} className='rounded-[10px] w-[300px] sm:w-full'/>
                    </div>

                    <div className='mt-[130px] mb-[50px] mx-[80px] flex flex-col justify-center items-center'>

                        <div className={`${styles.body_14_regular} uppercase py-[9px] px-[30px] bg-[#F5F5F5] rounded-[25px]`}>Choose Your Styles</div>
                        <div className={`${styles.h6_60} uppercase w-[330px] sm:w-[1000px] text-center mt-[40px] text-[17px] sm:text-[60px]`}>Decore your dreams</div>

                    </div>

                    <div className='flex justify-center gap-[60px] sm:gap-[100px] mb-[130px] mx-[80px] flex-col sm:flex-row'>

                        <div className='w-[280px] sm:w-[480px] flex flex-col gap-[30px]'>

                            <button 
                                onClick={() => {setminimalistDesignData(false); setmodernFurnitureData(true)}} 
                                className={`${styles.body_26_regular} flex items-center justify-center sm:justify-end sm:gap-[200px] pb-[12px] border-b-[2px] ${modernFurnitureData ? 'text-[#181818]' : 'text-[#A0A0A0]'}`}
                            >
                                Modern Furniture { modernFurnitureData ? <SouthEastIcon/> : <ArrowForwardIcon/> }
                            </button>

                            <button 
                                onClick={() => {setmodernFurnitureData(false); setminimalistDesignData(true)}}
                                className={`${styles.body_26_regular} flex items-center justify-center sm:justify-end sm:gap-[200px] pb-[12px] border-b-[2px] ${minimalistDesignData ? 'text-[#181818]' : 'text-[#A0A0A0]'}`}
                            >
                                Minimalist Style { minimalistDesignData ? <SouthEastIcon/> : <ArrowForwardIcon/> }
                            </button>

                        </div>

                        <div className='flex justify-center'>
                            <div className={` w-[300px] sm:w-[503px] text-justify px-[10px] sm:px-0`}>
                                { modernFurnitureData ? 'Modern Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl. Ultrices gravida dictum fusce ut placerat. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisl pretium fusce id velit. Suspendisse ultrices gravida dictum fusce ut placerat.' 
                                : minimalistDesignData ? 'Minimalist Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl. Ultrices gravida dictum fusce ut placerat. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisl pretium fusce id velit. Suspendisse ultrices gravida dictum fusce ut placerat.' 
                                : '' }
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col sm:flex-row justify-center items-center gap-[50px] sm:gap-[100px] bg-[#FAFAF4] pt-[110px] pb-[30px] w-[300px] sm:w-[1100px] xl:w-[1300px] p-[10px]'>

                        <div className='w-[300px] sm:w-[500px] relative top-[-50px]'>

                            <div className={`${styles.h8_40} sm:w-[455px] w-[280px] px-[10px] sm:px-0`}>Everything is designed. Few things are designed well</div>
                            <Link to='/about-us' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>Learn More<ArrowForwardIcon/></Link>

                        </div>

                        <div className='w-[300px] sm:w-[550px] flex flex-wrap gap-[15px] px-[10px] sm:px-0'>

                            <HomePageShowCase 
                                number='01' title='14 Years of experience' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                            <HomePageShowCase 
                                number='02' title='20 awards winning' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                            <HomePageShowCase 
                                number='03' title='200+ Products' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>
                            <HomePageShowCase 
                                number='04' title='100+ Happy Clients' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'/>

                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center py-[130px] gap-[29px] w-[300px] sm:w-[1000px] xl:w-[1300px]'>

                            <img src={HeroImage10} className='rounded-[25px]'/>
                            <div className={`${styles.h6_60} font-[800] flex flex-col items-center justify-center`}>
                                <div className='text-[25px] sm:text-[60px]'>Let your home feel</div>
                                <div className='text-[50px] sm:text-[60px] text-[#D0D0D0]'>the style</div>
                            </div>
                            <Link to='/contact-us' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] border border-black rounded-[25px]`}>Get in touch<ArrowForwardIcon/></Link>

                    </div>
                    
                    <Footer />
                </div>
            </div>
        </>

    );

}

export default HomePage;