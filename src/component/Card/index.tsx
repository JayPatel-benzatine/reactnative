/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {cardStyle} from './Style';
import {Image} from 'react-native';
import {COLORS} from '../../theme';
import {ICoffee} from '../../CommanTpyes';

const Card = ({data}: ICoffee) => {
  return (
    <View style={cardStyle.main}>
      <View>
        <Image style={cardStyle.tinyLogo} source={data.imagelink_square} />
        <Text style={cardStyle.rating}>{data.average_rating}</Text>
      </View>
      <Text style={cardStyle.textTitle}>{data.name}</Text>
      <Text style={cardStyle.subtextTitle}>{data.special_ingredient}</Text>
      <View style={cardStyle.row}>
        <View style={cardStyle.row}>
          <Text
            style={[
              cardStyle.rowText,
              {
                marginRight: 5,
                color: COLORS.primaryOrangeHex,
              },
            ]}>
            $
          </Text>
          <Text style={cardStyle.rowText}>{data.average_rating}</Text>
        </View>
        <Text style={cardStyle.btn}>+</Text>
      </View>
    </View>
  );
};

export default Card;
