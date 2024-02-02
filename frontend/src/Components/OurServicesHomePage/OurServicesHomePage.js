import CarouselImage1 from '../../Assets/Home Page/hero_image_5.png';
import CarouselImage2 from '../../Assets/Home Page/hero_image_6.png';
import CarouselImage3 from '../../Assets/Home Page/hero_image_7.png';

const OurServicesHomePage = () => {

    return (
        <>
            <div>
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
        </>
    );

};

export default OurServicesHomePage;