import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Container, Typography } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import useAuth from '../../Hooks/UseAuth'


const Purches = () => {
    const {user} = useAuth()
    const {productId} = useParams()
    const [singleProduct, setSingleProduct] = useState([])

    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [number, setNumber] = useState();

    
    useEffect(() => {
        fetch(`https://mysterious-temple-52045.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    },[])

    const { img, price, desc, _id, title, fuel, brand } = singleProduct;
    const handleRegister = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const rate = price;
        const carName = title;
        const status = 'Pending';
        const image = img;

        const regService = {name, email, rate, image, carName, status};
        fetch('https://mysterious-temple-52045.herokuapp.com/orders', {
            method: 'POST',
            headers : {
                'content-type' : 'application/json'
            }, 
            body : JSON.stringify(regService)
        })
        .then(res => res.json())
        .then(result => {
           if(result.insertedId){
               alert('Your offer successfuly submit')
               e.target.reset();
           }
        })
       
    };
    return (
        <div>
         <Navigation></Navigation>
         <Container>
         <Typography variant='h4' className='service-title' sx={{ my : 8, fontWeight : 600}}>
                 Details
                </Typography>
                <div className="row container mx-auto g-3">
                    <div className="col-lg-6">
                    <div className='p-4 py-5 border border-2 text-center'>
                    <h3 className='pb-4'>Please Place Your Offer</h3>
                    <form className='w-100 d-flex flex-column mx-auto' onSubmit={handleRegister}>
                            <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user?.displayName} required /><br />
                            
                            <input onBlur={(e) => setUseremail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br />
                            
                            <input type="text" placeholder="Service title" defaultValue={title} /><br />
                            
                            <input type="number" placeholder="Delivery Charge" defaultValue={price} /><br />
                            <input onBlur={(e) => setNumber(e.target.value)} type="number" placeholder='Enter Your Number' />
                            <br />
                        <button className="btn-now py-2" type="submit">Submit</button>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-6 shadow-lg py-2">
                        <div className='services-container '>
                             <img src={img} className='w-100 service-img' height='400px' alt="" />
                            <h6>${price}</h6>
                            </div>
                            <div className='d-flex justify-content-around service-location align-items-center '>
                            <p>{brand}</p>
                            <p>{fuel}</p>
                            </div>
                            <h4 className='py-2'>{title}</h4>
                            <p>{desc}</p>
                           
                        </div>
                    </div>
            </Container>
         <Footer></Footer>
        </div>
    );
};

export default Purches;