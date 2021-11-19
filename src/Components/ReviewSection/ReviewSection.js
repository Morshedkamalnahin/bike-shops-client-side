import { CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mysterious-temple-52045.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <Container>
            <Typography variant='h3' sx={{ my : 8, fontWeight : 600}}>
               Customar Review
            </Typography>
            {
                !reviews.length ? <CircularProgress color="secondary"  /> :
                <div className='row container mx-auto g-3 pb-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            }
        </Container>
    );
};

export default ReviewSection;