import React from "react";
import { useCart } from "../pages/CartContext";
import { Container, ListGroup, Button } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

const Basket = () => {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    return (
        <div>
            <Container className="mt-5">
                <h2>Корзина</h2>
                {cart.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <>
                        <ListGroup>
                            {cart.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{item.name} (x{item.quantity})</span>
                                        <span>{item.price * item.quantity} руб.</span>
                                        <Button variant="outline-danger" onClick={() => removeFromCart(item)}>Удалить</Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <div className="mt-4">
                            <h4>Общая сумма: {getTotalPrice()} руб.</h4>
                        </div>
                    </>
                )}
            </Container>
            <Footer />
        </div>
    );
}

export default Basket;