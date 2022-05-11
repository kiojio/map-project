import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../styles';
import PropTypes from 'prop-types';
import {View} from 'react-native';

const IconButton = props => {
  const {
    leftIcon,
    leftIconStyle,
    label,
    labelStyle,
    rightIcon,
    rightIconStyle,
    buttonStyle,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={{...styles.base, ...styles.boxShadow, ...buttonStyle}}
      onPress={onPress}>
      {/* Left Icon */}
      <Image style={{...styles.leftIcon, ...leftIconStyle}} source={leftIcon} />

      {/* Button Label */}
      <View style={{flex: 1}}>
        <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
      </View>

      {/* Right Icon */}
      <Image
        style={{...styles.rightIcon, ...rightIconStyle}}
        source={rightIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
    flex: 1,
    height: 60,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    marginVertical: 8,
    zIndex: 100,
  },
  boxShadow: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: BLACK_COLOR,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  leftIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 12,
  },
  rightIcon: {
    width: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 18,
  },
});

IconButton.propTypes = {
  leftIcon: PropTypes.string,
  leftIconStyle: PropTypes.object,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  rightIcon: PropTypes.string,
  rightIconStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  onPress: PropTypes.func,
};

export default IconButton;
