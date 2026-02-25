import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { StyledText } from "@components";

export function HomeScreen() {
  return <AppShell>
    <View>
      <StyledText>
        HOME
      </StyledText>
    </View>
  </AppShell>
}

export function CartScreen() {
  return <AppShell>
    <View>
      <StyledText>
        CART
      </StyledText>
    </View>
  </AppShell>
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
