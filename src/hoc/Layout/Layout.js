import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import Typed from 'typed.js'; 
import * as assetsLibrary from '../../assets/assetsLibrary'; 
import Modal from '../../components/UI/Modal/Modal';

class Layout extends Component {
    state = {
        clientView: true,
    }

    componentDidMount() {
    //     // If you want to pass more options as props, simply add
    // // your desired props to this destructuring assignment.
    // const { strings } = this.props;
    // // You can pass other options here, such as typing speed, back speed, etc.
    // const options = {
    // 	strings: strings,
    //   typeSpeed: 50,
    //   backSpeed: 50
    // };
    // // this.el refers to the <span> in the render() method
    // this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
    //   this.typed.destroy();
    }
    
    render() {
        return (
            // <Aux>
            //     Hola
            // </Aux>

            <Aux>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={assetsLibrary.logo}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-dark" href="#">
                            INICIO
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link special-title-business" href="#">OFRECE TUS SERVICIOS</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <header className="py-5 mb-5">
                    <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6">
                        <h1 className="mb-2 special-title">¿Qué es Sewy?</h1>
                        <p className="lead mb-5">Sewy es una plataforma que conecta a sastres y costureras con sus clientes, así como proveedores de otros servicios.</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={assetsLibrary.mainHeaderImage} height="380"/>
                        </div>
                    </div>
                    </div>
                </header>

                <div className="container">

                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="h-100">
                                <div className="text-center">
                                    <img src={assetsLibrary.iconLike} alt="like" width="100" height="100"/>
                                    <h5 className="card-title mt-3">Confiabilidad</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <p className="card-text">Las recomendaciones te permitirán elegir la mejor opción para ti.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="h-100">
                                <div className="text-center">
                                    <img src={assetsLibrary.iconSmartphone} alt="like" width="100" height="100"/>
                                    <h5 className="card-title mt-3">No más vueltas</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <p className="card-text">Ya no tendrás que ir a preguntar si tu servicio está listo. La app te lo avisará.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="h-100">
                                <div className="text-center">
                                    <img src={assetsLibrary.iconClipboard} alt="like" width="100" height="100"/>
                                    <h5 className="card-title mt-3">Eficiencia</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                                    <p className="card-text">Conocerás el tipo de servicios que se ofrecen y su disponibilidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-5 text-center mt-5">
                            <img src={assetsLibrary.mockupClient1} height="450"/>
                        </div>
                        <div className="col-md-7 mt-3">
                            <h2>Entra en la App</h2>
                            <h5>Busca a personas que ofrecen servicios cerca de ti.</h5>
                            <p>
                                Recomendaciones y puntuaciones.
                                Opiniones de clientes.
                                Servicios que ofrecen.
                                Disponibilidad.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                    <div className="col-md-7 text-right mt-5">
                        <h2>Selecciona</h2>
                        <p>
                        Quién quieres que realice el servicio.
                        Elige una fecha en la acudirás y el servicio que quieres realizar.
                        </p>
                    </div>
                    <div className="col-md-5 text-center mt-3">
                        <img src={assetsLibrary.mockupClient2} height="450"/>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-md-5 text-center mt-5">
                        <img src={assetsLibrary.mockupClient3} height="450"/>
                    </div>
                    <div className="col-md-6 mt-3">
                        <h2>La App te avisará</h2>
                        <p>
                        Una vez que acudas con la persona a realizar el servicio, 
                        la app te avisará cuando esté listo, además del monto a pagar.
                        </p>
                    </div>
                    </div>
                    <div className="row align-items-center mb-5 pb-5">
                    <div className="col-md-7 text-right mt-5">
                        <h2>Califica el servicio</h2>
                        <p>
                        Una vez concluído el servicio, podrás calificarlo, 
                        ayudando así a que otras personas se interesen y encuentren 
                        a aquellos que hacen las cosas bien.</p>
                    </div>
                    <div className="col-md-5 text-center mt-3">
                        <img src={assetsLibrary.mockupClient4} height="450"/>
                        </div>
                    </div>

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
                            <label for="exampleFormControlTextarea1">En una escala del 1 al 10¿Qué tan probable es que utilices y recomiendes Sewy?</label>
                            <div className="container starrating risingstar d-flex justify-content-center flex-row-reverse">
                                <input type="radio" id="star10" name="rating" value="10" /><label for="star10" title="10 star">10</label>
                                <input type="radio" id="star9" name="rating" value="9" /><label for="star9" title="9 star">9</label>
                                <input type="radio" id="star8" name="rating" value="8" /><label for="star8" title="8 star">8</label>
                                <input type="radio" id="star7" name="rating" value="7" /><label for="star7" title="7 star">7</label>
                                <input type="radio" id="star6" name="rating" value="6" /><label for="star6" title="6 star">6</label>
                                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star">5</label>
                                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star">4</label>
                                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star">3</label>
                                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star">2</label>
                                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star">1</label>
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleFormControlTextarea1"><b class="lead">¡Danos tu opinión!</b>Coméntanos todas las dudas, preguntas y sugerencias sobre Sewy <small>(tu respuesta es anónima)</small></label>
                                <textarea className="form-control form-rounded" id="exampleFormControlTextarea1" rows="5" placeholder="Escribe aquí tus comentarios..."></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#exampleModal">Enviar mi opinión</button>
                        </div>
                        </div>	
                    </div>
                    </div>
    

                </div>

                <Modal />
                {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        
        <div className="modal-body mt-3 text-center">
          <div className="text-center">
            <img src={assetsLibrary.iconSmiley} width="100" height="100" />
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
  </div> */}

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
      <p className="m-0 text-center text-white">Copyright &copy; <a class="text-white" href="https://fb.com/SewyMX">Sewy</a> 2019</p>
    </div>
  </footer>       

            </Aux>
        );
    }
}

export default Layout;