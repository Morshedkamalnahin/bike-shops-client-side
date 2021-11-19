import React from 'react';
import './SingleProduct.css';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {img, price, desc, _id, title, fuel, brand} = product;
    return (
        <div className='col-lg-6'>
            <div className='services-container p-2 pb-4'>
               <div>
               <img src={img} className='w-100 service-img' height='400px' alt="" />
                <h6>${price}</h6>
               </div>
                <div className='d-flex justify-content-around service-location align-items-center '>
                <p>{brand}</p>
                <p>{fuel}</p>
                </div>
                <h4 className='py-2'>{title}</h4>
                <p>{desc}</p>
               <Link to={`/purches/${_id}`}>
                    <button className='btn-book'>Purches Now</button>
               </Link>
            </div>
        </div>
    );
};

export default SingleProduct;