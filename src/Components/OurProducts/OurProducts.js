import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import React, {useState, useEffect} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const OurProducts = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('https://mysterious-temple-52045.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data.slice(0, 6)))
    },[])
    return (
        <Container>
            <Typography variant='h3' sx={{ my : 8, fontWeight : 600}}>
               Our Products
           </Typography>
         {
             !products.length ? <CircularProgress color="secondary"  />
             :<div className="row container mx-auto g-4" >
           {
               products.map(product => <SingleProduct
               key={product._id}
               product={product}
               ></SingleProduct>)
           }
           </div>
        }
        </Container>
    );
};

export default OurProducts;