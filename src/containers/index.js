import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, LogBox, View, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import HelpScreen from 'src/containers/help';
import MapScreen from 'src/containers/Map';
import {
  HELP_PATH,
  COMPASS,
  PLUS,
  PROFILE,
  MAP,
  NOTIFICATION
} from '../data';
import { BASE_COLOR, BLACK_COLOR, RED_COLOR, WHITE_COLOR } from '../styles';

//icon
import PLUS_ICON from 'src/assets/icon/plus.png';
import PROFILE_ICON from 'src/assets/icon/profile.png';
import NOTIFICATION_ICON from 'src/assets/icon/notification.png';
import MAP_ICON from 'src/assets/icon/map.png';
import COMPASS_ICON from 'src/assets/icon/compass.png';

LogBox.ignoreLogs(['Warning: Each', "Warning: Failed"]);
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: RED_COLOR
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: BASE_COLOR,
            tabBarInactiveTintColor: BLACK_COLOR,
            tabBarShowLabel: false,
            tabBarStyle: {
              elevation: 0,
              backgroundColor: WHITE_COLOR,
              height: 70,
              ...styles.shadow
            }
          }}
        >
          <Tab.Screen name={COMPASS} component={MapScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={COMPASS_ICON}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? BASE_COLOR : BLACK_COLOR
                    }}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen name={MAP} component={MapScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={MAP_ICON}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? BASE_COLOR : BLACK_COLOR
                    }}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen name={PLUS} component={MapScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={PLUS_ICON}
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? BASE_COLOR : WHITE_COLOR
                    }}
                  />
                </View>
              ),
              tabBarButton: (props) => (
                <CustomTabBarButton {...props} />
              )
            }}
          />
          <Tab.Screen name={NOTIFICATION} component={MapScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={NOTIFICATION_ICON}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? BASE_COLOR : BLACK_COLOR
                    }}
                  />
                </View>
              )
            }}
          />
          <Tab.Screen name={PROFILE} component={MapScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    source={PROFILE_ICON}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? BASE_COLOR : BLACK_COLOR
                    }}
                  />
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#D3D3D3',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})


export default App;
