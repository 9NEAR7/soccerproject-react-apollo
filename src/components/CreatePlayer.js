import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_PLAYER_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $nationality: String!
    $date: String!
    $team: String!
    $url: String!
  ) {
    createPlayer(name: $name, nationality: $nationality, date: $date, team: $team, url: $url) {
      id
      name
      nationality
      date
      team
      url
      
    }
  }
`;

const CreatePlayer = () => {
  const [formState, setFormState] = useState({
    name: '',
    nationality: '',
    date: '',
    team: '',
    url: '',
  });

  const [createPlayer] = useMutation(CREATE_PLAYER_MUTATION, {
    variables: {
      name: formState.name,
      nationality: formState.nationality,
      date: formState.date,
      team: formState.team,
      url: formState.url,
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPlayer();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
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
            className="mb2"
            value={formState.nationality}
            onChange={(e) =>
              setFormState({
                ...formState,
                nationality: e.target.value
              })
            }
            type="text"
            placeholder="País de Origen"
          />
          <input
            className="mb2"
            value={formState.date}
            onChange={(e) =>
              setFormState({
                ...formState,
                date: e.target.value
              })
            }
            type="text"
            placeholder="Fecha de nacimiento"
          />
          <input
            className="mb2"
            value={formState.team}
            onChange={(e) =>
              setFormState({
                ...formState,
                team: e.target.value
              })
            }
            type="text"
            placeholder="Equipo Actual"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="URL imagen"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
   
};

export default CreatePlayer;