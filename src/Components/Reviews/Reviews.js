import { Container, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/UseAuth';

const Reviews = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mysterious-temple-52045.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Data Successfully added')
                console.log(res)
                reset();
            }
        })
    };
    return (
        <div>
           
           <Container>
           <Typography variant='h3' className='service-title' sx={{ my : 8, fontWeight : 600}}>
                Add Your Review
                </Typography>
                {/* add services add form */}
                <form className='mx-auto d-flex flex-column from-container mb-5 w-75' onSubmit={handleSubmit(onSubmit)}>
                <input  className='mb-3 p-2' placeholder='Image Url' {...register("img")} />
                <input defaultValue={user?.displayName} className='mb-3 p-2'  {...register("name")} />
                <textarea className='mb-3 p-2' placeholder='Write Description' {...register("desc")} />
                <input className='mb-3 p-2' placeholder='rating' type="number" {...register("ratting")} />
                <input className='mb-3 p-2 btn-now' type="submit" value='Add Review' />
                </form>
           </Container>
           
        </div>
    );
};

export default Reviews;