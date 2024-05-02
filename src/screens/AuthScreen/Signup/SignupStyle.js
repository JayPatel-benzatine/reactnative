import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const SignupStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F8',
    flex: 1,
    position: 'relative',
  },
  topImageContainer: {},
  topImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
  },
  helloContainer: {},
  helloText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
    color: '#262626',
    marginVertical: responsiveFontSize(1),
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
    marginBottom: 50,
  },
  form: {
    // marginHorizontal: 40,
    marginTop: 50,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  imageBackground: {
    width: responsiveWidth(40),
    height: responsiveHeight(30),
  },
  orText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    marginVertical: responsiveHeight(3),
    color: '#000',
    textAlign: 'center',
  },
  Social: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialImage: {},
  orSignup: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: '600',
    marginVertical: responsiveHeight(5),
    color: '#623AA2',
    textDecorationLine: 'underline',
  },
});
