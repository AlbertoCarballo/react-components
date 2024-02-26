import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import recipes from '../recipe.js'; // Asegúrate de tener la ruta correcta al archivo de recetas
import './RecipeCardDesign.css'; // Asegúrate de tener la ruta correcta al archivo de estilos


function RecipeCards() {
    return (
        <Container>
            <Row className='fila'>
                {recipes.map((recipe, index) => (
                    // console.log(recipe, index)
                    <Col key={index} lg={3}>
                        <Card style={{ width: '100%', height: '95%' }}>
                            <div className="card-image-wrapper">
                                <Card.Img variant="top" src={recipe.imagen} className="img-product" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "30px" }}>
                                    <strong>
                                        {recipe.nombre}
                                    </strong>
                                </Card.Title>
                                <Card.Text style={{ fontSize: '20px' }}>
                                    {recipe.descripcion}
                                </Card.Text>
                                <div className="button-container">
                                    <Button variant="primary">Ver receta</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}



export default RecipeCards;
