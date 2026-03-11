import { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ProfileAvatar, StyledText } from "@components";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ProfileRouteParams } from "@types";
import { ScreenList } from "@navigation";

export function HomeScreen() {
  const navigation = useNavigation<any>();

  return <View style={[styles.screen]}>
    <View style={{ paddingVertical: 10 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <ProfileAvatar initals="AO" radius={40} src={require("../../assets/IMG-20251219-WA0042.jpg")} />
      </TouchableOpacity>
    </View>
    <View style={[styles.screen]}>
      <View>
        <StyledText style={{ fontSize: 80 }}>
          HOME
        </StyledText>
      </View>
    </View>
  </View>
}

export function CartScreen() {
  return <View>
    <StyledText>
      CART
    </StyledText>
  </View>
}

export function FavoriteScreen() {
  return <AppShell>
    <View>
      <StyledText>
        FAVORITE
      </StyledText>
    </View>
  </AppShell>
}

export function ProfileScreen() {
  const route = useRoute<RouteProp<{ [ScreenList.profile]: ProfileRouteParams }, 'Profile'>>();

  const fullname = route.params?.fullname ?? 'Ayobami Oludemi';
  const email = route.params?.email ?? 'ayobamioludemi@grocerya.com';

  return <View style={[
    styles.screen,
    { display: 'flex', justifyContent: 'center', alignItems: 'center' }]}>
    <StyledText>
      {fullname}
    </StyledText>
    <StyledText>
      {email}
    </StyledText>
  </View>
}


function AppShell({ children }: { children?: ReactNode }) {
  return <View style={[styles.screen]}>
    <View style={styles.screenContent}>

    </View>
    {children}
    <View style={[styles.navBarContainer]}>
    </View>
  </View>
}
