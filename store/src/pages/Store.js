import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import React from 'react';
function Store() {
    const pageStyle = {
         // Set the background color to blue
        // Add other styles as needed
    };
    return (
        <>
        <div style={pageStyle}>
            <h1 style={{ fontSize: '50px', color: 'Black', textAlign: 'center', padding: '30px', fontFamily: 'Playfair Display' }}>Welcome to the ArtifyAI!</h1>
            <h1 style={{ fontSize: '30px', color: 'blue', textAlign: 'center', padding: '20px', fontFamily: 'Playfair Display' }}>A Onestop Shop for AI artwork</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}  

export default Store;