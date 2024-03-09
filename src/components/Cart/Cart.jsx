import SingleCartItem from "./SingleCartItem";
import { Row } from "react-bootstrap";

export default function Cart() {
  return (
    <section className="cart-wrap pt-5 px-3">
      <h3 className="mb-4">Your cart</h3>
      <Row>
        <SingleCartItem />
      </Row>
    </section>
  );
}
