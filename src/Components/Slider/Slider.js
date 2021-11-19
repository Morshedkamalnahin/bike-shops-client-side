import React from 'react';
import sliderImg1 from '../../image/bike img/sliderimage2.jpg';
import sliderImg2 from '../../image/bike img/sliderimage5.jpg';
import sliderImg3 from '../../image/bike img/silderimage4.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div className="">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* slider img 1  */}
                        <img src={sliderImg1} className="d-block w-100 slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>Yamaha MT 15</h1>
                            <p> High Performance & Outstanding Technology Combined</p>
                            <button className='btn-now'>Explore More</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* slider img 2  */}
                        <img src={sliderImg2} className="d-block w-100  slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>KTM 200 Duke</h1>
                            <p> High Performance & Outstanding Technology Combined</p>
                            <button className='btn-now'>Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* slider img 3  */}
                        <img src={sliderImg3} className="d-block w-100  slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>Royal Enfield </h1>
                            <p> High Performance & Outstanding Technology Combined</p>
                            <button className='btn-now'>Explore Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;