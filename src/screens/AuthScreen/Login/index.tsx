/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  Image,
  Text,
  View,
  TextInput,
  // ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {LoginStyle} from './LoginStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {HomeScreenNavigationProp} from '../../../CommanTpyes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {login, loginUser} from '../../../redux/userAPI';
import {RootState} from '../../../redux/store';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.userData);
  console.log(userData);

  const onSubmit = async (data: any) => {
    const userToken = String(data?.password);
    console.log('pass', userToken);

    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (e) {
      console.log(e);
    }
    dispatch(login(userToken));
    // const payload = {
    //   password: data.password,
    //   username: data.username,
    // };
    // dispatch(loginUser(payload) as any);
  };
  // const setStoragte = async () => {
  //   const userToken = String(userData?.password);
  //   try {
  //     await AsyncStorage.setItem('userToken', userToken);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   dispatch(login(userToken));
  // };
  // useEffect(() => {
  //   if (Object.keys(userData).length !== 0) {
  //     setStoragte();
  //   }
  // }, [userData]);
  return (
    <KeyboardAvoidingView
      style={LoginStyle.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={LoginStyle.scroll}>
        <View style={LoginStyle.container}>
          <View style={LoginStyle.topImageContainer}>
            <Image
              style={LoginStyle.topImage}
              resizeMode="cover"
              source={require('../../../assets/topVector.png')}
            />
          </View>
          <View style={LoginStyle.helloContainer}>
            <Text style={LoginStyle.helloText}>Hello</Text>
          </View>
          <View>
            <Text style={LoginStyle.signInText}>Sign in to your account</Text>
          </View>
          <View style={LoginStyle.form}>
            <View style={LoginStyle.inputSpace}>
              <View
                style={[
                  LoginStyle.inputContainer,
                  errors.password && LoginStyle.errField,
                ]}>
                <FontAwesome
                  name="user"
                  size={30}
                  style={LoginStyle.Icons}
                  color="#900"
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      style={LoginStyle.inputField}
                      autoComplete="off"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                      placeholder="Username"
                    />
                  )}
                  name="username"
                  rules={{required: 'Username is required'}}
                />
              </View>
              {errors.username && (
                <Text style={LoginStyle.errinputField}>
                  {errors.username?.message?.toString()}
                </Text>
              )}
            </View>
            <View style={LoginStyle.inputSpace}>
              <View
                style={[
                  LoginStyle.inputContainer,
                  errors.password && LoginStyle.errField,
                ]}>
                <FontAwesome
                  name="lock"
                  size={30}
                  style={LoginStyle.Icons}
                  color="#900"
                />
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      style={LoginStyle.inputField}
                      autoComplete="off"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                      placeholder="Password"
                    />
                  )}
                  name="password"
                  rules={{required: 'Password is required'}}
                />
              </View>
              {errors.password && (
                <Text style={LoginStyle.errinputField}>
                  {errors?.password?.message?.toString()}
                </Text>
              )}
            </View>
          </View>
          <View>
            <Text style={LoginStyle.forgetText}>Forgot your password?</Text>
          </View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={LoginStyle.buttonText}>
              <Text style={LoginStyle.logintext}>Signin</Text>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#F97794', '#623AA2']}
                style={LoginStyle.linearGradient}>
                <AntDesign
                  name="arrowright"
                  size={30}
                  style={LoginStyle.SignIcons}
                  color="#900"
                />
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <Text
            style={LoginStyle.orText}
            onPress={() => navigation.navigate('Signup')}>
            Don't have an account ?
            <Text style={LoginStyle.orSignup}>Signup</Text>
          </Text>
        </View>
        {/* <View style={LoginStyle.base}>
          <ImageBackground
            source={require('../../../assets/Vectos.png')}
            style={LoginStyle.imageBackground}
          />
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
