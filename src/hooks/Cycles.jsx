

import React, { useState, useEffect} from 'react';
import '../styles/clock.scss';
import moment from 'moment/moment';


const Cycles = () => {

    

     useEffect(() => {
        console.log('componente creado')
        
        const interlID =setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000 )


        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(interlID);
        };
    }, []); 

    
    

    const estadoInicial = {
        fecha: moment().format("DD-MM-YYYY hh:mm:ss") ,
        edad: 0,
        nombre: 'Raquel',
        apellido: 'Reedemed',
    }

    //el usuario empezara con los siguientes datos
   const [inicio, setInicio] = useState(estadoInicial);

   function actualizarEstado() {

    setInicio( {
      nombre: 'Ana',
      apellido: 'Perez',
      fecha: inicio.fecha,
      edad: inicio.edad +1,
    })
   }


    return (
        <div>
        <h1>Registro Usuarios</h1>
        <h6>Fecha y Hora Actual= {inicio.fecha}</h6>
        <p>Nombre= {inicio.nombre}</p>
        <p>Apellido= {inicio.apellido}</p>
        <p>Edad= {inicio.edad}</p>
        
        
        <button onClick={actualizarEstado} > actualizar secion </button>    
        </div>
    );
}

export default Cycles;


 