import styles from '../css/App.module.css';

export const Barralista = () => {
    return (
        <div  >
<table >
        <thead>
            <tr >
            <td className={styles.tableCabecalhoid}>ID</td>
            <td className={styles.tableCabecalhodata}>DATA</td>
            <td className={styles.tableCabecalhotitulo}>TITULO</td>
            <td className={styles.tableCabecalhoprazo}>PRAZO</td> 
            <td className={styles.tableCabecalhoproblema}>PROBLEMA</td>
            <td className={styles.tableCabecalhodeletar}>DELETAR</td>       
            </tr>
        </thead>
            </table>
            </div>
    )
}