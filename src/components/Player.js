import React from 'react';

const Player = (props) => {
  const { player } = props;
  return (
    <div>
      <div className='container-object'>
        <b>{player.name}</b><br></br> 
        <ul>            
            <li>
                <b><span>País de Origen</span></b><br></br>
                {player.nationality}
            </li>
            
            <li>
                <b><span>Fecha de nacimiento</span></b><br></br>
                {player.date}
            </li>
         
            <li>
                <b><span>Equipo Actual</span></b><br></br>
                {player.team}
            </li>

            <li>
                <b><span>Imagen</span></b><br></br>
                <a href={player.url}>{player.url}</a>
            </li>  

            <li>
            </li>  
              <img src= {player.url} className="imagenSerie"></img>
        </ul>
        
      </div>
    </div>
  );
};



export default Player;