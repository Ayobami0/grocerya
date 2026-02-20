import { ReactNode } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { globalStyles } from "@themes";
import StyledText from "./StyledText";
import { BackIconSVG } from "@svg";

type AppBarProps = {
  title?: string;
  children?: ReactNode;
  onBack?: () => void;
};

export default function AppBar(props: AppBarProps) {
  return <View style={[style.bar]}>
    <View>
      {props.onBack && <TouchableOpacity onPress={props.onBack}>
        <BackIconSVG />
      </TouchableOpacity>}
    </View>
    <View style={style.title}>
      {props.title && <StyledText></StyledText>}
    </View>
    <View>
      {props.children}
    </View>
  </View>
}

const style = StyleSheet.create({
  bar: {
    ...globalStyles.containerRow,
    alignItems: 'center',
    marginVertical: 20
  },
  title: {
    flex: 1
  },
  leading: {},
  trailing: {},
});
