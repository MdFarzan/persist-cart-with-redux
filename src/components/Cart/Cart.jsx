import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";
import { Row } from "react-bootstrap";
import TotalAmount from "./TotalAmount";
import "./Cart.style.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <section className="cart-wrap pt-5 px-3">
      <h3 className="mb-4">Your cart</h3>
      <Row className="cart-item-wrap">
        {cart && cart.length > 0 ? (
          cart.map((item, index) => {
            console.log(index, item);
            return <SingleCartItem key={`cart-item-${index}`} item={item} />;
          })
        ) : (
          <div className="empty-cart-wrap">
            <img src="public/empty-cart.png" />
          </div>
        )}

        {cart && cart.length > 0 && <TotalAmount />}
      </Row>
    </section>
  );
}
