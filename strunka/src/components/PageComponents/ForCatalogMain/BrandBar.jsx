import React, { useContext } from "react";
import { Context } from "../../../main";
import { Card, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const BrandBar = observer( () => {
    const { instrument } = useContext(Context);

    return (
        <Row className="d-flex">
            {instrument.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', display: 'flex', padding: '3', justifyContent: 'center'}}
                    key={brand.id}
                    className="col-1"
                    onClick={() => instrument.setSelectedBrand(brand)}
                    border={brand.id === instrument.selectedBrand.id ? 'danger' : 'loght'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;