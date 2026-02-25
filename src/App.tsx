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

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenList.onboarding} component={OnboardingScreen} />
      <Stack.Screen name={ScreenList.login} component={LoginScreen} />
      <Stack.Screen name={ScreenList.loginOtp} component={LoginOTPScreen} />
      <Stack.Screen name={ScreenList.setupGrocerySelection} component={SetupGroceryCategoriesScreen} />
      <Stack.Screen name={ScreenList.setupLocation} component={SetupLocationScreen} />
      <Stack.Screen name={ScreenList.setupNotification} component={SetupNotificationScreen} />
    </Stack.Navigator>
  )
}

function App() {
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


export default App;
