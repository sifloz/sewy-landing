import React, { Component } from 'react';

import Aux from '../Aux/Aux';
// import Typed from 'typed.js'; 
import * as assetsLibrary from '../../assets/assetsLibrary'; 
import Modal from '../../components/UI/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar';
import Benefits from '../../components/Benefits/Benefits';
import Instructions from '../../components/Instructions/Instructions';
import Survey from '../../components/Survey/Survey';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    state = {
        clientView: true,
        instructions: {
            client: null,
            business: null,
            }
        }
    

    componentDidMount() {
        if(!this.state.instructions.client && !this.state.instructions.business) {
            this.setState({
                ...this.state,
                instructions: {
                    client: {
                        first: {
                            title: 'Entra en la App',
                            highlight: 'Busca a personas que ofrecen servicios cerca de ti.',
                            description: ['Recomendaciones y puntuaciones.','Opiniones de clientes.','Servicios que ofrecen.','Disponibilidad.'],
                            image: assetsLibrary.mockupClient1,
                            mockupPosition: 'left',
                        },
                        second: {
                            title: 'Selecciona',
                            description: ['Quién quieres que realice el servicio.', 'Elige una fecha en la acudirás y el servicio que quieres realizar.'],
                            image: assetsLibrary.mockupClient2,
                            mockupPosition: 'right',
                        },
                        third: {
                            title: 'La App te avisará',
                            description: ['Una vez que acudas con la persona a realizar el servicio, la app te avisará cuando esté listo, además del monto a pagar.'],
                            image: assetsLibrary.mockupClient3,
                            mockupPosition: 'left',
                        },
                        fourth: {
                            title: 'Califica el servicio',
                            description: ['Una vez concluído el servicio, podrás calificarlo, ayudando así a que otras personas se interesen y encuentren a aquellos que hacen las cosas bien.'],
                            image: assetsLibrary.mockupClient4,
                            mockupPosition: 'right',
                        },
                    },
                    business: {
                        first: {
                            title: 'Anúnciate',
                            highlight: 'Selecciona el tipo de servicos que realizas.',
                            description: ['También establece cuando tus clientes pueden contactarte.'],
                            image: assetsLibrary.mockupBusiness1,
                            mockupPosition: 'left',
                        },
                        second: {
                            title: 'Gestión de servicios',
                            highlight: 'Administra los pedidos de los servicios que ofreces.',
                            description: ['Avísle a tus clientes cuando su servicio esté listo.'],
                            image: assetsLibrary.mockupBusiness2,
                            mockupPosition: 'right',
                        },
                        third: {
                            title: 'Recomendaciones',
                            description: ['Ve lo que a tus clientes les gusta de tu servicio, y lo que podrías mejorar para crecer.'],
                            image: assetsLibrary.mockupBusiness3,
                            mockupPosition: 'left',
                        },
                    }
                },
            });
        }
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
                <Navbar />
                <header className="py-5 mb-5">
                    <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6">
                        <h1 className="mb-2 special-title">¿Qué es Sewy?</h1>
                        <p className="lead mb-5">Sewy es una plataforma que conecta a sastres y costureras con sus clientes, así como proveedores de otros servicios.</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={assetsLibrary.mainHeaderImage} alt="¿Qué es Sewy?" height="380"/>
                        </div>
                    </div>
                    </div>
                </header>

                <div className="container">
                    <Benefits />
                    <Instructions 
                        instructions={this.state.clientView ? this.state.instructions.client : this.state.instructions.business} />
                    <Survey />
                </div>

                <Modal />
                <Footer />
            </Aux>
        );
    }
}

export default Layout;