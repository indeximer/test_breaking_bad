import React, { useState, useEffect } from 'react'


//api
import { getById as getCharacterById } from '../../api/charactersAPI'

//components
import { Container } from 'react-bootstrap'
import CharacterSheet from '../Common/CharacterSheet'
import Title from '../Common/Title'
import Loader from '../Common/Loader'
import Main from '../layout/main'

function CharacterDetail(props){
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const { match } = props

    useEffect(() =>{
        const abortController = new AbortController()
        const signal = abortController.signal

        getCharacterById(match.params.characterId, signal)
            .then(res => {
                setCharacter(res[0])
                setLoading(false)
            })
            .catch(error => console.log(error))

        return function cleanup(){
            abortController.abort()
        }
    }, [])

    return(
        <Main showBackLink={true}>
            <Container className="pt-5">
                {character &&
                    <Title 
                    titleText={character.name}
                    subTitleText={character.occupation}/>
                }                
                {loading 
                    ? <Loader />
                    : <CharacterSheet character={character} />
                }
                
            </Container>
        </Main>
    )
}

export default CharacterDetail