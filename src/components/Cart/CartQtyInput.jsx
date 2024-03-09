import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./CartQtyInput.style.css";

export default function CartQtyInput({ itemId, itemQty }) {
  const dispatch = useDispatch();
  return (
    <InputGroup>
      <Button
        variant="outline-secondary"
        onClick={() => {
          dispatch({
            type: "DEC_QTY",
            payload: {
              id: itemId,
              qty: itemQty,
            },
          });
        }}
      >
        -
      </Button>
      <Form.Control placeholder="Quantity" value={itemQty} type="number" />
      <Button
        variant="outline-secondary"
        onClick={() => {
          dispatch({
            type: "INC_QTY",
            payload: {
              id: itemId,
              qty: itemQty,
            },
          });
        }}
      >
        +
      </Button>
    </InputGroup>
  );
}
