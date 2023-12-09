import {useEffect, useState} from 'react';
import {ListaCrises} from '../components/Lista';
import {Barralista} from '../components/barralista';

function ProjectFormConsulta() {
   const [crises, setCrises] = useState([])


   useEffect(() => {
      fetch('http://localhost:5000/crises', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((data) => {
          setCrises(data)
        })
        .catch((err) => console.log(err))
    }, [])
  

   //função para remoção de crises
function removeProject(id) {
            
      fetch(`http://localhost:5000/crises/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          setCrises(crises.filter((crises) => crises.id !== id))
        //mensagem de erro
  
        })
        .catch(err => console.log(err))

        
    }
    
  return (
    <div><Barralista/>
             <div>
               { crises.map((crises) => (
                 <ListaCrises
                  id={crises.id}    
                  data={crises.data} 
                  titulo={crises.titulo}
                  prazo={crises.prazo}
                  problema={crises.problema}
                  key={crises.id}
                  handleRemove={removeProject}
                 />    
             ))
            }
            </div>
            </div>
   )
}
export default ProjectFormConsulta