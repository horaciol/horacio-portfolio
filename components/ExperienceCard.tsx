import { StyleSheet, View, Text } from "react-native"

import Colors from "../constants/Colors"
import { contractType } from "../app/data/resumeData"
import { Icon } from "../app/utils/utils"

type ExperienceCardProps = {
  company: string
  position: string
  period: string
  description: string
  contracts?: contractType[]
}
const backgroundColors = [
  Colors.resumeBackroundPurple,
  Colors.resumeBackgroundAqua,
  Colors.resumeBackgroundViolet,
  Colors.resumeBackgroundPink,
]

export default function ExperienceCard({
  company,
  position,
  period,
  description,
  contracts,
}: ExperienceCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Icon name="briefcase" size={20} color="red" />
        <View style={styles.border}></View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.period}>{period}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.position}>{position}</Text>
        <Text style={styles.description}>{description}</Text>

        {contracts ? (
          <>
            {contracts.map((contract, index) => (
              <View key={index}>
                <Text style={styles.company}>{contract.company}</Text>
                <Text style={styles.description}>{contract.description}</Text>
              </View>
            ))}
          </>
        ) : null}
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

  company: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: "black",
    paddingBottom: 5,
  },
  position: {
    fontSize: 15,
    fontFamily: "Montserrat_500Medium",
    color: "grey",
    paddingBottom: 5,
  },
  description: {
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
