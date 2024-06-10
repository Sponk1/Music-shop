import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import TypeBar from '../components/PageComponents/ForCatalogMain/TypeBar';
import BrandBar from '../components/PageComponents/ForCatalogMain/BrandBar';
import { Context } from '../../src/main';

const CatalogMain = observer(() => {
    const { instrument } = useContext(Context);

    const catalogItems = [
        { id: 1, name: "Yamaha C40", price: 50000, img: "868f8776-3aa8-4cdf-b7f8-8f180fa58759.jpg", typeId: 1, brandId: 1 },
        { id: 2, name: "Solar V2.6C", price: 119990, img: "38615c70-8a8e-4de9-b3c3-4dce9efc465e.jpg", typeId: 2, brandId: 2 },
        // надо подгружать из базы данных
    ];

    console.log('Instrument Context:', instrument);

    // фильтрация
    const filteredItems = catalogItems.filter(item => 
        (!instrument.selectedType || item.typeId === instrument.selectedType.id) && 
        (!instrument.selectedBrand || item.brandId === instrument.selectedBrand.id)
    );

    // отфильтровали
    console.log('Filtered Items:', filteredItems);

    return (
        <Container>
            <Row>
                <Col xs={12} md={2}>
                    <TypeBar />
                </Col>
                <Col xs={12} md={8}>
                    <Row>
                        {filteredItems.map(product => (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                        {filteredItems.length === 0 && (
                            <div className="w-100 text-center mt-4">
                                Нет товаров, соответствующих выбранным критериям.
                            </div>
                        )}
                    </Row>
                </Col>
                <Col xs={12} md={2}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    );
});

export default CatalogMain;