import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../redux/userAPI';

const Home = () => {
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log(e);
    }
    dispatch(logout(null));
  };
  return (
    <View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
