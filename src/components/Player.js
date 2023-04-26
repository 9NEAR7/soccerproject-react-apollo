import React from 'react';

const Player = (props) => {
  const { attribute } = props;
  return (
    <div>
      <div className='container-object'>
        <h1>{attribute.name}</h1> <br></br> 
        <ul>            
            <li>
                <b><span>País de Origen</span></b><br></br>
                {attribute.country}
            </li>
            
            <li>
                <b><span>Fecha de nacimiento</span></b><br></br>
                {attribute.birth}
            </li>
         
            <li>
                <b><span>Equipo Actual</span></b><br></br>
                {attribute.age}
            </li>
            <b><span>Equipo Actual</span></b><br></br>
                {attribute.club}
            <li>
            <b><span>Equipo Actual</span></b><br></br>
                {attribute.position}
                
            </li>  

           
              
        </ul>
        
      </div>
    </div>
  );
};



export default Player;