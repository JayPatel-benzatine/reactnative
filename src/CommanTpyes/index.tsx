import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Signup: undefined;
  Home: undefined;
  Login: undefined;
  // Add other screens if needed
};

export type SignupScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
