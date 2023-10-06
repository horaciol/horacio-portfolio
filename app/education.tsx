import { StyleSheet, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, { FadeInUp } from "react-native-reanimated"

import { EdcuationList } from "./data/resumeData"
import EducationCard from "../components/EducationCard"

export default function EducationScreen() {
  return (
    <ScrollView style={locaStyles.container}>
      <Text style={locaStyles.title}>Education</Text>
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

const locaStyles = StyleSheet.create({
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
