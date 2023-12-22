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
            <div className='flex justify-center'>
                <Header fontcolor='#fff' hoverfontcolor='#fff'/>
                <div className="container flex flex-col justify-center absolute top-0 z-0">

                    <div className="container flex justify-center relative">

                        <img src={MainImage} className="w-full"/>
                        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40"></div>
                        <div className="absolute top-[227px] flex justify-center text-[180px] uppercase font-[300] leading-[160px] text-[#fff] text-center">Your style reflection</div>
                        <div className='absolute top-[578px] flex justify-center text-[34px] capitalize font-[400] leading-normal text-[#fff] text-center'>Furniture that fits and hits home</div>
                        <Link to='/' className={`${styles.body_14_regular} uppercase text-[#fff] absolute top-[700px] bg-white bg-opacity-50 backdrop-blur-4 px-[48px] py-[14px] rounded-[25px] w-[260px] flex justify-center gap-[13px]`}>View Collection<ArrowForwardIcon/></Link>

                    </div>

                    <div className="container flex flex-col justify-center relative bg-[#E9EADD] pb-[132px]">

                        <div
                            x-data="{}"
                            x-init="$nextTick(() => {
                                let ul = $refs.texts;
                                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                                ul.nextSibling.setAttribute('aria-hidden', 'true');
                            })"
                            class="w-full inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                        >
                            <ul x-ref="texts" class="flex items-center justify-center gap-[86px] md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
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

                        <div className='mt-[82px] flex justify-center gap-[20px]'>

                            <div >
                                <img src={HeroImage2} className='rounded-[10px]'/>
                            </div>

                            <div>

                                <div className='flex gap-[20px]'>
                                    <img src={HeroImage3} className='rounded-[10px]'/>
                                    <img src={HeroImage4} className='rounded-[10px]'/>
                                </div>

                                <div className='w-[547px] mt-[55px] ml-[52px] '>

                                    <div className={`${styles.body_40_light}`}>Choose the change</div>
                                    <div className={`${styles.paragraph_16} mt-[20px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus.</div>
                                    <Link to='/' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[260px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>View Collection<ArrowForwardIcon/></Link>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='my-[130px] mx-[80px] flex flex-col justify-center items-center'>
                        
                        <div className={`${styles.body_14_regular} uppercase py-[9px] px-[30px] bg-[#F5F5F5] rounded-[25px]`}>Our Services</div>
                        <div className={`${styles.h6_60} uppercase w-[1060px] text-center my-[40px]`}>Your comfort and aesthetic design suitable for you is before anything else</div>

                        <div className='flex my-[50px]'>

                            <img src={HeroImage5} className='rounded-l-[10px]'/>
                            <img src={HeroImage6}/>
                            <img src={HeroImage7} className='rounded-r-[10px]'/>
                            
                        </div>

                        <Link to='/services' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>Learn More<ArrowForwardIcon/></Link>
                    </div>

                    <div className='flex justify-center'>
                        <img src={HeroImage8} className='rounded-[10px]'/>
                    </div>

                    <div className='mt-[130px] mb-[50px] mx-[80px] flex flex-col justify-center items-center'>

                        <div className={`${styles.body_14_regular} uppercase py-[9px] px-[30px] bg-[#F5F5F5] rounded-[25px]`}>Choose Your Styles</div>
                        <div className={`${styles.h6_60} uppercase w-[1060px] text-center my-[40px]`}>Decore your dreams</div>

                    </div>

                    <div className='flex justify-center gap-[147px] mb-[130px] mx-[80px]'>

                        <div className='w-[533px] flex flex-col gap-[30px]'>

                            <button 
                                onClick={() => {setminimalistDesignData(false); setmodernFurnitureData(true)}} 
                                className={`${styles.body_26_regular} flex items-center justify-end gap-[300px] pb-[12px] border-b-[2px] ${modernFurnitureData ? 'text-[#181818]' : 'text-[#A0A0A0]'}`}
                            >
                                Modern Furniture { modernFurnitureData ? <SouthEastIcon/> : <ArrowForwardIcon/> }
                            </button>

                            <button 
                                onClick={() => {setmodernFurnitureData(false); setminimalistDesignData(true)}}
                                className={`${styles.body_26_regular} flex items-center justify-end gap-[300px] pb-[12px] border-b-[2px] ${minimalistDesignData ? 'text-[#181818]' : 'text-[#A0A0A0]'}`}
                            >
                                Minimalist Style { minimalistDesignData ? <SouthEastIcon/> : <ArrowForwardIcon/> }
                            </button>

                        </div>

                        <div>
                            <div className={`w-[533px]`}>
                                { modernFurnitureData ? 'Modern Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl. Ultrices gravida dictum fusce ut placerat. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisl pretium fusce id velit. Suspendisse ultrices gravida dictum fusce ut placerat.' 
                                : minimalistDesignData ? 'Minimalist Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl. Ultrices gravida dictum fusce ut placerat. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisl pretium fusce id velit. Suspendisse ultrices gravida dictum fusce ut placerat.' 
                                : '' }
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center gap-[200px] bg-[#FAFAF4] pt-[110px] pb-[30px]'>

                        <div className='w-[455px] relative top-[-50px]'>

                            <div className={`${styles.h8_40} w-[455px]`}>Everything is designed. Few things are designed well</div>
                            <Link to='/' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>Learn More<ArrowForwardIcon/></Link>
                            <img src={HeroImage9} className='absolute right-[-120px] top-[190px] scale-8'/>

                        </div>

                        <div className='w-[625px] flex flex-wrap gap-[25px]'>

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

                    <div className='flex flex-col justify-center items-center py-[130px] gap-[29px]'>

                            <img src={HeroImage10} className='rounded-[25px]'/>
                            <div className={`${styles.h6_60} font-[800] flex flex-col items-center justify center`}>
                                <div>Let your home feel</div>
                                <div className='text-[#D0D0D0]'>the style</div>
                            </div>
                            <Link to='/' className={`${styles.body_14_regular} uppercase px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] border border-black rounded-[25px]`}>Get in touch<ArrowForwardIcon/></Link>

                    </div>
                    
                    <Footer />
                </div>

                <Footer />
            </div>
        </>

    );

}

export default HomePage;