import React from 'react';
import products from "../products";
import Product from "../components/Product"
import { Row, Col } from "react-bootstrap";

const HomeScrean = () => {

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(p => (
                    <Col key={p._id} ms={12} md={6} ml={4} xl={3} >
                        <Product product={p} />
                    </Col>
                )
                )}
            </Row>
        </>
    )
}

export default HomeScrean
