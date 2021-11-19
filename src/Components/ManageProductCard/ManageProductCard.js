import { Card } from "react-bootstrap";
import React from "react";
import { Col } from "react-bootstrap";

const ManageProductCard = ({ product, deleteProduct }) => {
    const { title, img, price } = product;
    
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} height="270px" />
        <Card.Body>
          <Card.Title><span className="fw-bold">{title}</span></Card.Title>
                  <Card.Text>
                      <h5>Price: ${price}</h5>
                      <button onClick={() => deleteProduct(product._id)} className="btn-now px-4 py-1"><i className="fas fa-trash"></i> Delete Product</button>
                  </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ManageProductCard;
