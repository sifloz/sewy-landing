import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const footer = (props) => (
    <Aux>
         <footer className="py-5 bg-dark">  
            <div className="container text-center text-white">
                <p className="m-0">Copyright &copy; <a className="text-white" href="https://fb.com/SewyMX" target="_blank">Sewy</a> 2019</p>
                <a href="https://fb.com/SewyMX" target="_blank">
                    <i className="text-white fa fa-facebook-official"></i>
                </a>
            </div>
        </footer>   
    </Aux>
);

export default footer;