import { colors } from "@themes";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileAvatar({ src, initals = 'NA', radius = 20 }: {
  radius?: number, src?: string, initals?: string
}) {
  return <View style={[styles.avatarContainer, { width: radius, height: radius }]}>
    {src ? <Image src={src} /> : <Text>{initals}</Text>}
  </View>
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyAccent2
  }
});
