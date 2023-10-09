import { StyleSheet, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"

import { ExperienceList } from "./data/resumeData"
import { useFadeInUpAnimation } from "./hooks/useFadeInUpAnimation"
import ExperienceCard from "../components/ExperienceCard"

export default function WorkScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      {ExperienceList.map((item, index) => {
        const { animationStyles } = useFadeInUpAnimation({ index })
        return (
          <Animated.View
            key={index}
            style={[{ opacity: 0, top: 30 }, animationStyles]}
          >
            <ExperienceCard {...item} />
          </Animated.View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: "black",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
})
