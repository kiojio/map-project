import React from 'react';
import { Image } from 'react-native';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';
import ICON_EMAIL from 'src/assets/icon/map.png';
import ICON_TELP from 'src/assets/img/icon_version.png'

const renderHeader = props => {
  const { navigation } = props;

  return (
    <View style={styles.paddingHorizontal24}>
      <Header
        style={styles.paddingHorizontal24}
        headerTitle="Bantuan"
        onBackPress={() => navigation.goBack()}
      />
    </View>
  );
};

const renderHelp = props => {
  const helpList = [
    {
      id: 0,
      label: 'cs.ayokenalin@id',
      icon: ICON_EMAIL,
    },
    {
      id: 1,
      label: '021-1234',
      icon: ICON_TELP,
    },
  ];

  return (
    <View style={styles.help}>
      {helpList.map((item, index) => {
        return (
          <View key={('content_', item.id)} style={styles.info}>
            <Image
              style={styles.icon}
              source={item.icon}
              resizeMode={'contain'}
            />
            <View style={styles.wrapText}>
              <Text>{item.label}</Text>
              <View style={styles.border} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const Help = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        {renderHeader(props)}
        {renderHelp(props)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;
