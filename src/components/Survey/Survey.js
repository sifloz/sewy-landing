import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const survey = (props) => {
    return (
        <Aux>
            <div className="row mt-5 pt-5 justify-content-center">
                <div className="col-md-9 text-center">
                    <h2 className="special-title">¿Qué te parece?</h2>
                    <p>{/* <p style="font-weight: 500; font-size: 18px;"> */}
                    Estamos acelerando el proceso para llevar Sewy hasta ti.
                    Por favor, ayudános contestando la siguiente encuesta.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12 mt-3 mb-5 mx-auto">
                    <div className="text-center">
                        <div className="card-body align-items-center justify-content-center">
                            <label htmlFor="exampleFormControlTextarea1">En una escala del 1 al 10¿Qué tan probable es que utilices y recomiendes Sewy?</label>
                            <div className="container starrating risingstar d-flex justify-content-center flex-row-reverse">
                                <input type="radio" id="star10" name="rating" value="10" /><label htmlFor="star10" title="10 star">10</label>
                                <input type="radio" id="star9" name="rating" value="9" /><label htmlFor="star9" title="9 star">9</label>
                                <input type="radio" id="star8" name="rating" value="8" /><label htmlFor="star8" title="8 star">8</label>
                                <input type="radio" id="star7" name="rating" value="7" /><label htmlFor="star7" title="7 star">7</label>
                                <input type="radio" id="star6" name="rating" value="6" /><label htmlFor="star6" title="6 star">6</label>
                                <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="5 star">5</label>
                                <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="4 star">4</label>
                                <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="3 star">3</label>
                                <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="2 star">2</label>
                                <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="1 star">1</label>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlTextarea1"><b className="lead">¡Danos tu opinión!</b>Coméntanos todas las dudas, preguntas y sugerencias sobre Sewy <small>(tu respuesta es anónima)</small></label>
                                <textarea className="form-control form-rounded" id="exampleFormControlTextarea1" rows="5" placeholder="Escribe aquí tus comentarios..."></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#exampleModal">Enviar mi opinión</button>
                        </div>
                    </div>	
                </div>
            </div>
        </Aux>
    );
};

export default survey;