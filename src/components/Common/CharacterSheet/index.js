import React from 'react'

//style
import './_charactersheet.scss'

//helpers
import { formatDate, translateStatus } from '../../../helpers/ultis'

//components
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

function CharacterSheet({ character }){
    return(
        <Row className="character-sheet mb-5">
            <Col xs={12} lg={4} className="text-center">
                <Image className="mw-100" src={character.img} alt={character.name} />
            </Col>
            <Col xs={12} lg={8}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>Nome: </strong>
                    <span>{character.name}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Apelido: </strong>
                    <span>{character.nickname}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Ocupação: </strong>
                    <span>{character.occupation}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Status: </strong>
                    <span>{translateStatus(character.status)}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Data de nascimento: </strong>
                    <span>{formatDate(character.birthday)}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Temporadas: </strong>
                    <span>{character.appearance && character.appearance.join(', ')}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Interpretado por: </strong>
                    <span>{character.portrayed}</span>
                </ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
    )
}

export default CharacterSheet