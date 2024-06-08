import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from '../../../assets/Star.png'
import {Link, Navigate} from "react-router-dom"
import { INSTRUMENT_ROUTE } from "../../../utils/consts"; 


const DeviceItem = ({instrument}) => {
    // const navigate = useNavigate()
    // console.log(navigate)
    return(
        <Col 
            md={3} className={"mt-3"} 
            // onClick={() => navigate(INSTRUMENT_ROUTE + '/' + instrument.id)}    
        >
            <Card style={{width: 150, cursor: 'pointer'}} border="light">
            <Link to={INSTRUMENT_ROUTE + '/' + instrument.id}>
                <Image width={100} height={500}  src={instrument.img} />
                    <div 
                        className="text-black-50"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            marginTop: 3
                     }}
                    >
                        <div >Sonata...</div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>{instrument.rating}</div>
                            <Image style={{width: '20px', height: '20px'}} src={star}/>
                        </div>
                    </div>
                    <div style={{fontSize: 13}}>{instrument.name}</div>
                </Link>
            </Card>   
        </Col>
    );
}

export default DeviceItem;