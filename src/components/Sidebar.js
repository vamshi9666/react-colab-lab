import React from 'react';
import {Heading, List, ListItem} from '@chakra-ui/react';
const getPosts = async () => {
  const rawResponse = await fetch('https://swapi.dev/api/starships/');
  return rawResponse.json();
};
export default function SideBar(props) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((postsResponse) => {
      console.log('api-response: ', postsResponse);
      setPosts(postsResponse.results);
    });
  }, []);
  return (
    <List px={2} width={'10rem'} maxH="100vh" overflowY={'scroll'}>
      <Heading>Ships</Heading>
      {posts.map((post, postIndex) => {
        const {url, name} = post;
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
              const id = url.split('/').reverse()[1];
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
