import React from 'react';
import Player from './Player';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    attributes{
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
                    {data.attributes.map((attribute) => (
                     <Player key={attribute.id} attribute={attribute} />
                 ))}
                </>
            )}
        </div>
    );
};

export default PlayerList;