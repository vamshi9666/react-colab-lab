import {Flex, Heading, Text} from '@chakra-ui/layout';
import React from 'react';
import apolloClient from '../config/apollo';
import {gql} from '@apollo/client';
const getSinglePost = async (id) => {
  const response = apolloClient.query({
    query: gql`
      query($id: ID!) {
        starship(id: $id) {
          id
          name
          passengers
          crew
          filmConnection {
            films {
              id
              director
              title
            }
          }
        }
      }
    `,
    variables: {
      id: id,
    },
  });
  return response;
};

const fields = [
  {
    label: 'Crew count',
    dataKey: 'crew',
  },

  {
    label: 'Passengers count',
    dataKey: 'passengers',
  },

  {
    label: 'Made by',
    dataKey: 'manufacturer',
  },
];
export default function SelectedItem(props) {
  const [itemData, setItemData] = React.useState(null);
  const {selectedItemId} = props;
  React.useEffect(() => {
    if (!selectedItemId) {
      return null;
    }
    getSinglePost(selectedItemId).then((response) => {
      console.log('single item response is ', response);
      setItemData(response.data.starship);
    });
  }, [selectedItemId]);

  return (
    <Flex p={3} flex={1} bg="cyan.100">
      {itemData && (
        <Flex direction={'column'} flex={1} p={4} bg={'white'}>
          <Heading>{itemData.name}</Heading>
          {fields.map((field) => {
            return (
              <Flex
                key={field.dataKey}
                w="100%"
                justify={'space-between'}
                mb={2}>
                <Text mr={2}>{field.label}</Text>
                <Text>{itemData[field.dataKey]}</Text>
              </Flex>
            );
          })}

          <Text color="gray.900" fontSize="xl">
            Films
          </Text>
          {itemData.filmConnection.films.map((film, fIndex) => (
            <Flex
              key={fIndex}
              direction="column"
              p={2}
              rounded="md"
              mb={2}
              borderStyle={'solid'}
              borderWidth={1}
              borderColor={'gray.700'}>
              <Text fontSize="lg" color="gray.900">
                {film.title}
              </Text>
              <Text fontSize="md" color={'gray.600'}>
                {film.director}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
