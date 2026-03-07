import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import ProfileAvatar from "./Avatar";
import { View } from "react-native";
import StyledText from "./StyledText";
import { colors, typography } from "@themes";
import { iconMaps } from "@constants";
import { HomeSVG } from "@svg";

export function AppDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
        <View style={{}}>
          <ProfileAvatar radius={80} initals="AO" />
          <StyledText style={{ ...typography.lg }}>Ayobami Oludemi</StyledText>
        </View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export function AppDrawerItemIcon({ name, ...props }: {
  name: string, focused: boolean,
  color: string, size: number
}) {
  let Icon = iconMaps[name];
  if (!Icon) Icon = HomeSVG;

  const icon = <Icon color={props.focused ? colors.black : colors.greyAccent2} />;

  return icon;
}
