import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from '../screens/About/AboutScreen';
import HomeScreen from '../screens/Home/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈'}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: '상세'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
