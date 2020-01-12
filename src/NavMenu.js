import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCouch, faPlug, faMobileAlt, faTv, faLaptop, faBiking, faCoffee, faBaby } from '@fortawesome/free-solid-svg-icons'

const NavMenu = () => (
    <nav className="navbar has-background-light is-hidden-mobile">
        <div className="navbar-menu">
            <div className="navbar-item has-text-temdetudo">
                <FontAwesomeIcon icon={faBars} size="2x" style={{marginRight: "0.2em"}}/> Menu
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faCouch} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Móveis e Decorações</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faPlug} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Eletrodomésticos</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faMobileAlt} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Smartphones</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faTv} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Tv Áudio e Vídeo</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faLaptop} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Informática</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faBiking} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Esportes e Lazer</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faCoffee} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Utilidades Domésticas</p>
                </div>
            </div>
            <div className="navbar-item has-text-temdetudo">
                <div>
                <p className="heading has-text-centered is-marginless">
                    <FontAwesomeIcon icon={faBaby} size="2x" style={{marginRight: "0.2em"}}/>
                </p> 
                <p className="is-3">Brinquedos e Artigos Infantis</p>
                </div>
            </div>
        </div>
    </nav>
)
 
export default NavMenu