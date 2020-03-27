import React, { useState, useEffect } from 'react'

//api
import { getAll as getCharacters } from '../../api/charactersAPI'

//components
import { Container } from 'react-bootstrap'
import ListCards from '../Common/ListCards'
import Title from '../Common/Title'
import Loader from '../Common/Loader'
import Main from '../layout/main'

function CharacterList(props){
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const abortController = new AbortController()
        const signal = abortController.signal

        getCharacters(signal)
            .then(res => {
                setCharacters(res)
                setLoading(false)
            })

        return function cleanup(){
            abortController.abort()
        }
    }, [])

    return(
        <Main>
            <Container className="pt-5">
                <Title titleText="Conheça os personagens de Breaking Bad"/>
                {loading &&
                    <Loader />
                }
                <ListCards characters={characters} />
            </Container>
        </Main>
    )
}

export default CharacterList