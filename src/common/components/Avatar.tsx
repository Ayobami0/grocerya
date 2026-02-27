import { colors } from "@themes";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export default function ProfileAvatar({ src, initals = 'NA', radius = 20 }: {
  radius?: number, src?: ImageSourcePropType, initals?: string
}) {
  return <View style={[styles.avatarContainer, { width: radius, height: radius }]}>
    {src ? <Image
      source={src}
      style={styles.avatarImage}
    /> : <Text>{initals}</Text>}
  </View>
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyAccent2
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 1000
  }
});
