import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
        <nav className="navbar is-temdetudo" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={`/`} className="navbar-item">
                <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                </Link>
                <a role="button" className="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div className="field NavbarSearch">
                <div className="control is-expanded has-icons-right">
                    <input 
                        className="input is-large" 
                        type="text" 
                        placeholder="Tem de tudo, é só procurar. ;)" 
                        id="query"
                        name="query"
                    />
                    <span class="icon is-small is-right">
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                </div>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-text-white">
                        <FontAwesomeIcon icon={faPhoneAlt} size="2x" style={{marginRight: "0.2em"}}/>(53)3311-0918
                    </div>
                    <div className="navbar-item has-text-white">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{marginRight: "0.2em"}}/> (53)99138-0231
                    </div>
                </div>
            </div>
        </nav>
)
 
export default Header