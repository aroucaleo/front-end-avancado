import styles from '../css/App.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className={styles.paginas}>
            <br/><br/> <h3>  BEM VINDO AO GESTOR DE CRISES !<br/><br/>

             <Link to='/consulta'>CLIQUE AQUI</Link> PARA VISULIZAR AS CRISES DO SISTEMA.<br/><br/> 
            
            </h3>

        </div>
    )
}
