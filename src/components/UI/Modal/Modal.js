import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';

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
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }

}

export default Modal;