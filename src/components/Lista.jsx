

import styles from '../css/App.module.css';

export const  ListaCrises = ({id, data, titulo, prazo, problema, handleRemove}) => {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }

    return (
        <div>
            <table>
            <thead>
                <tr>
                <th className={styles.tableCabecalhoid} >{id}</th>
                <th className={styles.tableCabecalhodata} >{data}</th>
                <th className={styles.tableCabecalhotitulo}>{titulo}</th>
                <th className={styles.tableCabecalhoprazo}>{prazo}</th> 
                <th className={styles.tableCabecalhoproblema}>{problema}</th>
                <th className={styles.tableCabecalhodeletar}>
                   <button onClick={remove}> 
                    Excluir
                    </button>
                </th>
                </tr>    
            </thead>  
       </table>
       </div>
      
    );
}