import { Row, Col, Image } from "react-bootstrap";
import './RecipeCardDesign.css';

function Encabezado({}) {
    return (
        <Row>
            <Col md={2}>
                <Image  className="img-thumbnail"src="https://static.vecteezy.com/system/resources/previews/014/971/638/non_2x/food-logo-design-template-restaurant-free-png.png" 
                rounded 
                sizes="10px"
                />
            </Col>
            <Col md={{ span: 4, offset: -3 }}>
                <h2 className="hTitulo">RECETAS</h2>
            </Col>
        </Row>
    );
}

export default Encabezado;