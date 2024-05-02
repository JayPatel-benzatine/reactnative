/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {SignupStyle} from './SignupStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Controller, useForm} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {register, signupUser} from '../../../redux/userAPI';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.userData);

  const onSubmit = async (data: any) => {
    const payload = {
      email: data.email,
      password: data.password,
      username: data.username,
    };
    dispatch(signupUser(payload) as any);
  };
  const setStoragte = async () => {
    const userToken = String(userData?.password);
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch (e) {
      console.log(e);
    }
    dispatch(register(userToken));
  };
  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      setStoragte();
    }
  }, [userData]);

  return (
    <View style={SignupStyle.container}>
      <View style={SignupStyle.topImageContainer}>
        <Image
          style={SignupStyle.topImage}
          alt="Error"
          resizeMode="cover"
          source={require('../../../assets/topVector.png')}
        />
      </View>
      <View style={SignupStyle.helloContainer}>
        <Text style={SignupStyle.helloText}>Create account</Text>
      </View>
      <View style={SignupStyle.form}>
        <View style={!errors.username && SignupStyle.inputSpace}>
          <View
            style={[
              SignupStyle.inputContainer,
              errors.username && SignupStyle.errField,
            ]}>
            <FontAwesome
              name="user"
              size={30}
              style={SignupStyle.Icons}
              color="#900"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={SignupStyle.inputField}
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
            <Text style={SignupStyle.errinputField}>
              {errors.username?.message?.toString()}
            </Text>
          )}
        </View>
        <View style={!errors.username && SignupStyle.inputSpace}>
          <View
            style={[
              SignupStyle.inputContainer,
              errors.password && SignupStyle.errField,
            ]}>
            <FontAwesome
              name="lock"
              size={30}
              style={SignupStyle.Icons}
              color="#900"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={SignupStyle.inputField}
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
            <Text style={SignupStyle.errinputField}>
              {errors?.password?.message?.toString()}
            </Text>
          )}
        </View>
        <View style={!errors.username && SignupStyle.inputSpace}>
          <View
            style={[
              SignupStyle.inputContainer,
              errors.password && SignupStyle.errField,
            ]}>
            <MaterialIcons
              name="email"
              size={30}
              style={SignupStyle.Icons}
              color="#900"
            />
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={SignupStyle.inputField}
                  autoComplete="off"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  placeholder="E-mail"
                />
              )}
              name="email"
              rules={{
                required: 'E-mail is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              }}
            />
          </View>
          {errors.email && (
            <Text style={SignupStyle.errinputField}>
              {errors?.email?.message?.toString()}
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={SignupStyle.buttonText}>
          <Text style={SignupStyle.logintext}>Register</Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#F97794', '#623AA2']}
            style={SignupStyle.linearGradient}>
            <AntDesign
              name="arrowright"
              size={30}
              style={SignupStyle.SignIcons}
              color="#900"
            />
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <Text style={SignupStyle.orText}>
        Or create account using social media
      </Text>
      <View style={SignupStyle.Social}>
        <Image
          style={SignupStyle.socialImage}
          alt="Error"
          resizeMode="contain"
          source={require('../../../assets/facebook.png')}
        />
        <Image
          style={SignupStyle.socialImage}
          alt="Error"
          resizeMode="contain"
          source={require('../../../assets/Google.png')}
        />
        <Image
          style={SignupStyle.socialImage}
          alt="Error"
          resizeMode="contain"
          source={require('../../../assets/Twitter.png')}
        />
      </View>
      <Text
        style={SignupStyle.orText}
        onPress={() => navigation.navigate('Login')}>
        Don't have an account ?<Text style={SignupStyle.orSignup}>Login</Text>
      </Text>
      {/* <View style={SignupStyle.base}>
        <ImageBackground
          source={require('../../../assets/Vectos.png')}
          style={SignupStyle.imageBackground}
        />
      </View> */}
    </View>
  );
};

export default Login;
