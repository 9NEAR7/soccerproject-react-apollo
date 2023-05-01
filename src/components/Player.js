import React from 'react';

const Player = (props) => {
  const { attribute } = props;
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{attribute.name}</h3>
        <h5 className="card-subtitle mb-2 text-body-secondary"><b> {attribute.country} </b></h5>
          <p className="card-text">
            <b>Año Nacimiento: </b> {attribute.birth}
          </p> 
          <p className="card-text">
            <b>Edad: </b> {attribute.age}
          </p> 
          <p className="card-text">
            <b>Club Actual: </b> {attribute.club}
          </p>
          <p className="card-text">
            <b>Posición: </b> {attribute.position}
          </p>
          <p className="card-text">
            <b>Apodo: </b> {attribute.nickname}
          </p>
          <p className="card-text">
            <b>Altura: </b> {attribute.height}
          </p>
          <p className="card-text">
            <b>Peso: </b> {attribute.weight}
          </p>
          <p className="card-text">
            <b>No. Jersey: </b> {attribute.jersey}
          </p>
    
  </div>
</div>
  );
};



export default Player;