import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  const handleAbout = () => {
    return navigation.navigate('About');
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="버튼" onPress={handleAbout} />
    </View>
  );
}

export default HomeScreen;
