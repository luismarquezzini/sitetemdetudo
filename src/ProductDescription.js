import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import NavMenu from './NavMenu.js'
import 'react-bulma-components/dist/react-bulma-components.min.css'


 
class ProductDescription extends Component {
 
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount () {
    }

 
    render ()  {
                return (
                        <div>
                            <Header/>
                            <NavMenu/>
                            <Footer />
                        </div>
  
        )
        }
}
 
export default ProductDescription