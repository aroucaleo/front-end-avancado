import ProjectForm from './FormCadastro'
import styles from '../css/App.module.css'
import { useNavigate } from 'react-router-dom';


export const Cadastro = () => {
    const navigate = useNavigate()

    function createPost(crises) {

        // inicilizador para contagem no store.json
        crises.cad = 0
        crises.services = []
        
        fetch('http://localhost:5000/crises', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(crises),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            //redirect
            navigate("/consulta", {state:{ message: "Crise cadastrada!" }})
             
            
            })

            .catch(err => console.log(err))

    }

    return (
        <div className={styles.paginas}>
            <br/><br/><h3> FORMULÁRIO DE CADASTRO DE CRISES</h3><br/><br/>

           <ProjectForm handleSubmit={createPost} btnText="SALVAR" />
        </div>
    )
}
