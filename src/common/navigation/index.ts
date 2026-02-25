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
} as const;

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  LoginOTP: { phone: string; prefix: string };
  SetupGrocerySelection: undefined;
  SetupLocation: undefined;
  SetupNotification: undefined;
};
