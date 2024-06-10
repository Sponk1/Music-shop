import React, { useContext } from "react";
import { Context } from "../../../main";
import { Card, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "../../../pages/Themes/Styles.css"

const BrandBar = observer(() => {
    const { instrument } = useContext(Context);

    return (
        <Row className="d-flex brand-bar">
            {instrument.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer', margin: '5px 0' }}
                    key={brand.id}
                    onClick={() => instrument.setSelectedBrand(brand)}
                    border={brand.id === instrument.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;