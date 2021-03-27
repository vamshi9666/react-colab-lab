import React from 'react';
import {ChakraProvider, Flex} from '@chakra-ui/react';

import './App.css';
import SideBar from './components/Sidebar';
import SelectedItem from './components/SelectedItem';

const App = () => {
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  return (
    <ChakraProvider>
      <Flex>
        <SideBar
          onItemClicked={(item) => {
            console.log('selected item ', item);
            setSelectedItemId(item.id);
          }}
        />
        <SelectedItem selectedItemId={selectedItemId} />
      </Flex>
    </ChakraProvider>
  );
};
export default App;
