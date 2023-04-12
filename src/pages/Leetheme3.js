import React from 'react';
import {Link} from "react-router-dom";
import Navbar from './NavbarLee';
import styles from './Class.module.css';


const RyulTheme1 = () => {
    return(
        <>
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.navbar_logo} alt="navbar_logo" src="/img/headerimg.png" />      
                </Link>
                <Link to="/lee">
                    <img className={styles.classname} alt="lee" src="/img/lee.png" />
                </Link>
                <Navbar /> 
            </div>
            <div className={styles.theme3photo}>
                <img className={styles.classPhoto} alt="class_photo" src="/img/013.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/014.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/015.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/ryul/100.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/001.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/002.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/003.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/004.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/005.jpg" />
            </div>
            
        </>
    );
}

export default RyulTheme1;