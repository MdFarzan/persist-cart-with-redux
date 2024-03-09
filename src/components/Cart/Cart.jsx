import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";
import { Row } from "react-bootstrap";
import TotalAmount from "./TotalAmount";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <section className="cart-wrap pt-5 px-3">
      <h3 className="mb-4">Your cart</h3>
      <Row>
        {cart && cart.length > 0 ? (
          cart.map((item, index) => {
            console.log(index, item);
            return <SingleCartItem key={`cart-item-${index}`} item={item} />;
          })
        ) : (
          <p>No items in cart</p>
        )}

        {cart && cart.length > 0 && <TotalAmount />}
      </Row>
    </section>
  );
}
