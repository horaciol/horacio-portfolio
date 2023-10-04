import { router } from "expo-router"
import { StyleSheet, View, Text, Pressable } from "react-native"

import { Icon } from "./utils/utils"
import Colors from "../constants/Colors"
import Avatar from "../components/Avatar"

const Separator = () => <View style={styles.separator} />
const image = "https://i.pravatar.cc/300"
export default function ResumeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar resizeMode="stretch" size={150} source={{ uri: image }} />

        <Text style={styles.title}>Horacio Lopez</Text>
        <Text style={styles.content}>Front End Software Engineer</Text>
      </View>
      <View>
        <Separator />
        <Pressable onPress={() => router.replace("/work")}>
          <View style={styles.pressable}>
            <Icon
              name="briefcase"
              size={24}
              color="white"
              style={styles.icons}
            />
            <Text style={styles.content}>WORK EXPERIENCE</Text>
          </View>
        </Pressable>
        <Separator />
        <Pressable onPress={() => router.replace("/education")}>
          <View style={styles.pressable}>
            <Icon
              name="graduation-cap"
              size={24}
              color="white"
              style={styles.icons}
            />
            <Text style={styles.content}>EDUCATION</Text>
          </View>
        </Pressable>
        <Separator />
        <Pressable onPress={() => router.replace("/skills")}>
          <View style={styles.pressable}>
            <Icon name="star" size={24} color="white" style={styles.icons} />
            <Text style={styles.content}>SKILLS</Text>
          </View>
        </Pressable>
        <Separator />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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

    paddingBottom: 0,
  },
  icons: {
    paddingRight: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
  pressable: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
  separator: {
    height: 0.5,
    backgroundColor: "black",
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,

    padding: 15,
  },
})
