import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_ATTRIBUTE_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $country: String!
    $birth: String!
    $age: String!
    $club: String!
    $position: String!
    $nickname: String!
    $height: String!
    $weight: String!
    $jersey: String!
  ) {
    createAttribute(name:$name,country:$country,birth:$birth,age:$age,club:$club,position:$position,nickname:$nickname,height:$height,weight:$weight,jersey:$jersey) {
        id 
        name
        country
        birth
        age
        club
        position
        nickname
        height
        weight
        jersey 
    }
  }
`;

const CreateAttribute = () => {
  const [formState, setFormState] = useState({
    id:'',
    name: '',
    country: '',
    birth: '',
    age: '',
    club: '',
    position: '',
    nickname: '',
    height: '',
    weight: '',
    jersey: '',
  });

  const [CreateAttribute] = useMutation(CREATE_ATTRIBUTE_MUTATION, {
    variables: {
      name: formState.name,
      country: formState.country,
      birth: formState.birth,
      age: formState.age,
      club: formState.club,
      position: formState.position,
      nickname: formState.nickname,
      height: formState.height,
      weight: formState.weight,
      jersey: formState.jersey,
    }

    
  });


  return (
    <div className='mb-3 mt-2 '>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreateAttribute();
        }}
      >
        <div className="flex flex-column mb2">
          <input
            className="form-label form-control mb-3 mt-3"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del jugador"
          />
          <input
            className="form-label form-control mb-3 mt-1"
            value={formState.country}
            onChange={(e) =>
              setFormState({
                ...formState,
                country: e.target.value
              })
            }
            type="text"
            placeholder="País de Origen"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.birth}
            onChange={(e) =>
              setFormState({
                ...formState,
                birth: e.target.value
              })
            }
            type="text"
            placeholder="Año de nacimiento"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.age}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: e.target.value
              })
            }
            type="text"
            placeholder="Edad"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.club}
            onChange={(e) =>
              setFormState({
                ...formState,
                club: e.target.value
              })
            }
            type="text"
            placeholder="Club Actual"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.position}
            onChange={(e) =>
              setFormState({
                ...formState,
                position: e.target.value
              })
            }
            type="text"
            placeholder="Posición"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.nickname}
            onChange={(e) =>
              setFormState({
                ...formState,
                nickname: e.target.value
              })
            }
            type="text"
            placeholder="Apodo"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.height}
            onChange={(e) =>
              setFormState({
                ...formState,
                height: e.target.value
              })
            }
            type="text"
            placeholder="Altura"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.weight}
            onChange={(e) =>
              setFormState({
                ...formState,
                weight: e.target.value
              })
            }
            type="text"
            placeholder="Peso"
          />
           <input
            className="form-label form-control mb-3 mt-1"
            value={formState.jersey}
            onChange={(e) =>
              setFormState({
                ...formState,
                jersey: e.target.value
              })
            }
            type="text"
            placeholder="No. Jersey"
          />
          
        </div >
        <button type="submit" className='btn btn-primary  btn-lg'>Agregar</button>
      </form>
    </div>
    
  );
   
};

export default CreateAttribute;