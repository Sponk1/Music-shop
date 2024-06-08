import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../../assets/Star.png';

const DevicePage = () => {
    return (
        <Container>
            <Col md = {4}>
            <Image width={150} height={150} src={instrument.img} />

            </Col>
            <Col md = {4}>
                <Row className = "d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                    className="{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }">
                    <Image style={{ background : 'no-repeat center center', width: '20px', height: '20px', backgroundSize: 'cover', fontSize:64 }} src={star} />   
                    </div>
                </Row>
            </Col>
            <Col md = {4}>
                <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style= {{width: 300, height: 300, fontSize:32, border:'5px solid lightgray'}}
                >
                    <h3>От: {device.price} руб.</h3>
                    <Button variant = {"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
        </Container>
    )
}