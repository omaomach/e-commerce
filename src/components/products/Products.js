import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products({ category }) {
  return (
    <li className="categories" style={{ listStyleType: "none"}}>
      <Card style={{ width: "18rem", display: "flex" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>
            <h2>{category}</h2>
          </Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary">Product Details</Button>
        </Card.Body>
      </Card>
    </li>
  );
}

export default Products;
