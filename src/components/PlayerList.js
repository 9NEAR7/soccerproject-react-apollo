import React from 'react';
import Player from './Player';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    players{
        id
        name
        nationality
        date
        team
        url
      }
  }
`
;

const PlayerList = () => {
//   const seriesToRender = [
//     {
//       id: 'link-id-1',
//       description:
//         'Prisma gives you a powerful database toolkit 😎',
//       url: 'https://prisma.io'
//     },
//     {
//       id: 'link-id-2',
//       description: 'The best GraphQL client',
//       url: 'https://www.apollographql.com/docs/react/'
//     }
//   ];

    const { data } = useQuery(FEED_QUERY);

        return (
            <div>
                {data && (
                <>
                    {data.players.map((player) => (
                     <Player key={player.id} player={player} />
                 ))}
                </>
            )}
        </div>
    );
};

export default PlayerList;