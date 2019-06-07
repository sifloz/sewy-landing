import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const footer = (props) => (
    <Aux>
        <div className="row">
            <div className="container mb-5">
                <div className="col-md-12 align-items-center mx-auto text-center">
                    <h4>¿Quieres ofrecer tus servicios en Sewy?</h4> 
                    <p>
                    <a href="/negocio">Da click <u>aquí</u></a>
                        No importa si eres <strong><span className="typed"></span></strong>
                    </p>
                </div>
            </div>
        </div>

         <footer className="py-5 bg-dark">  
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; <a className="text-white" href="https://fb.com/SewyMX">Sewy</a> 2019</p>
            </div>
        </footer>   
    </Aux>
);

export default footer;