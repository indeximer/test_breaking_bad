import React from 'react'
import { Link } from 'react-router-dom'

//style
import './_listcards.scss'

//components
import { Row, Col, Card, Button } from 'react-bootstrap'

function ListCards({ characters }){
    return(
        <Row className="mb-5 justify-content-center">
            {characters.map(character => (
                <Col xs={12} sm={6} lg={3} className="mb-4" key={character.char_id}>
                    <Link to={`/character/${character.char_id}`}>
                        <Card className="text-center">
                            <Card.Img variant="top" src={character.img} />
                            <Card.Body>
                                <Card.Title className="mb-0">{character.name}</Card.Title>
                            </Card.Body>
                            <Button variant="primary">Conheça <i className="fa fa-angle-right"></i></Button>                            
                        </Card>
                    </Link>
                </Col>                
            ))}
        </Row>
    )
}

export default ListCards