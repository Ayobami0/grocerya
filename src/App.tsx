/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { OnboardingScreen } from '@screens/onboarding';
import { LoginScreen, LoginOTPScreen } from '@screens/login';
import { SetupGroceryCategoriesScreen, SetupLocationScreen, SetupNotificationScreen } from '@screens/setup';
import { RootStackParamList, ScreenList } from '@navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, FavoriteScreen, HomeScreen, ProfileScreen } from '@screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppDrawer, AppDrawerItemIcon, NavBar } from '@components';
import { colors, typography } from '@themes';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <NavBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={ScreenList.home} component={MainDrawer} />
      <Tab.Screen name={ScreenList.cart} component={CartScreen} />
      <Tab.Screen name={ScreenList.favorite} component={FavoriteScreen} />
      <Tab.Screen name={ScreenList.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function MainDrawer() {
  return <Drawer.Navigator
    drawerContent={(props) => <AppDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerInactiveTintColor: colors.greyAccent2,
      drawerActiveTintColor: colors.black,
      drawerLabelStyle: {
        ...typography.base,
        ...typography.medium
      }
    }}
  >
    <Drawer.Screen
      name={ScreenList.home}
      component={HomeScreen}
      options={{ drawerIcon: (props) => <AppDrawerItemIcon name={ScreenList.home} {...props} /> }}
    />
    <Drawer.Screen name={ScreenList.cart} component={CartScreen}
      options={{ drawerIcon: (props) => <AppDrawerItemIcon name={ScreenList.cart} {...props} /> }}
    />
    <Drawer.Screen name={ScreenList.favorite} component={FavoriteScreen}
      options={{ drawerIcon: (props) => <AppDrawerItemIcon name={ScreenList.favorite} {...props} /> }}
    />
    <Drawer.Screen name={ScreenList.profile} component={ProfileScreen}
      options={{ drawerIcon: (props) => <AppDrawerItemIcon name={ScreenList.profile} {...props} /> }}
    />
  </Drawer.Navigator>
}

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenList.main} screenOptions={{ headerShown: false, }}>
      <Stack.Screen name={ScreenList.onboarding} component={OnboardingScreen} />
      <Stack.Screen name={ScreenList.login} component={LoginScreen} />
      <Stack.Screen name={ScreenList.loginOtp} component={LoginOTPScreen} />
      <Stack.Screen name={ScreenList.setupGrocerySelection} component={SetupGroceryCategoriesScreen} />
      <Stack.Screen name={ScreenList.setupLocation} component={SetupLocationScreen} />
      <Stack.Screen name={ScreenList.setupNotification} component={SetupNotificationScreen} />
      <Stack.Screen name={ScreenList.main} component={MainTabs} />
    </Stack.Navigator>
  )
}

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


