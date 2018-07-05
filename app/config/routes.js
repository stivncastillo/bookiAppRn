import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
// Auth Screens
import { AuthScreen } from '../screens/AuthScreen';
import { Splash } from '../screens/Splash';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
// App screens
// import HomeScreen from '../screens/HomeScreen';
import { MyBooksScreen } from '../screens/MyBooksScreen';
import lang from '../i18n';

// Init theme
EStyleSheet.build({
  $primary: '#ef476f',
  $white: '#ffffff',
  $white7: '#f7f7f7',
  $yellow: '#ffd166',
  $green: '#06d6a0',
  $blue: '#118ab2',
  $black: '#333333',
  $gray: '#666666',
  $white2: '#d3d3d3',

  // Debug UI
  // $outline: 1,
});

const AppStack = createBottomTabNavigator(
  {
    MyBooks: MyBooksScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => (
        /* const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MyBooks') {
          iconName = 'ios-information-circle';
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        } */

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        <Icon name="rocket" size={25} color={tintColor} />
      ),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);
const AuthStack = createStackNavigator(
  {
    Auth: { screen: AuthScreen, navigationOptions: { header: null } },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: lang('login'),
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerTitle: lang('register'),
      },
    },
  },
  {
    initialRouteName: 'Auth',
    navigationOptions: {
      headerStyle: {
        backgroundColor: EStyleSheet.value('$primary'),
      },
      headerTintColor: EStyleSheet.value('$white'),
    },
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);

export default createSwitchNavigator(
  {
    Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);
