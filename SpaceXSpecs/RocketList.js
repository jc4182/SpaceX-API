import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getRocketSpecs } from './RocketSpecs';

const RocketList = () => {
  const [rockets, setRockets] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const rocketData = await getRocketSpecs();
      setRockets(rocketData);
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={rockets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RocketList;
