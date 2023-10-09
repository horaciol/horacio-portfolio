import { StyleSheet, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated from "react-native-reanimated"

import { EdcuationList } from "./data/resumeData"
import { useFadeInUpAnimation } from "./hooks/useFadeInUpAnimation"
import EducationCard from "../components/EducationCard"

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Education</Text>
      {EdcuationList.map((item, index) => {
        const { animationStyles } = useFadeInUpAnimation({ index })
        return (
          <Animated.View
            key={index}
            style={[styles.startPosition, animationStyles]}
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
    top: 40,
  },
})
