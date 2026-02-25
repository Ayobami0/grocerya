import { View } from "react-native";
import { colors, globalStyles } from "@themes";
import { AppBar, CountryDropdown, QuestionMarkIcon, StyledButton, StyledText, StyledTextInput } from "@components";
import { OtpInput } from "react-native-otp-entry";
import { styles } from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenList } from "@navigation";
import { COUNTRIES } from "@constants";
import { Country } from "@types";


export function LoginScreen() {
  const navigator = useNavigation();
  const [number, setNumber] = useState<string>("");
  const [dialCode, setDialCode] = useState<string>("");

  const initialCountry = COUNTRIES[0];

  const onContinue = () => {
    navigator.navigate(ScreenList.loginOtp, { phone: number, prefix: dialCode })
  }
  const onChanged = (text: string) => {
    setNumber(text);
  }

  const onSelectCountry = (c: Country) => {
    setDialCode(c.dialCode);
  }

  return <>
    <View style={[globalStyles.screen, globalStyles.container, globalStyles.spaceBetween]}>
      <AppBar>
        <QuestionMarkIcon />
      </AppBar>
      <View style={[globalStyles.container, { flex: 1 }]}>
        <StyledText style={[styles.title]}>Get Started</StyledText>
        <StyledText style={[styles.subtitle]}>You can log in or make an account if you’re new</StyledText>
        <StyledText style={styles.phoneNumberText}>Enter your phone number</StyledText>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <CountryDropdown initial={initialCountry} onSelect={onSelectCountry} />
          <View style={{ flex: 1 }}>

            <StyledTextInput placeholder="Phone Number" placeholderTextColor={colors.grey} onChangeText={onChanged} value={number} keyboardType="phone-pad">
            </StyledTextInput>
          </View>
        </View>
      </View>
      <StyledButton variant={number !== '' ? 'primary' : 'secondary'} onPress={number !== '' ? onContinue : undefined} style={styles.continueBtn}>
        Continue
      </StyledButton>
    </View>
  </>
}

export function LoginOTPScreen({ route }) {
  const navigator = useNavigation();
  const [otp, setOTP] = useState<string>("");

  const { phone, prefix } = route.params;

  const goBack = () => {
    navigator.goBack();
  }

  const onContinue = () => {
    navigator.navigate(ScreenList.setupGrocerySelection);
  }

  const onChanged = (text: string) => {
    setOTP(text);
  }
  return <>
    <View style={[globalStyles.screen, globalStyles.container, globalStyles.spaceBetween]}>
      <AppBar onBack={goBack}>
        <QuestionMarkIcon />
      </AppBar>
      <View style={[globalStyles.container, { flex: 1 }]}>
        <StyledText style={[styles.title]}>Enter your OTP number</StyledText>
        <StyledText style={[styles.subtitle]}>We have sent the otp via sms to <StyledText style={[styles.phoneText]}>{`${prefix} ${phone}`}</StyledText> </StyledText>
        <OtpInput
          numberOfDigits={5}
          onTextChange={onChanged}
          theme={{ containerStyle: styles.pinContainer, pinCodeContainerStyle: styles.singlePinContainer, pinCodeTextStyle: styles.pinText }} />
      </View>
      <StyledButton variant={otp.length === 5 ? 'primary' : 'secondary'} onPress={otp.length === 5 ? onContinue : undefined} style={styles.continueBtn}>
        Continue
      </StyledButton>
    </View>
  </>
}
