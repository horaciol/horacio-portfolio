import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Platform, StyleProp, TextStyle } from "react-native";
/**
 * Full icon list https://icons.expo.fyi/
 */
export function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}) {
  return <FontAwesome {...props} />;
}

export const isWeb = Platform.OS === "web";
