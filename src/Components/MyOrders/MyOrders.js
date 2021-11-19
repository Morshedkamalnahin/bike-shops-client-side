import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Hooks/UseAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import OrderCard from '../OrderCard/OrderCard';

const MyOrders = () => {
    const {user} = useAuth()
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`https://mysterious-temple-52045.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, myOrders]);

  const cancelOrder = (id) => {
    swal({
      title: "Are you sure for Cancel order?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://mysterious-temple-52045.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your Order Canceled!", "", "success");
            }
          });
      } else {
        swal("Your order has been saved!");
      }
    });
  };

    return (
      <div className="pt-4">
        <div className="mt-1">
          <Container>
            <Row xs={1} sm={1} md={1} lg={2} className="g-5">
              {myOrders?.map((order) => (
                <OrderCard
                  key={order._id}
                  cancelOrder={cancelOrder}
                  order={order}
                />
              ))}
            </Row>
          </Container>
        </div>
    </div>
           
    );
};

export default MyOrders;