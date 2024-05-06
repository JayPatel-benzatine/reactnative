/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Signup, Setting} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {retriveToken} from '../redux/userAPI';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Authnavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const userState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  console.log(userState);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch(retriveToken(userToken));
    }, 1000);
  }, []);

  if (userState.screenLoading) {
    return (
      <View style={styles.loginstyle}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userState.userToken === null ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Setting"
          barStyle={styles.tabbar}
          activeColor="blue"
          
          labeled={false}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, focused}) => (
                <View
                  style={[
                    styles.tabIconContainer,
                    focused && styles.activeTabIcon,
                  ]}>
                  <FontAwesome name="user" size={30} color={color} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, focused}) => (
                <View
                  style={[
                    styles.tabIconContainer,
                    focused && styles.activeTabIcon,
                  ]}>
                  <FontAwesome name="user" size={30} color={color} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loginstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbar: {
    backgroundColor: 'tomato',
    height: responsiveHeight(7),
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 20,
    right: 16,
    left: 16,
    borderRadius: 50, // Adjust the border radius value as needed
    overflow: 'hidden',
    elevation: 5,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    position: 'absolute',
    top: -15,
  },
  activeTabIcon: {
    // width: 50,
    // height: 50,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: -15,
  },
});

export default Authnavigator;
