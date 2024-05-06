/* eslint-disable react-native/no-inline-styles */
// App.tsx

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  blueTheme,
  darkTheme,
  lightTheme,
  redTheme,
  setTheme,
} from '../../redux/themeSlice';
import {Theme} from '../../CommanTpyes';
import {RootState} from '../../redux/store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );

  const changeTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontFamily: currentTheme.typography.fontFamily,
      fontWeight: currentTheme.typography.fontWeight,
      fontStyle: currentTheme.typography.fontStyle,
      color: currentTheme.colors.text,
    },
  });
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: currentTheme.colors.background},
      ]}>
      <Text style={styles.text}>Hello, world!</Text>

      <TouchableOpacity onPress={() => changeTheme(blueTheme)}>
        <Text style={{color: blueTheme.colors.primary}}>Blue Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeTheme(redTheme)}>
        <Text style={{color: redTheme.colors.primary}}>Red Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeTheme(lightTheme)}>
        <Text style={{color: lightTheme.colors.primary}}>White Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeTheme(darkTheme)}>
        <Text style={{color: darkTheme.colors.primary}}>Dark Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
