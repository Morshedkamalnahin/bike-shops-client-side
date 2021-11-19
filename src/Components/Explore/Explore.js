import { CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct'

const Explore = () => {
    const [exploreProduct, setExploreProduct] = useState([])
    useEffect(() => {
        fetch('https://mysterious-temple-52045.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setExploreProduct(data))
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Typography variant='h3' className='service-title' sx={{ my : 8, fontWeight : 600}}>
                Explore Products
                </Typography>
                {
                 !exploreProduct.length ? <CircularProgress color="secondary"  />
                 :<div className="row container mx-auto g-4" >
                    {
                        exploreProduct.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                        ></SingleProduct>)
                    }
                    </div>
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;