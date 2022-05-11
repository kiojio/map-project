import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ICON_HISTORY_GRAY from '../assets/icon_history_gray.png';
import ICON_HISTORY_ACTIVE from '../assets/icon_history_active.png';
import ICON_HOME_GRAY from '../assets/icon_home_gray.png';
import ICON_HOME_ACTIVE from '../assets/icon_home_active.png';
import ICON_MENU from '../assets/icon_menu.png';
import ICON_NOTIF_ACTIVE from '../assets/icon_notif_active.png';
import ICON_NOTIF_GRAY from '../assets/icon_notif_gray.png';
import ICON_PROFILE_ACTIVE from '../assets/icon_profile_active.png';
import ICON_PROFILE_GRAY from '../assets/icon_profile_gray.png';
import { BASE_COLOR, WINDOW_WIDTH } from '../styles';
import { HISTORY_PATH, HOME_PATH, PROFILE_PATH, MENU_PATH, MESSAGE_PATH } from '../data';

const ChildMenu = (
  navigation,
  text,
  direction,
  asset,
  assetActive,
  style = {},
  width = 20,
  height = 20,
  styleIcon = {},
  styleText = {},
) => {
  const route = useRoute();
  console.log('route.name ', route);
  return (
    <TouchableOpacity
      onPress={() => navigation.push(direction)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <>
        <Image
          style={{ width: 22, height: 22, marginBottom: 5 }}
          source={route.name === direction ? assetActive : asset}
        />

        <Text
          style={[
            {
              fontSize: 12,

              color: route.name === direction ? BASE_COLOR : '#B1BACA',
              height: 20,
            },
            styleText,
          ]}>
          {text}
        </Text>
      </>
    </TouchableOpacity>
  );
};
export const Footer = ({ navigation }) => {
  return (
    <View
      style={{
        width: WINDOW_WIDTH,
        backgroundColor: 'white',
        borderTopColor: '#0000000D',
        borderTopWidth: 1,
        elevation: 2,
        height: 70,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {ChildMenu(
        navigation,
        'Beranda',
        HOME_PATH,
        ICON_HOME_GRAY,
        ICON_HOME_ACTIVE,
      )}
      {ChildMenu(
        navigation,
        'Riwayat',
        HISTORY_PATH,
        ICON_HISTORY_GRAY,
        ICON_HISTORY_ACTIVE,
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate(MENU_PATH)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={ICON_MENU} />
      </TouchableOpacity>
      {ChildMenu(
        navigation,
        'Pesan',
        MESSAGE_PATH,
        ICON_NOTIF_GRAY,
        ICON_NOTIF_ACTIVE,
      )}
      {ChildMenu(
        navigation,
        'Profile',
        PROFILE_PATH,
        ICON_PROFILE_GRAY,
        ICON_PROFILE_ACTIVE,
      )}
    </View>
  );
};
