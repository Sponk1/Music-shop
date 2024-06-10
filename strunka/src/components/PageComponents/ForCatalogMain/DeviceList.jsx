import React, { useContext }  from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { instrument } = useContext(Context);

    return (
        <Row className="d-flex" style={{display: 'flex'}}>
            {instrument.instruments.filter(item => (!instrument.selectedType || item.typeId === instrument.selectedType.id) && (!instrument.selectedBrand || item.brandId === instrument.selectedBrand.id))
                .map(instrument => <DeviceItem key={instrument.id} instrument={instrument} />)
            }
        </Row>
    );
});

export default DeviceList;
