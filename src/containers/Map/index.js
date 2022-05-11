import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View, Image, Text, TextInput } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import styles from './index.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GRAY_COLOR, BLACK_COLOR, WHITE_COLOR } from '../../styles';

//icon
import NEAR_ICON from 'src/assets/icon/near.png';
import FILTER_ICON from 'src/assets/icon/filter.png';
import SEARCH_ICON from 'src/assets/icon/search.png';

MapboxGL.setAccessToken("pk.eyJ1Ijoia2lvamlvIiwiYSI6ImNqaXZmaGQyazIxbDYza3Jxb251ZHdxbnEifQ.sV-b5QCTk0zKZI_IDYfiDw");

const dummyImage = 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';

const Map = () => {
  const [coordinates, setCoordinates] = useState([106.816666, -6.200000])
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [places] = useState([
    {
      name: 'My Office',
      latitude: '-6.1594893',
      longitude: '106.8146639',
      marker: 'https://media-exp1.licdn.com/dms/image/C560BAQGkwL_WxMLbOg/company-logo_200_200/0/1646711594925?e=2147483647&v=beta&t=wCnUxqIpVUwFugWFjPY1sqATnhJYS6NLxyXL7f-4wzc'
    },
    {
      name: 'Monument Nasional',
      latitude: '-6.1753924',
      longitude: '106.8249641',
      marker: 'https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-drawing-monas-jakarta-png-image_1733727.jpg'
    },
    {
      name: 'Gajah Mada Mall',
      latitude: '-6.1604351',
      longitude: '106.8164203',
      marker: 'https://thumbs.dreamstime.com/b/buildings-line-icon-city-architecture-sign-skyscraper-building-vector-buildings-line-icon-city-architecture-sign-skyscraper-148085776.jpg'
    }
  ]);
  const [searchData, setSearchData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const mapRef = useRef()

  const changeStyleMap = () => {
    setDarkMode(!darkMode);
  }

  const onChangeSearch = (value) => {
    setSearch(value);
    if (value.length == '') {
      setIsSearch(false);
    }

    if (value.length >= 3) {
      setIsSearch(true);
      const newData = places.filter(marker =>
        marker.name.toLowerCase().includes(value.toLocaleLowerCase())
      )
      console.log("searched", newData);
      setSearchData(newData);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={mapRef}
          showUserLocation={true}
          style={styles.map}
          styleURL={darkMode ? MapboxGL.StyleURL.Dark : MapboxGL.StyleURL.Street}
        >
          <MapboxGL.Camera
            zoomLevel={12}
            centerCoordinate={coordinates}
          />
          {places.length > 0 && places.map((marker, index) => (
            <MapboxGL.PointAnnotation
              id={marker.name + '_' + index}
              children={true}
              coordinate={[
                marker.longitude,
                marker.latitude
              ]}
              title={marker.name}
            >
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  borderColor: '#fff',
                  borderWidth: 3
                }}
              />
            </MapboxGL.PointAnnotation>
          ))}
          {/* <MapboxGL.PointAnnotation coordinate={coordinates} /> */}
        </MapboxGL.MapView>
        <View style={{ ...styles.inputContainer, ...styles.shadow }}>
          <Image
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              alignSelf: 'center',
              marginLeft: 10
            }}
            source={SEARCH_ICON}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
            placeholderTextColor={GRAY_COLOR}
            placeholder={'Search'}
            keyboardType={'default'}
          />
        </View>
        {
          isSearch == true &&
          <View
            style={{ ...styles.searchCard, ...styles.shadow }}
          >
            <View
              style={{
                ...styles.contentSearch
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  padding: 15,
                }}
              >
                {
                  searchData.length > 0 ?
                    searchData.map((marker, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setIsSearch(false);
                          setCoordinates([marker.longitude, marker.latitude])
                        }}
                      >
                        <Text numberOfLines={1} style={{ paddingTop: 5, flexWrap: 'wrap' }}>{marker.name}</Text>
                      </TouchableOpacity>
                    ))
                    :
                    <Text numberOfLines={1} style={{ paddingTop: 5, flexWrap: 'wrap' }}>Nothing Found</Text>
                }

              </View>
            </View>
          </View>
        }
        <TouchableOpacity
          style={{
            ...styles.btnToggle,
            ...styles.shadow
          }}
          onPress={changeStyleMap}
        >
          <Image
            source={FILTER_ICON}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: BLACK_COLOR
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btnNear,
            ...styles.shadow
          }}
          onPress={() => console.log("press")}
        >
          <Image
            source={NEAR_ICON}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: BLACK_COLOR
            }}
          />
        </TouchableOpacity>
        <View
          style={{ ...styles.card, ...styles.shadow }}
        >
          <View
            style={{
              ...styles.contentCard
            }}
          >
            <Image
              source={{ uri: dummyImage }}
              style={{
                width: 80,
                height: 'auto',
                borderRadius: 10
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                padding: 15
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Lorem Ipsum </Text>
              <Text numberOfLines={1} style={{ paddingTop: 5, flexWrap: 'wrap' }}>simply dummy text of the printing and typesetting industry.</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Map;
