import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import ProfileAvatar from "./Avatar";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { colors, typography } from "@themes";
import { iconMaps } from "@constants";
import { HomeSVG } from "@svg";
import { ScreenList } from "@navigation";
import { useNavigationState } from "@react-navigation/native";

const drawerItems = [
  { name: ScreenList.home, label: 'Home' },
  { name: ScreenList.cart, label: 'Cart' },
  { name: ScreenList.favorite, label: 'Favourite' },
  { name: ScreenList.profile, label: 'Profile' },
];

export function AppDrawer(props: DrawerContentComponentProps) {
  const activeTab = useNavigationState((state) => {
    const mainRoute = state.routes.find((r) => r.name === ScreenList.main);
    const tabRoute = mainRoute?.state?.routes?.find((r) => r.name === ScreenList.mainTab);
    const tabState = tabRoute?.state;
    return tabState
      ? tabState.routes[tabState.index ?? 0]?.name
      : ScreenList.home;
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
        <View style={{ marginBottom: 24 }}>
          <ProfileAvatar
            initals="AO"
            radius={100}
            src={require("../../assets/IMG-20251219-WA0042.jpg")}
          />
          <StyledText style={{ ...typography.lg }}>Ayobami Oludemi</StyledText>
        </View>

        {drawerItems.map((item) => {
          const Icon = iconMaps[item.name] ?? HomeSVG;
          const isFocused = activeTab === item.name;

          return (
            <TouchableOpacity
              key={item.name}
              onPress={() => props.navigation.navigate(ScreenList.mainTab, { screen: item.name })}
              style={styles.item}
            >
              <Icon color={isFocused ? colors.black : colors.greyAccent2} />
              <StyledText
                style={{
                  ...typography.base,
                  ...typography.medium,
                  color: isFocused ? colors.black : colors.greyAccent2,
                  marginLeft: 12,
                }}
              >
                {item.label}
              </StyledText>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
