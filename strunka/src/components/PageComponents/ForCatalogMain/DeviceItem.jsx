import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {INSTRUMENT_ROUTE} from '../../../utils/consts'; 
import star from '../../../assets/Star.png';

const DeviceItem = ({ instrument }) => {
    return (
        <Col md={3} className="mt-3">
            <Card style={{ width: 150, cursor: 'pointer' }} border="light">
                <Link to={INSTRUMENT_ROUTE + '/' + instrument.id}> 
                    <Image width={150} height={150} src={instrument.img} />
                    <div 
                        className="text-black-50"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 3 }}
                    >
                        <div>{instrument.name}</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>{instrument.rating || '0'}</div>
                            <Image style={{ width: '20px', height: '20px' }} src={star} />
                        </div>
                    </div>
                    <div style={{ fontSize: 13 }}>{instrument.name}</div>
                </Link>
            </Card>
        </Col>
    );
}

export default DeviceItem;
