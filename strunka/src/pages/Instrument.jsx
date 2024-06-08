import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Container, Col, Image } from "react-bootstrap";

function Instrument() {
    const instrument = { id: 1, name: "Yamaha C40", price: 50000, img: "868f8776-3aa8-4cdf-b7f8-8f180fa58759.jpg" }

    return(
        <div>
            <Header />
            <Container>
                <Col md={4}>
                    <Image width={300} height={300} src={instrument.img}/>
                </Col>
                <Col md={4}>
                
                </Col>
                <Col md={4}>
                
                </Col>
            </Container>
            <Footer />
        </div>
    );
}

export default Instrument;