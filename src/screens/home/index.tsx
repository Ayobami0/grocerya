import { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ProfileAvatar, StyledText } from "@components";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation<any>();

  return <View style={[styles.screen]}>
    <View style={{ paddingVertical: 10 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <ProfileAvatar initals="AO" radius={40} />
      </TouchableOpacity>
    </View>
    <View style={[styles.screen]}>
      <View>
        <StyledText style={{fontSize: 80}}>
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
  return <AppShell>
    <View>
      <StyledText>
        PROFILE
      </StyledText>
    </View>
  </AppShell>
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
