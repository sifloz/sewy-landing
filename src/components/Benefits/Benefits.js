import React from 'react';

import * as assetsLibrary from '../../assets/assetsLibrary';

const benefits = (props) => (
    <div className="row">
        <div className="col-md-4 mb-5">
            <div className="h-100">
                <div className="text-center">
                    <img src={assetsLibrary.iconLike} alt="like" width="100" height="100"/>
                    <h5 className="card-title mt-3">Confiabilidad</h5>
                    <p className="card-text">Las recomendaciones te permitirán elegir la mejor opción para ti.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-5">
            <div className="h-100">
                <div className="text-center">
                    <img src={assetsLibrary.iconSmartphone} alt="like" width="100" height="100"/>
                    <h5 className="card-title mt-3">No más vueltas</h5>
                    <p className="card-text">Ya no tendrás que ir a preguntar si tu servicio está listo. La app te lo avisará.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-5">
            <div className="h-100">
                <div className="text-center">
                    <img src={assetsLibrary.iconClipboard} alt="like" width="100" height="100"/>
                    <h5 className="card-title mt-3">Eficiencia</h5>
                    <p className="card-text">Conocerás el tipo de servicios que se ofrecen y su disponibilidad.</p>
                </div>
            </div>
        </div>
    </div>
);

export default benefits;