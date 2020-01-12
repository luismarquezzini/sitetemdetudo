import React from 'react'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="footer is-temdetudo">
        <div class="content has-text-centered has-text-white">
            <p>
                <img src={logo} width="247" height="80" alt="Logo da empresa"/>
            </p>
            <p>
                Rua General Osório 1327 (pátio) Bagé | RS
            </p>
            <p>
            <span className="has-text-weight-bold">© Tem de tudo</span> by N.C. Sistemas
            </p>
            <p>
                2020
            </p>
            <p>
                <a className="has-text-white" href="https://api.whatsapp.com/send?phone=5553991380231" target="_blank">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{marginRight: "0.2em"}}/>
                </a>
                <a className="has-text-white" href="https://pt-br.facebook.com/temdetudobage.brick/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight: "0.2em"}}/>
                </a>
                <a className="has-text-white" href="https://www.instagram.com/temdetudobage/?hl=pt" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight: "0.2em"}}/>
                </a>
            </p>
        </div>
    </footer>
)
 
export default Footer