import { Dimensions, StyleSheet, View, Text } from "react-native";

import Colors from "../constants/Colors";

export default function ResumeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horacio Lopez</Text>
      <Text style={styles.content}>Front End Software Engineer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: Colors.contentTextColor,
    paddingBottom: 15,
  },
  content: {
    fontSize: 13,
    fontFamily: "OpenSans_400Regular",
    color: "white",
    paddingBottom: 15,
  },
});
