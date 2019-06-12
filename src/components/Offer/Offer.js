import React, {Component} from 'react';
import Typed from 'typed.js';

class Offer extends Component {

    componentDidMount() {
        const  strings  = ["sastre", "mecánico", "florista", "reparador", "vendedor"]

        const options = {
            strings: strings,
            stringsElement: null,
            typeSpeed: 50,
            startDelay: 1200,
            backSpeed: 50,
            backDelay: 500,
            loop: true,
            showCursor: false,
            cursorChar: '|',
            attr: null,
            contentType: 'html',
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        this.typed.destroy();
    }
    
    render() {
        return (
            <div className="row">
                <div className="container mb-5">
                    <div className="col-md-12 align-items-center mx-auto text-center">
                        <h4>¿Quieres ofrecer tus servicios en Sewy?</h4> 
                        <p style={{fontWeight: '500', fontSize: '18px'}}>
                            <a href="/negocio">Da click <u>aquí</u></a><br />
                            No importa si eres <strong><span className="typed" ref={(el) => { this.el = el; }}></span></strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Offer;