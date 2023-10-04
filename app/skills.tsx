import { StyleSheet, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeInUp } from "react-native-reanimated"

import { SkillsList } from "./data/resumeData"
import SkillsCard from "../components/skillsCard"
import Colors from "../constants/Colors"

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
  wrapper: {
    backgroundColor: "white",
    flex: 1,
  },
})
