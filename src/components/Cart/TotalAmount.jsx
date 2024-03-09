import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TotalAmount() {
  const cartItems = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce(
    (a, b) => a + parseFloat(b.price) * parseInt(b.qty),
    0
  );
  return (
    <Row>
      <Col xs={7}>
        <h3>Total</h3>
      </Col>
      <Col xs={5}>
        <h3>₹ {totalAmount.toFixed(2)}</h3>
      </Col>
    </Row>
  );
}
