// import "./OrderCard.css";
import React from "react";
import { Col } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../Hooks/UseAuth";

const OrderCard = ({ order, cancelOrder }) => {
  const { carName, name, image, rate, status } = order;

  const { isAdmin, user } = useAuth();

  const shippedOrder = (id) => {
    fetch(`https://mysterious-temple-52045.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Order Shipped Successfully!", "", "success");
        }
      });
  };

  const deleteOrder = (id) => {
    swal({
      title: "Are you sure for Delete order?",
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
              swal("Order Deleted!", "", "success");
            }
          });
      } else {
        swal("Order Delete Cancel.");
      }
    });
  };

  // console.log(isAdmin);

  return (
    <Col>
      <div className="">
        <div className="row">
          <div className="">
          <div className="services-container p-4 ">
            <img  className='w-100 service-img' height='400px' src={image} alt="" />
              <p className="fw-bold fs-5">{carName}</p>
              <p>Customar Name :- {name}</p>
              <p>Price :- {rate}</p>
              <div className="d-flex justify-content-between">
                <p>
                  Status: 
                  {status === "Shipped" ? (
                    <span className="text-success fw-bold">{status}</span>
                  ) : (
                    <span className="text-danger fw-bold">{status}</span>
                  )}
                </p>
                {!isAdmin && <button
                      onClick={() => cancelOrder(order._id)}
                      className="btn btn-danger btn-now px-4 py-2"
                    >
                      <i className="fas fa-window-close"></i> Cancel
                    </button>}
              </div>
            
            {isAdmin && (
              <div className='d-flex justify-content-center'>
                {status === "Pending" && isAdmin ? (
                  <button
                    onClick={() => shippedOrder(order._id)}
                    className="btn btn-success btn-now px-4 py-1 me-3"
                  >
                    <i className="fas fa-check-circle"></i> Shipped
                  </button>
                ) : (
                  ""
                )}
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="btn btn-danger btn-now px-4 py-1"
                >
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OrderCard;
