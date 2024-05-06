/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../redux/userAPI';
import {homeStyle} from './homeStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import CoffeeData from '../../data/CoffeeData';
import {COLORS} from '../../theme';
import Card from '../../component/Card';
type ItemProps = {title: string};
const Home = () => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<string>('All');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log(e);
    }
    dispatch(logout(null));
  };

  const Item = ({title}: ItemProps) => {
    const color =
      title === selectedId
        ? COLORS.primaryOrangeHex
        : COLORS.primaryLightGreyHex;
    return (
      <TouchableOpacity onPress={() => setSelectedId(title)}>
        <View style={homeStyle.Scrollcontain}>
          <Text style={[homeStyle.Scrolltext, {color: color}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const manuallyAddedItems = [{id: 'man1', name: 'All'}];
  return (
    <SafeAreaView style={homeStyle.homemain}>
      <StatusBar barStyle="light-content" />
      <View style={homeStyle.container}>
        <View style={homeStyle.homeheader}>
          <View style={homeStyle.hamburger}>
            <AntDesign
              name="appstore1"
              size={30}
              style={homeStyle.Icons}
              color="#900"
            />
          </View>
          <TouchableOpacity onPress={handleSubmit}>
            <Image
              style={homeStyle.avtar}
              source={require('../../assets/app_images/avatar.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={homeStyle.homeTitlediv}>
          <Text style={homeStyle.homeTitle}>Find the best coffee for you</Text>
        </View>
        <View style={homeStyle.searchInput}>
          <AntDesign
            name="search1"
            size={35}
            style={homeStyle.Icons}
            color="#900"
          />
          <TextInput style={homeStyle.input} />
        </View>
        <FlatList
          data={[
            ...manuallyAddedItems,
            ...CoffeeData.filter(
              (item, index, self) =>
                index === self.findIndex(t => t.name === item.name),
            ),
          ]}
          renderItem={({item}) => <Item title={item.name} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        <FlatList
          data={
            selectedId === 'All'
              ? CoffeeData
              : CoffeeData.filter(item => item.name === selectedId)
          }
          renderItem={({item}) => <Card data={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
