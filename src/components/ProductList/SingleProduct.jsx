import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleProduct.style.css";
import { useDispatch } from "react-redux";

export default function SingleProduct(props) {
  const dispatch = useDispatch();
  const { item } = { ...props };

  return (
    <Col lg={4}>
      <Card className="mb-4">
        <div className="product-img-wrap">
          <Card.Img className="product-img" variant="top" src={item.img} />
        </div>
        <Card.Body className="row">
          <Col xs={8}>
            <Card.Title className="product-title">{item.name}</Card.Title>
          </Col>
          <Col xs={4} className="d-flex align-items-center">
            <span className="rupee-icon">₹</span>
            <span className="item-price">{item.price}</span>
          </Col>
        </Card.Body>
        <Button
          className="add-to-cart-btn"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: {
                id: item.id,
                img: item.img,
                name: item.name,
                price: item.price,
                qty: 1,
              },
            })
          }
          variant="primary"
        >
          Add to Cart
        </Button>
      </Card>
    </Col>
  );
}
