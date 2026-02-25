import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
import { colors, radius, spacing, typography } from "@themes";
import { BagSVG, HomeSVG, SaveSVG, UserSVG } from "@svg";
import { ScreenList } from "@navigation";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

const iconMaps: Record<string, FC<SvgProps>> = {
  [ScreenList.home]: HomeSVG,
  [ScreenList.profile]: UserSVG,
  [ScreenList.cart]: BagSVG,
  [ScreenList.favorite]: SaveSVG,
} as const;


export function NavBar({ state, descriptors, navigation }) {

  return (
    <View style={[styles.nav]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const Icon = iconMaps[label];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.navItem, isFocused && styles.selectedNavItem]}>
            <Icon color={isFocused ? colors.black : colors.greyAccent2} />
            {isFocused && <StyledText style={[styles.navItemLabel]}>{label}</StyledText>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 36,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  navItemLabel: {
    ...typography.medium,
    ...typography.base
  },
  selectedNavItem: {
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
