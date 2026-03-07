declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const ScreenList = {
  onboarding: 'Onboarding',
  login: 'Login',
  loginOtp: 'LoginOTP',
  setupGrocerySelection: 'SetupGrocerySelection',
  setupLocation: 'SetupLocation',
  setupNotification: 'SetupNotification',
  mainTab: 'MainTab',
  main: 'Main',
  home: 'Home',
  favorite: 'Favorite',
  profile: 'Profile',
  cart: 'Cart',
} as const;

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  LoginOTP: { phone: string; prefix: string };
  SetupGrocerySelection: undefined;
  SetupLocation: undefined;
  SetupNotification: undefined;
  Main: undefined;
  MainDrawer: undefined;
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};
