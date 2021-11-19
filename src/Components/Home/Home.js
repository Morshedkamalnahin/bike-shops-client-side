import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import OurProducts from '../OurProducts/OurProducts';
import OurServices from '../OurServices/OurServices';
import ReviewSection from '../ReviewSection/ReviewSection';
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Slider></Slider>
           <OurServices></OurServices>
           <OurProducts></OurProducts>
           <ReviewSection></ReviewSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;