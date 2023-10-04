import { StyleSheet, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeInUp } from "react-native-reanimated"

import { ExperienceList } from "./data/resumeData"
import ExperienceCard from "../components/ExperienceCard"

let colourIndex = -1
export default function WorkScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      {ExperienceList.map((item, index) => {
        colourIndex >= 3 ? (colourIndex = 0) : colourIndex++
        return (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(300 * index + 300).duration(600)}
          >
            <ExperienceCard {...item} index={colourIndex} />
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
