import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { useLoadUrl } from "./hooks/useLoadUrl";
import { Icon } from "./utils/utils";

const RESUME_PDF_URL =
  "http://www.horaciolopez.com/assets/HoracioLopez_Resume.pdf";
const INSTAGRAM = "https://www.instagram.com/_horaciolopez/";
const TWITTER = "https://twitter.com/_horaciolopez";
const LINKEDIN = "https://uk.linkedin.com/in/lopezhoracio";

export default function LandingScreen() {
  const { loadUrl } = useLoadUrl();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Horacio Lopez</Text>
        <Text style={styles.description}>
          I'm a front end Software Engineer, a team player, an Aussie,
          bilingual, a fresh mind that likes to work with other creative brains.
        </Text>
      </View>
      <View style={styles.linksContainer}>
        <Pressable onPress={() => loadUrl(RESUME_PDF_URL)}>
          <Text style={styles.links}>RESUME</Text>
        </Pressable>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.contentBackgroundColor,
    paddingHorizontal: 25,
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
});
