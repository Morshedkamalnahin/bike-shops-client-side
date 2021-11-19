import { Container, Typography, Alert } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://mysterious-temple-52045.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Successfully added')
                    reset();
                }
            })
    };
    return (
        <div>

            <Container sx={{ width: '75%' }}>
                <Typography variant='h4' sx={{ my: 4, fontWeight: 600 }}>
                    Add New Product
                </Typography>
                {/* add services add form */}
                <form className='mx-auto d-flex flex-column from-container mb-5' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3 p-2' placeholder='Image Url' {...register("img")} />
                    <input className='mb-3 p-2' placeholder='Enter Title' {...register("title")} />
                    <input className='mb-3 p-2' placeholder='Enter Bike Brand' {...register("brand")} />
                    <input className='mb-3 p-2' placeholder='Enter Bike Fueal' {...register("fuel")} />
                    <textarea className='mb-3 p-2' placeholder='Write Description' {...register("desc")} />
                    <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3 p-2 btn-now' type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;