import { Link } from "expo-router"
import { Pressable, StyleSheet } from "react-native"

import { useLoadUrl } from "./hooks/useLoadUrl"
import { Icon } from "./utils/utils"
import { Text, View } from "../components/Themed"
import Colors from "../constants/Colors"

const INSTAGRAM = "https://www.instagram.com/_horaciolopez/"
const TWITTER = "https://twitter.com/_horaciolopez"
const LINKEDIN = "https://uk.linkedin.com/in/lopezhoracio"

export default function LandingScreen() {
  const { loadUrl } = useLoadUrl()
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Horacio Lopez</Text>
        <Text style={styles.description}>
          I'm a Senior Front End Software Engineer, a team player and lead. A
          curious mind with over 18 years experience in IT who likes to work
          with other creative brains.
        </Text>
        <Text style={styles.description}>
          Latino | Aussie | British | Bilingual | Dad of 2
        </Text>
        <Text style={styles.description}></Text>
      </View>
      <View style={styles.linksContainer}>
        <Link style={styles.links} href="/resume">
          RESUME
        </Link>

        <Link style={styles.links} href="/projects">
          PROJECTS
        </Link>
        <View style={styles.socialsContainer}>
          <Pressable onPress={() => loadUrl(INSTAGRAM)}>
            <Icon
              name="instagram"
              size={24}
              color="white"
              style={styles.icons}
            />
          </Pressable>
          <Pressable onPress={() => loadUrl(LINKEDIN)}>
            <Icon
              name="linkedin-square"
              size={24}
              color="white"
              style={styles.icons}
            />
          </Pressable>
          <Pressable onPress={() => loadUrl(TWITTER)}>
            <Icon name="twitter" size={24} color="white" style={styles.icons} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.contentBackgroundColor,
    paddingHorizontal: 25,
    borderTopColor: Colors.contentSubTitleColor,
    borderTopWidth: 0,
    borderBottomWidth: 20,
    borderBottomColor: Colors.contentSubTitleColor,
  },
  contentContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.contentBackgroundColor,
  },
  title: {
    fontSize: 26,
    fontFamily: "Montserrat_500Medium",
    paddingBottom: 15,
    color: Colors.contentTextColor,
  },
  description: {
    fontSize: 14,
    fontFamily: "OpenSans_400Regular",
    color: Colors.contentTextColor,
    marginBottom: 10,
  },
  links: {
    paddingBottom: 15,
    color: Colors.contentTextColor,
    backgroundColor: Colors.contentBackgroundColor,
  },
  linksContainer: {
    marginBottom: 40,
  },
  socialsContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    backgroundColor: Colors.contentBackgroundColor,
  },
  icons: {
    paddingRight: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
})
