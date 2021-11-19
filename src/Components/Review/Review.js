import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const { img, name, desc, ratting} = review; 
    console.log(review)
    return (
        <div className='col-lg-6'>
            <div className='d-flex justify-content-center align-items-center shadow-lg p-3 border border-2 border-danger rounded-3 review-section'>
                <div className='w-100'>
                    <img src={img} className='rounded-3 w-100'   alt=''  />
                </div>
                <div className='text-start w-100 ms-3'>
                    <p>{desc.slice(0, 110)}</p>
                    <h4>{name}</h4>
                    <span>Ratting :- {ratting}</span>
                </div>
            </div>
        </div>
    );
};

export default Review;