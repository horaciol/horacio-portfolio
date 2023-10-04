import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeInUp } from "react-native-reanimated"

import { ExperienceList } from "./data/resumeData"
import ExperienceCard from "../components/ExperienceCard"

let colourIndex = -1
export default function WorkScreen() {
  return (
    <ScrollView style={styles.container}>
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
})
