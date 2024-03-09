import { Button, Card, Col, Row } from "react-bootstrap";
import { products } from "../../data/products";

import SingleProduct from "./SingleProduct";

export default function ProductList() {
  return (
    <Row>
      {products.map((item, index) => {
        return <SingleProduct key={`product-list-${index}`} item={item} />;
      })}
    </Row>
  );
}
