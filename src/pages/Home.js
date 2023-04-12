import React from 'react';
import {Link} from "react-router-dom";
import styles from './Home.module.css';


function Home(){
    return(
        <>
        <div className='Home'>
            <div className="Logo">
                <img className={styles.LogoImage} alt="cca_logo_color" src="img/CCA_logo.png" />
            </div>
            
            <div className={styles.ClassPart}>
                <Link to="/ryul">
                    <img className="Ryul" alt="ryul" src="img/ryul_proto.png" />             
                </Link>
                <Link to="/lee">
                    <img className="Lee" alt="lee" src="img/lee_proto.png" />             
                </Link>
                <Link to="/hang">
                    <img className="Hang" alt="hang" src="img/hang_proto.png" />         
                </Link>
            </div>
        </div>
        </>
    );
}

export default Home;