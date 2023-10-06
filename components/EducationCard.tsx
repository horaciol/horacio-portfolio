import { StyleSheet, View, Text } from "react-native"

import { EducationListType, contractType } from "../app/data/resumeData"
import { Icon } from "../app/utils/utils"

type EducationCardProps = EducationListType

export default function EducationCard({
  institution,
  course,
  period,
}: EducationCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="graduation-cap" size={24} color="red" />
        <View style={styles.border}></View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.period}>{period}</Text>
        <Text style={styles.institution}>{institution}</Text>
        <Text style={styles.course}>{course}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    paddingBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  border: {
    width: 1,
    backgroundColor: "red",
    flex: 1,
  },
  institution: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: "black",
    paddingBottom: 5,
  },
  course: {
    fontSize: 13,
    fontFamily: "OpenSans_400Regular",
    color: "grey",
    paddingBottom: 5,
  },
  leftContainer: {
    alignItems: "center",
  },
  rightContainer: {
    paddingRight: 15,
    paddingLeft: 10,
    flex: 1,
  },
  period: {
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
    color: "grey",
    paddingBottom: 5,
  },
  row: {
    flexDirection: "row",
  },
  separator: {
    height: 0.5,
    backgroundColor: "black",
  },
})
