import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"

import { SkillsList } from "./data/resumeData"
import { useFadeInUpAnimation } from "./hooks/useFadeInUpAnimation"
import SkillsCard from "../components/skillsCard"

let colourIndex = -1
export default function SkillsScreen() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Skills</Text>

      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        style={styles.container}
      >
        {SkillsList.map((item, index) => {
          colourIndex >= 3 ? (colourIndex = 0) : colourIndex++
          const { animationStyles } = useFadeInUpAnimation({
            index,
            duration: 200,
            delay: 40,
          })
          return (
            <Animated.View
              key={index}
              style={[styles.startPosition, animationStyles]}
            >
              <SkillsCard skill={item} index={colourIndex} />
            </Animated.View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: "black",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  startPosition: {
    opacity: 0,
    top: 100,
  },
  wrapper: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
})
