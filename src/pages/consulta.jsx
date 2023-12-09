import styles from '../css/App.module.css';
import ProjectFormConsulta from './FormConsulta';

export const Consulta = () => {
    return (
        <div className={styles.paginas}>
   
   <br/><br/><h3> RELAÇÃO DE CRISES CADASTRADAS</h3><br/><br/>

           <ProjectFormConsulta />               
            
             </div>
    )
}
