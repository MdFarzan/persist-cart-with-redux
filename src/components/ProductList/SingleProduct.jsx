import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleProduct.style.css";
import { useDispatch, useSelector } from "react-redux";

export default function SingleProduct(props) {
  const dispatch = useDispatch();
  const { item } = { ...props };

  const cart = useSelector((state) => state.cart);
  const [addToCartStatus, setAddToCartStatus] = useState(false);
  let itemExists = cart.findIndex((cartItem) => cartItem.id == item.id);
  itemExists = itemExists === -1 ? false : true;

  console.log(item.id, itemExists);

  const addToCart = (id, img, name, price, setAddToCartStatus) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        img: img,
        name: name,
        price: price,
        qty: 1,
        setAddToCartStatus: setAddToCartStatus,
      },
    });

    setAddToCartStatus(true);
  };

  const removeFromCart = (item_id) => {
    setAddToCartStatus(false);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id: item_id,
      },
    });
  };

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
        {itemExists ? (
          <Button
            className="remove-from-cart-btn"
            onClick={() => {
              removeFromCart(item.id);
            }}
            variant="danger"
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            className="add-to-cart-btn"
            onClick={() => {
              addToCart(
                item.id,
                item.img,
                item.name,
                item.price,
                setAddToCartStatus
              );
            }}
            variant="primary"
          >
            Add to Cart
          </Button>
        )}
      </Card>
    </Col>
  );
}
