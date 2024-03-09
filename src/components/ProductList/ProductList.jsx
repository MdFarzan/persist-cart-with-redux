import { Button, Card, Col, Row } from "react-bootstrap";
import { products } from "../../data/products";

import SingleProduct from "./SingleProduct";

export default function ProductList() {
  return (
    <section className="product-list-wrap pt-5 px-3">
      <h3 className="mb-4">Latest products</h3>
      <Row>
        {products.map((item, index) => {
          return <SingleProduct key={`product-list-${index}`} item={item} />;
        })}
      </Row>
    </section>
  );
}
