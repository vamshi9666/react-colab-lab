import React from 'react';
import {Heading, List, ListItem} from '@chakra-ui/react';
import apolloClient from '../config/apollo';
import {gql} from '@apollo/client';
const getPosts = async () => {
  const rawResponse = apolloClient.query({
    query: gql`
      {
        allStarships {
          starships {
            id
            name
          }
        }
      }
    `,
  });
  return rawResponse;
};
export default function SideBar(props) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((postsResponse) => {
      console.log('api-response: ', postsResponse.data.allStarships.starships);
      setPosts(postsResponse.data.allStarships.starships);
    });
  }, []);
  return (
    <List px={2} width={'10rem'} maxH="100vh" overflowY={'scroll'}>
      <Heading>Ships</Heading>
      {posts.map((post, postIndex) => {
        const {id, name} = post;
        return (
          <ListItem
            border={1}
            borderColor={'gray.500'}
            borderStyle="solid"
            rounded="md"
            key={postIndex}
            padding={2}
            mb={2}
            onClick={() => {
              props.onItemClicked({id: id});
            }}
            maxH={'4rem'}
            overflow="hidden"
            shadow={'lg'}
            _hover={{
              background: 'gray.300',
              cursor: 'pointer',
            }}>
            {name}
          </ListItem>
        );
      })}
    </List>
  );
}
