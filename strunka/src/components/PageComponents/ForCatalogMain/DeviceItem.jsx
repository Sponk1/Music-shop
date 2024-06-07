import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../../assets/Star.png'

const DeviceItem = ({instrument}) => {
    return(
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border="light">
                <Image width={150} height={500} src={instrument.img} />
                <div className="d-flex  align-items-center justify-content-beween">
                    <div>Sonata...</div>
                    <div className="d-flex">
                        <div>{instrument.rating}</div>
                        <Image src={star}/>
                    </div>
                </div>
            </Card>   
        </Col>
    );
}

export default DeviceItem;