import React from 'react';
import {Link} from "react-router-dom";
import Navbar from './NavbarLee';
import styles from './Class.module.css';


const Ryul = () => {
    return(
        <div class="class_main">
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.navbar_logo} alt="navbar_logo" src="img/headerimg.png" />      
                </Link>
                <Link to="/lee">
                    <img className={styles.classname} alt="lee" src="img/lee.png" />
                </Link>
                <Navbar /> 
            </div>
            <img className={styles.nameinphoto} alt="class_photo" src="img/lee.png" />
            <img className={styles.textinphoto} alt="class_photo" src="img/text.png" />
            <img className={styles.mainClassPhoto} alt="class_photo" src="img/classopacity05.png" />


        </div>
    );
}

export default Ryul;