import {useState} from 'react';
import styles from '../css/App.module.css'


function ProjectForm({btnText, handleSubmit, projectData}) {
   
   const [project, setProject] = useState(projectData || {})
   function handleInput (e) {
      setProject({...project, [e.target.name]: e.target.value})
    
  }

function handleChange (e) {
   e.preventDefault()
   handleSubmit(project)
}
   return (

        <form onSubmit={handleChange}>
         <div>Informe a data</div>
           <div> 
                <input type="text" name="data" placeholder="Data" onChange={handleInput} />
           </div>
           <div>Informe o título</div>
            <div> <input type="text"  name="titulo"  placeholder="Título" onChange={handleInput} /> 
           </div>
           <div>Informe o prazo</div>
            <div>  <input type="number"  name="prazo"  placeholder="Prazo" onChange={handleInput} /> 
           </div>
           <div>Informe o problema</div>
            <div>  <textarea  name="problema" placeholder="Problema" onChange={handleInput}></textarea> 
           </div>
           <div>
           <button classname={styles.botaoSalvar} text={btnText}>Salvar</button>
           </div>
        </form>

   )
}
export default ProjectForm