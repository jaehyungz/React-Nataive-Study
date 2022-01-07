import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

type homeScreenProp = StackNavigationProp<RootStackParamList, 'About'>;
