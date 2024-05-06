import {StackNavigationProp} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';

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

export interface ICoffee {
  data: {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imagelink_square: ImageSourcePropType; // Assuming the value is a string representing the image link
    imagelink_portrait: ImageSourcePropType; // Assuming the value is a string representing the image link
    ingredients: string;
    special_ingredient: string;
    prices: {size: string; price: string; currency: string}[];
    average_rating: number;
    ratings_count: string;
    favourite: boolean;
    type: string;
    index: number;
  };
}

export interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  // add other color properties as needed
}

export interface ThemeTypography {
  fontFamily: string;
  fontWeight:
    | 'normal'
    | '300'
    | '500'
    | '700'
    | '900'
    | 'bold'
    | '100'
    | '200'
    | '400'
    | '600'
    | '800';
  fontStyle: 'normal' | 'italic' | undefined;
  // other typography properties as needed
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
  // add other theme properties as needed
}
