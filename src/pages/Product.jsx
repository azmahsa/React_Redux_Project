import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import { productDetailAction } from "../action/productAction";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;

  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [dispatch]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price} $</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button className="btn-block" type="button">
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
