import { Dimensions, StyleSheet, View, Text } from "react-native"

import Colors from "../constants/Colors"

type SkillsProps = {
  skill: string
  index?: number
}
const backgroundColors = [
  Colors.resumeBackroundPurple,
  Colors.resumeBackgroundAqua,
  Colors.resumeBackgroundViolet,
  Colors.resumeBackgroundPink,
]

export default function SkillsCard({ skill, index = 0 }: SkillsProps) {
  return (
    <View style={styles.wrapper}>
      <View
        style={[styles.container, { backgroundColor: backgroundColors[index] }]}
      >
        <Text style={styles.skill}>{skill}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: "grey",
    borderRadius: 16,
    alignSelf: "flex-start",
  },

  skill: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: "white",
    padding: 5,
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})
