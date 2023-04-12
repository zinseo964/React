import React from 'react';
import {Link} from "react-router-dom";
import Navbar from './NavbarHang';
import styles from './Class.module.css';


const RyulTheme1 = () => {
    return(
        <>
            <div className={styles.header}>
                <Link to="/">
                    <img className={styles.navbar_logo} alt="navbar_logo" src="/img/headerimg.png" />      
                </Link>
                <Link to="/hang">
                    <img className={styles.classname} alt="hang" src="/img/hang.png" />
                </Link>
                <Navbar /> 
            </div>
            <div className={styles.theme3photo}>
                <img className={styles.classPhoto} alt="class_photo" src="/img/001.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/002.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/003.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/004.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/005.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/006.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/007.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/008.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/009.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/010.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/011.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/012.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/013.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/014.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/015.jpg" />
                <img className={styles.classPhoto} alt="class_photo" src="/img/ryul/100.jpg" />

            </div>
            
        </>
    );
}

export default RyulTheme1;