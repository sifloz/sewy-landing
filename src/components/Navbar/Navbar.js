import React from 'react';

import * as assetsLibrary from '../../assets/assetsLibrary';
import NavItem from './NavItem/NavItem';

const Navbar = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={assetsLibrary.logo} alt="Logo Sewy" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {/* <NavItem link="/" exact>INICIO</NavItem>
                            <NavItem link="/negocio">OFRECE TUS SERVICIOS</NavItem> */}
                            <li className="nav-item active">
                                <a className="nav-link text-dark" href="/">
                                INICIO
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link special-title-business" href="/negocio">OFRECE TUS SERVICIOS</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
    </div>
);

export default Navbar;