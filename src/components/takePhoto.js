import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import ICON_CAMERA from '../assets/icon_camera.png';
import {SOFTGRAY_COLOR} from '../styles';

const TakePhoto = ({text, callback}) => {
  return (
    <TouchableOpacity
      onPress={() => callback()}
      style={{
        backgroundColor: SOFTGRAY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 5,
      }}>
      <Image source={ICON_CAMERA} />
      <Text style={{marginTop: 10, color: '#898A8D'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TakePhoto;
