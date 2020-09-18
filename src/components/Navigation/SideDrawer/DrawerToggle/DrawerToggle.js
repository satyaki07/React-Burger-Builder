import React from 'react';

import classes from './drawerToggle.css';

const DrawerToggle = ( props ) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;