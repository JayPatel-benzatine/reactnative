import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../../theme';

export const cardStyle = StyleSheet.create({
  main: {
    marginTop: 15,
    marginRight: 15,
    padding: 15,
    width: responsiveWidth(45),
    height: 'auto',
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderRadius: 23,
  },
  rating: {
    position: 'absolute',
    backgroundColor: '#00000099',
    right: 0,
    color: COLORS.primaryWhiteHex,
    paddingRight: 20,
    paddingLeft: 30,
    paddingVertical: 5,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 40,
    fontWeight: '800',
  },
  tinyLogo: {
    width: '100%',
    height: responsiveHeight(20),
    borderRadius: 23,
  },
  textTitle: {
    marginVertical: 10,
    fontSize: responsiveFontSize(2),
    color: COLORS.primaryWhiteHex,
    fontWeight: '700',
  },
  rowText: {
    marginVertical: 10,
    fontSize: responsiveFontSize(2),
    color: COLORS.primaryWhiteHex,
    fontWeight: '700',
  },
  subtextTitle: {
    fontSize: responsiveFontSize(1.5),
    color: COLORS.primaryWhiteHex,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 7,
    fontSize: responsiveFontSize(2.5),
    color: COLORS.primaryWhiteHex,
  },
});
