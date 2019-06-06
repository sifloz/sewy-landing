import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="navbar-nav ml-auto">
        <NavigationItem link="/" customClassName="" exact>INICIO</NavigationItem>
        <NavigationItem link="/negocio" customClassName="special-title-business" exact>INICIO</NavigationItem>
    </ul>
);

export default navigationItems;