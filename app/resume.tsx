import { useAssets } from "expo-asset"
import { router } from "expo-router"
import { StyleSheet, View, Text, Pressable } from "react-native"

import { useLoadUrl } from "./hooks/useLoadUrl"
import { Icon } from "./utils/utils"
import Avatar from "../components/Avatar"
import Colors from "../constants/Colors"

const Separator = () => <View style={styles.separator} />
const RESUME_PDF_URL =
  "http://www.horaciolopez.com/assets/HoracioLopez_Resume.pdf"

export default function ResumeScreen() {
  const [assets] = useAssets([require("../assets/images/profile.jpg")])
  const { loadUrl } = useLoadUrl()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          resizeMode="stretch"
          size={150}
          source={{ uri: assets ? assets[0].localUri : null }}
        />

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
        <Pressable onPress={() => loadUrl(RESUME_PDF_URL)}>
          <View style={styles.pressable}>
            <Icon name="print" size={24} color="white" style={styles.icons} />
            <Text style={styles.content}>PRINT</Text>
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
    top: 2,
    paddingBottom: 0,
  },
  icons: {
    paddingRight: 15,
    backgroundColor: "#5a5c69",
  },
  pressable: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#5a5c69",
  },
  separator: {
    height: 1,
    backgroundColor: Colors.contentBackgroundColor,
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,

    padding: 15,
  },
})
