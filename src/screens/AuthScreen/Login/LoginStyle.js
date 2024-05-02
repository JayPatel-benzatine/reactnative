import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const LoginStyle = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#F5F5F8',
  },
  scroll: {
    // backgroundColor: 'red',
  },
  container: {
    backgroundColor: '#F5F5F8',
    position: 'relative',
  },
  topImageContainer: {},
  topImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(25),
  },
  helloContainer: {},
  helloText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(7),
    fontWeight: '500',
    color: '#262626',
    marginVertical: responsiveFontSize(4),
  },
  signInText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    color: '#262626',
  },
  forgetText: {
    fontSize: responsiveFontSize(2),
    color: '#858585',
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    textAlign: 'right',
    marginHorizontal: 40,
    marginBottom: 40,
  },
  form: {
    marginTop: 40,
    marginBottom: 0,
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  inputSpace: {
    marginBottom: 25,
  },
  errinputField: {
    marginVertical: 10,
    marginStart: 15,
    color: 'red',
  },
  errField: {
    borderWidth: 1,
    borderColor: 'red',
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: responsiveWidth(70),
  },
  inputField: {
    borderWidth: 0,
    padding: 0,
    color: '#000',
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 8,
    width: '90%',
  },
  Icons: {
    fontSize: 20,
    color: '#9A9A9A',
  },
  buttonText: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    flex: 1,
  },
  logintext: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    color: '#000',
  },
  SignIcons: {
    fontSize: 20,
    color: '#fff',
  },
  linearGradient: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  base: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  Social: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
  },
  orText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '600',
    marginVertical: responsiveHeight(5),
    color: '#000',
    textAlign: 'center',
  },
  orSignup: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '600',
    marginVertical: responsiveHeight(5),
    color: '#623AA2',
    textDecorationLine: 'underline',
  },
});
