import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import styles from './Layout.css'

const Layout = (props) => (
    <Auxiliary>
        <div> Toolbar, SideDrawer, Backdrop </div>
        <main className={styles.content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;
