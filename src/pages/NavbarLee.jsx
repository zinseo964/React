import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class={styles.navbarPadding}>
                        <ul class="navbar-nav">
                            <li class={styles.navItem}>
                                <Link to="/lee/theme1" class="nav-link" aria-current="page">Vision Trip <br/>: Worship</Link>
                            </li>
                            <li class={styles.navItem}>
                                <Link to="/lee/theme2" class="nav-link" aria-current="page">Vision Trip <br/>: Mission</Link>
                            </li>
                            <li class={styles.navItem}>
                                <Link to="/lee/theme3" class="nav-link" aria-current="page">Vision Trip <br/>: Play</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;