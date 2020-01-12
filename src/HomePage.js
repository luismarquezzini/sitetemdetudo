import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import NavMenu from './NavMenu.js'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import logo from './logo.png'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


 
class HomePage extends Component {
 
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {
        bulmaCarousel.attach('#carousel-demo', {
            slidesToScroll: 1,
            slidesToShow: 1,
            navigation: true,
            autoplay: true
        });
        bulmaCarousel.attach('#carousel-demo1', {
			slidesToScroll: 1,
            slidesToShow: 4,
            navigation: true
		});
    }

 
    render ()  {
                return (
                        <div>
                            <Header/>
                            <NavMenu/>
                            <section className="hero is-medium has-carousel">
                                <div id="carousel-demo" className="hero-carousel">
                                    <div className="item-1">
                                        Conteudo 1
                                    </div>
                                    <div className="item-2">
                                        Conteudo 2
                                    </div>
                                    <div className="item-3">
                                        Conteudo 3
                                    </div>
                                </div>
                                <div className="hero-head"></div>
                                <div className="hero-body"></div>
                                <div className="hero-foot"></div>
                            </section>
                            <h2 className="has-text-temdetudo title">
                                Promoções do dia
                            </h2>
                            <section className="section">
                                <div className="container">
                                    <div id="carousel-demo1" className="carousel">
                                        <div className="item-1">
                                            Produto 1
                                        </div>
                                        <div className="item-2">
                                            Produto 2
                                        </div>
                                        <div className="item-3">
                                            Produto 3
                                        </div>
                                        <div className="item-4">
                                            Produto 4
                                        </div>
                                        <div className="item-5">
                                            Produto 5
                                        </div>
                                        <div className="item-6">
                                            Produto 6
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <h2 className="has-text-temdetudo title">
                                Produtos em geral
                            </h2>
                            <div className="card">
                                <div className="card-content">
                                    <div className="columns is-multiline is-mobile is-centered">
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                        <div className="column" style={{minWidth: "150px", maxWidth: "228px"}}>
                                            <img src={logo} width="247" height="80" alt="Logo da empresa"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
  
        )
        }
}
 
export default HomePage