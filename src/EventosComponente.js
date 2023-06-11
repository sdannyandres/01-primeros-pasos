import React from 'react'

export const EventosComponente = () => {
    
     const hasDadoclick = (e, nombre) => {
      alert ("Has dado  click al boton!!");
     }
      
     function hasDadoDobleclick(e){
        alert ("Has dado doble click al boton!!");
     }

     const hasEntrado = (e, acion)=> {
        console.log ("Has ${accion}entrado a la caja con el mouse!!");
     }
    
     const hasSalido = (e)=> {
        console.log ("Has salido de la caja con el mouse!!");
     }




  return (
    <div> 
        <h1>Eventos en React</h1>

        <p>
        {/*Evento click*/}
        <button onClick={e => hasDadoclick(e,"Danny")}>Dame Click!</button>
        </p>

        <p>
            {/*Evento doble click*/}
        <button onDoubleClick={hasDadoDobleclick}>Dame Click!</button>
        </p>
         <div id="caja"
         onMouseEnter={ e => hasEntrado(e, "entrado")}
         onMouseLeave={ e=> hasSalido(e,"salido" )}
         >
        {/*Evento OnMouseEnter onMouseLeave*/}
        pasa por encima!!
        
        </div>

    </div>
  )
}
