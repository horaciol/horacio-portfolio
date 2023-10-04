import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeInUp } from "react-native-reanimated"

import { EdcuationList } from "./data/resumeData"
import EducationCard from "../components/EducationCard"

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      {EdcuationList.map((item, index) => {
        return (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(300 * index + 300).duration(600)}
          >
            <EducationCard {...item} />
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
