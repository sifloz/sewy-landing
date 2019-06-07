import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import * as assetsLibrary from '../../../assets/assetsLibrary';

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <Aux>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body mt-3 text-center">
                            <div className="text-center">
                                <img src={assetsLibrary.iconSmiley} alt="Happy face" width="100" height="100" />
                                <h4 className="mt-2">¡Gracias por tu opinión!</h4>
                            </div>
                            Si estás interesado en Sewy y lo que podrá ofrecer. 
                            Por favor, escribe tu correo electrónico y te avisamos cuando puedas comenzar a utilizarlo.
                            Prometemos no enviarte Spam.
                            <div className="input-group mb-3">
                                <input type="email" className="form-control is-valid" placeholder="micorreo@email.com" aria-label="micorreo@ejemplo.com" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Enviar</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }

}

export default Modal;