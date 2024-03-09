import { Button, Form, InputGroup } from "react-bootstrap";

export default function CartQtyInput() {
  return (
    <InputGroup>
      <Button variant="outline-secondary">-</Button>
      <Form.Control placeholder="Quantity" value="1" type="number" />
      <Button variant="outline-secondary">+</Button>
    </InputGroup>
  );
}
