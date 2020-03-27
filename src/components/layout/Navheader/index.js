import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/img/logo.png'

//style
import './_navheader.scss'

//components
import { Navbar } from 'react-bootstrap'

function Navheader({ showBackLink }){
    return(
        <Navbar className="justify-content-between" expand="lg" variant="dark">
            <Navbar.Brand href="/"><img src={Logo} alt="logo-breaking-bad" /></Navbar.Brand>
            {showBackLink &&
                <Navbar.Text>
                    <Link to="/">
                        <i className="fa fa-arrow-left cart"></i> Voltar
                    </Link>
                </Navbar.Text>
            }
        </Navbar>
    )
}

export default Navheader