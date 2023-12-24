import styles from '../../Styles/styles';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderImage from '../../Assets/About/aboutus_header_image.png';
import Design from '../../Assets/About/design.png';
import AboutUsImage1 from '../../Assets/About/aboutus_image_1.png';
import AboutUsImage2 from '../../Assets/About/aboutus_image_2.png';
import AboutUsImage3 from '../../Assets/About/aboutus_image_3.png';
import TeamMember1 from '../../Assets/About/team_member_1.png';
import TeamMember2 from '../../Assets/About/team_member_2.png';
import TeamMember3 from '../../Assets/About/team_member_3.png';
import TeamMember4 from '../../Assets/About/team_member_4.png';
import { useState } from 'react';

const AboutUs = () => {

    const [modernFurnitureData, setmodernFurnitureData] = useState(true);
    const [minimalistDesignData, setminimalistDesignData] = useState();

    return(

        <>
            <div>
                <Header/>

                <div className='flex flex-col items-center justify-center mt-[103px]'>

                    <div className='relative'>
                        <img src={HeaderImage} className='rounded-[10px]'/>
                        <div className={`${styles.display_140} absolute top-[128px] left-[40px] bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent mix-blend-overlay`}>we're furniture store</div>
                    </div>

                    <div className='flex py-[130px] px-[80px] items-center'>

                        <div className='flex flex-col gap-[32px]'>
                            <div className={`${styles.body_40_semibols} w-[625px]`}>Exceptional designs for your exception ideas</div>
                            <div className='flex items-start gap-[85px]'>
                                <div className='w-[270px]'>
                                    <div className={`${styles.body_24_semibols}`}>01</div>
                                    <div className={`${styles.paragraph_20} text-[#4D4D4D]`}>Cursus vitae congue mauris rhoncus. Amet est placerat in</div>
                                </div>
                                <div className='w-[270px]'>
                                    <div className={`${styles.body_24_semibols}`}>02</div>
                                    <div className={`${styles.paragraph_20} text-[#4D4D4D]`}>Pharetra magna ac placerat vestibulum lectus.</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex relative left-[100px]'>
                            <img src={Design}/>
                            <img src={AboutUsImage1} className='rounded-br-[100px] rounded-tl-[100px] rounded-[50px] relative left-[-100px] top-[-10px]'/>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center w-[1280px] gap-[32px]'>

                        <div className='flex gap-[700px] border-b-[2px] border-[#D9D9D9] py-[12px]'>

                            <button 
                                onClick={() => {setminimalistDesignData(false); setmodernFurnitureData(true)}} 
                                className={`${styles.body_28_semibols} ${modernFurnitureData ? 'text-[#181818]' : 'text-[#B3B3B3]'}`}
                            >
                                Modern Furniture 
                            </button>

                            <button 
                                onClick={() => {setmodernFurnitureData(false); setminimalistDesignData(true)}}
                                className={`${styles.body_28_semibols} ${minimalistDesignData ? 'text-[#181818]' : 'text-[#B3B3B3]'}`}
                            >
                                Minimalist Style 
                            </button>

                        </div>

                        <div>

                            <div className='flex gap-[30px]'>

                                <div className={`${styles.paragraph_20} w-[625px] first-letter:text-[72px]`} style={{display : modernFurnitureData ? 'block' : 'none'}}>Modern in nulla posuere sollicitudin aliquam ultrices sagittis. Quisque id diam vel quam elementum pulvinar. Mi proin sed libero enim sed faucibus turpis. Porttitor lacus luctus. Elementum nibh tellus molestie nunc non blandit massa. Malesuada fames ac turpis egestas.</div>

                                <div className={`${styles.paragraph_20} w-[625px] mt-[18px]`} style={{display : modernFurnitureData ? 'block' : 'none'}}>Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat. Pharetra magna ac placerat vestibulum lectus. Porttitor lacus luctus accumsan tortor posuere ac ut.</div>

                            </div>

                            <div className='flex gap-[30px]'>

                                <div className={`${styles.paragraph_20} w-[625px] first-letter:text-[72px]`} style={{display : minimalistDesignData ? 'block' : 'none'}}>Minimalist in nulla posuere sollicitudin aliquam ultrices sagittis. Quisque id diam vel quam elementum pulvinar. Mi proin sed libero enim sed faucibus turpis. Porttitor lacus luctus. Elementum nibh tellus molestie nunc non blandit massa. Malesuada fames ac turpis egestas.</div>

                                <div className={`${styles.paragraph_20} w-[625px] mt-[18px]`} style={{display : minimalistDesignData ? 'block' : 'none'}}>Cursus vitae congue mauris rhoncus. Amet est placerat in egestas erat. Pharetra magna ac placerat vestibulum lectus. Porttitor lacus luctus accumsan tortor posuere ac ut.</div>

                            </div>

                        </div>

                        <div className='flex gap-[30px] mt-[64px]'>

                            <img src={AboutUsImage2} className='rounded-[10px]'/>
                            <img src={AboutUsImage3} className='rounded-[10px]'/>

                        </div>

                    </div>

                    <div className='flex flex-col items-center gap-[52px] my-[130px]'>

                        <div className={`${styles.body_40_semibols}`}>Meet our team</div>

                        <div className='flex items-center justify-center gap-[24px]'>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={TeamMember1} className='rounded-[10px] mb-[40px]'/>
                                <div className={`${styles.body_24_regular} mb-[12px]`}>Keneth Conroy</div>
                                <div className={`${styles.body_18_regular}`}>Art director</div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={TeamMember2} className='rounded-[10px] mb-[40px]'/>
                                <div className={`${styles.body_24_regular} mb-[12px]`}>Kendall Mckernan</div>
                                <div className={`${styles.body_18_regular}`}>Art director</div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={TeamMember3} className='rounded-[10px] mb-[40px]'/>
                                <div className={`${styles.body_24_regular} mb-[12px]`}>Michal Brink</div>
                                <div className={`${styles.body_18_regular}`}>Art director</div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <img src={TeamMember4} className='rounded-[10px] mb-[40px]'/>
                                <div className={`${styles.body_24_regular} mb-[12px]`}>Guy Mccoy</div>
                                <div className={`${styles.body_18_regular}`}>Art director</div>
                            </div>
                        </div>

                    </div>

                </div>

                <Footer/>
            </div>
        </>

    );

};

export default AboutUs;