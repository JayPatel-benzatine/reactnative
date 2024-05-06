import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const homeStyle = StyleSheet.create({
  homemain: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  container: {
    paddingHorizontal: 15,
  },
  homeheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS !== 'ios' ? 15 : '',
  },
  hamburger: {
    padding: 8,
    backgroundColor: COLORS.secondaryGreyHex,
    borderRadius: 10,
    borderColor: COLORS.secondaryGreyHex,
    borderWidth: 1,
  },
  Icons: {
    color: COLORS.primaryLightGreyHex,
    fontSize: responsiveFontSize(2),
  },
  avtar: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderRadius: 15,
  },
  homeTitlediv: {
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  homeTitle: {
    color: COLORS.primaryWhiteHex,
    fontSize: responsiveFontSize(5),
    fontWeight: '800',
  },
  searchInput: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: 100,
    borderColor: COLORS.primaryLightGreyHex,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    width: responsiveWidth(80),
    color: '#fff',
    height: responsiveHeight(5),
    padding: 10,
  },
  Scrollcontain: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  Scrolltext: {
    color: COLORS.primaryLightGreyHex,
    fontSize: responsiveFontSize(2),
    fontWeight: '800',
  },
});
