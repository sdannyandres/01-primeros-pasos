// Importar modulos de react / dependencias
import React,{Fragment} from 'react'

// Funcion del componente//
const MiComponente = () => {
  let nombre = 'Danny';
  let web = 'dannyweb.es'
  let usuario = {
    nombre: 'Danny',
    apellidos: 'Salazar',
    web: 'dannyweb.es',
  };
 
  return (

    <div className='mi-componente'>
    <hr/>
    <h2>Componente creado</h2>
    apellidos: "Salazar";
    web: "dannyweb.es";;
    <h3>Datos del usuario</h3>
    <ul>
      <li>Nombre: <strong>{usuario.nombre}</strong></li>
      <li>Nombre: <strong>{usuario.apellidos}</strong></li>
      <li>web: <strong>{usuario.web}</strong></li>
    </ul>
    <p> Este es mi primer componente</p>
    <ul>
      <li> 
        React
      </li>
      <li> 
        Angular
      </li>
      <li> 
        React
      </li>
      <li> 
        React
      </li>
    </ul>
    </div>
  );
};
// Exportar el componente
export default MiComponente;

