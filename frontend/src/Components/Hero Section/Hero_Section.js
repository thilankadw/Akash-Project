import { Link } from 'react-router-dom';
import styles from '../../Styles/styles';
import MainImage from '../../Assets/Home Page/hero_main_image.png';
import HeroImage2 from '../../Assets/Home Page/hero_image_2.png';
import HeroImage3 from '../../Assets/Home Page/hero_image_3.png';
import HeroImage4 from '../../Assets/Home Page/hero_image_4.png';
import HeroImage5 from '../../Assets/Home Page/hero_image_5.png';
import HeroImage6 from '../../Assets/Home Page/hero_image_6.png';
import HeroImage7 from '../../Assets/Home Page/hero_image_7.png';
import CarouselImage1 from '../../Assets/Home Page/hero_image_5.png';
import CarouselImage2 from '../../Assets/Home Page/hero_image_6.png';
import CarouselImage3 from '../../Assets/Home Page/hero_image_7.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {

    return(

        <>
            <div className='flex justify-center'>
            <div className="container flex flex-col justify-center absolute top-0 z-0">
                <div className="">
                    <img src={MainImage} className=""/>
                    <div className=""></div>
                    <div className="">Your style reflection</div>
                    <div className=''>Furniture that fits and hits home</div>
                    <Link to='/' className={`${styles.btn_typo_1} `}>View Collection<ArrowForwardIcon/></Link>
                </div>
                <div className="">
                    <div
                        x-data="{}"
                        x-init="$nextTick(() => {
                            let ul = $refs.texts;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                        })"
                        class="w-full inline-flex  flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                    >
                        <ul x-ref="texts" class="">
                            <li className=''>
                                Furniture                                
                            </li>
                            <li className=''>
                                Interior
                            </li>
                            <li className=''>
                                Design
                            </li>
                        </ul>           
                    </div>
                    <div className=''>
                        <div >
                            <img src={HeroImage2} className='rounded-[10px]'/>
                        </div>
                        <div>
                            <div className=''>
                                <img src={HeroImage3} className='rounded-[10px]'/>
                                <img src={HeroImage4} className='rounded-[10px]'/>
                            </div>
                            <div className=''>
                                <div className={`${styles.title_font_1}`}>Choose the change</div>
                                <div className={`${styles.text_font_1} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus.</div>
                                <Link to='/' className={`${styles.btn_typo_1} `}>View Collection<ArrowForwardIcon/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Our Services</div>
                    <div>Your comfort and aesthetic design suitable for you is before anything else</div>
                    <div>
                        <img src={CarouselImage1}/>
                        <img src={CarouselImage2}/>
                        <img src={CarouselImage3}/>
                    </div>
                </div>
            </div>
            </div>
            {/* <div className='flex justify-center'>
            <div className="container flex flex-col justify-center absolute top-0 z-0">
                <div className="container flex justify-center relative">
                    <img src={MainImage} className="container max-w-full"/>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40"></div>
                    <div className="absolute top-[227px] flex justify-center text-[60px] md:text-5xl lg:text-[180px] xl:text-3xl 2xl:text-2xl uppercase font-[300] leading-[160px] text-white text-center ">Your style reflection</div>
                    <div className='absolute top-[578px] flex justify-center text-[34px] capitalize font-[400] leading-normal text-[#fff] text-center sm:'>Furniture that fits and hits home</div>
                    <Link to='/' className={`${styles.btn_typo_1} absolute top-[700px] bg-white bg-opacity-50 backdrop-blur-4 px-[48px] py-[14px] rounded-[25px] w-[250px] flex justify-center gap-[13px]`}>View Collection<ArrowForwardIcon/></Link>
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
                                <div className={`${styles.title_font_1}`}>Choose the change</div>
                                <div className={`${styles.text_font_1} mt-[20px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at lectus.</div>
                                <Link to='/' className={`${styles.btn_typo_1} px-[48px] py-[14px] w-[250px] flex justify-center gap-[13px] mt-[56px] border border-black rounded-[25px]`}>View Collection<ArrowForwardIcon/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Our Services</div>
                    <div>Your comfort and aesthetic design suitable for you is before anything else</div>
                    <div>
                        <img src={CarouselImage1}/>
                        <img src={CarouselImage2}/>
                        <img src={CarouselImage3}/>
                    </div>
                </div>
            </div>
            </div> */}
        </>

    );

}

export default HeroSection;