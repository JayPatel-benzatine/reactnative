import React from 'react';
import Authnavigator from './src/NavigationScreen/Authnavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Authnavigator />
      </Provider>
      <Toast />
    </>
  );
};
export default App;
