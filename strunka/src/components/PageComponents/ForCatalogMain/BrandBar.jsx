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
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="d-grid p-3 justify-content-center col-1"
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