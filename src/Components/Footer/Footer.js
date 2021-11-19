import React from 'react';

const Footer = () => {
    return (
        <div className='bg-primary py-5 mt-5'>
            <div className="row container mx-auto">
                <div className="col-lg-3 col-sm-12">
                    <div className='text-center'>
                        {/* footer logo  */}
                        <h2 className='text-white pt-3'>Bike Shops</h2>
                        <p className='text-white pt-2'>Find Bike Dealerships In Maryland. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className='text-center mt-4'>
                        <h4 className='text-white'>Company</h4>
                        <nav>
                            <ul className='list-unstyled text-white'>
                                <li className='pb-3 pt-2 fs-5'>Pricing</li>
                                <li className='pb-3 fs-5'>About</li>
                                <li className='pb-3 fs-5'>Gallery</li>
                                <li className=' fs-5'>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className='text-center mt-4'>
                        <h4 className='text-white'>Popular Brand</h4>
                        <nav>
                            <ul className='list-unstyled text-white'>
                                <li className='pb-3 pt-2 fs-5'>Yamaha</li>
                                <li className='pb-3 fs-5'>Honda</li>
                                <li className='pb-3 fs-5'>Davidson</li>
                                <li className='pb-3 fs-5'>suzuki</li>
                                <li className=' fs-5'>KTM</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className='mt-4 text-white ms-2'>
                        <h4 className='text-white pb-3'>Contact Us</h4>
                        <h6 className='fs-5 pb-2'><i class="fas fa-envelope"></i> <span className='ms-1'>mknahin2000@gmail.com</span></h6>
                        <h6 className='fs-5 pb-2'><i class="fas fa-phone-square-alt"></i> <span className='ms-1'>+880 1840225535</span></h6>
                        <h6 className='fs-5 pb-2'><i class="fas fa-map-marker-alt"></i> <span className='ms-1'>Cox's Bazar, Chittagong,<br />
                            Bangladesh</span></h6>
                    </div>
                    <div>
                        <nav>
                            <ul className='list-unstyled d-flex text-white pt-2'>
                                <li className='mx-3 fs-4'><i class="fab fa-facebook"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-instagram"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-twitter"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-pinterest"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;