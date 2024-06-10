import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../pages/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <Card style={{ margin: '10px', textAlign: 'center' }}>
            <Card.Img variant="top" src={product.img} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Цена: {product.price} руб.</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Добавить в корзину</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;