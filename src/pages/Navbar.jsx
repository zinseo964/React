import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    const classname = useParams();
    console.log(classname);
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
                            <Link to="/ryul/theme1" class="nav-link active" aria-current="page">Vision Trip <br/>: Worship</Link>
                        </li>
                        <li class={styles.navItem}>
                            <Link to="/" class="nav-link">Vision Trip <br/>: Mission</Link>
                        </li>
                        <li class={styles.navItem}>
                            <Link class="nav-link">Vision Trip <br/>: Play</Link>
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