import React from 'react';
import styles from '../css/barravertical.module.css';
import { Link } from 'react-router-dom';
import Home from '../img/Home.svg';
import Add from '../img/Add.svg';
import Crise from '../img/Crise.svg';
import Search from '../img/Search.svg';


export const Barravertical = () => {
    return (
        <div className={styles.barravertical}>
                  <br/><br/>              
                  <img src={Home} width={24} height={24} /><Link to='/'>HOME</Link><br/><br/>
                  <img src={Crise} width={32} height={32} />CRISE<br/><br/><br/>
                  <img src={Add} width={24} height={24} /> <Link to='/cadastro'>CADASTRO</Link><br/><br/>
                  <img src={Search} width={24} height={24} /> <Link to='/consulta'>CONSULTA</Link><br/><br/>

             </div>
    )
}