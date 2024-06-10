import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Col, Image, Card, Button } from "react-bootstrap";
import { useCart } from "../pages/CartContext";

function Instrument() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const instrumentData = {
        1: { id: 1, name: "Yamaha C40", price: 50000, img: "868f8776-3aa8-4cdf-b7f8-8f180fa58759.jpg" },
        2: { id: 2, name: "Solar V2.6C", price: 119990, img: "38615c70-8a8e-4de9-b3c3-4dce9efc465e.jpg" }
    };

    const instrument = instrumentData[id];

    if (!instrument) {
        return <div>Товар не найден</div>;
    }

    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={instrument.img} alt={instrument.name} />
                    </Col>
                    <Col md={4}>
                        <h2>{instrument.name}</h2>
                        <p>Цена: {instrument.price} руб.</p>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 24, border: '5px solid lightgray' }}
                        >
                            <h3>От: {instrument.price} руб.</h3>
                            <Button variant={"outline-dark"} onClick={() => addToCart(instrument)}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Instrument;
