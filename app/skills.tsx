import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SkillsList } from "./data/resumeData"
import Animated, { FadeInUp } from "react-native-reanimated"
import SkillsCard from "../components/skillsCard"

let colourIndex = -1
export default function SkillsScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      style={styles.container}
    >
      {SkillsList.map((item, index) => {
        colourIndex >= 3 ? (colourIndex = 0) : colourIndex++
        return (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(100 * index + 100).duration(300)}
          >
            <SkillsCard skill={item} index={colourIndex} />
          </Animated.View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
  },
})
