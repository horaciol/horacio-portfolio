import { FlashList } from "@shopify/flash-list"
import { Link } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import Colors from "../constants/Colors"
import ProjectList, { ProjectListType } from "./data/projectsData"
import { useProjectData } from "./hooks/useProjectsData"
import styles from "./styles/projects.module.css"
import { isWeb } from "./utils/utils"

const seperator = () => {
  return <View style={style.separator} />
}

export default function ProjectsScreen() {
  const { getImage } = useProjectData()

  const renderItems = ({ item }: { item: ProjectListType }) => {
    return (
      <View style={style.listContainer} key={item.project_id}>
        <Text style={style.title}>{item.project_title}</Text>
        <View style={style.imageContainer}>
          <Image style={style.image} source={getImage(item.project_image)} />
        </View>
        <Text style={style.subHeading}>Client:</Text>
        <Text style={style.content}>{item.project_client}</Text>
        <Text style={style.subHeading}>Description:</Text>
        <Text style={style.content}>{item.project_description}</Text>
        <Text style={style.subHeading}>Tasks:</Text>
        <Text style={style.content}>{item.project_tasks}</Text>
        {item.app_store_url && (
          <>
            <Link style={style.link} href={item.app_store_url}>
              Get it on the App Store here
            </Link>
          </>
        )}
        {item.google_play_url && (
          <>
            <Link style={style.link} href={item.google_play_url}>
              Get it on Google Play here
            </Link>
          </>
        )}
      </View>
    )
  }

  return (
    <>
      {isWeb ? (
        <ScrollView style={style.scrollContainer}>
          <div className={styles.itemContainer}>
            {ProjectList.map(item => renderItems({ item }))}
          </div>
        </ScrollView>
      ) : (
        <View style={style.container}>
          <FlashList
            data={ProjectList}
            renderItem={renderItems}
            estimatedItemSize={500}
            ItemSeparatorComponent={seperator}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat_500Medium",
    color: Colors.contentTextColor,
    paddingBottom: 15,
  },
  content: {
    fontSize: 13,
    fontFamily: "OpenSans_400Regular",
    color: "white",
    paddingBottom: 15,
  },
  listContainer: {
    flex: 1,
  },
  subHeading: {
    color: Colors.contentSubTitleColor,
    fontFamily: "Montserrat_600SemiBold",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
  },
  scrollContainer: {
    padding: 15,
    backgroundColor: Colors.contentBackgroundColor,
  },
  imageContainer: {
    width: "100%",
    margin: 8,
    alignSelf: "center",
    justifyContent: "center",
  },
  separator: {
    marginTop: 15,
    marginBottom: 10,
    height: 1,
    width: "100%",
    backgroundColor: Colors.contentTextColor,
  },
  link: {
    fontFamily: "Montserrat_600SemiBold",
    textDecorationLine: "underline",
    color: "white",
    paddingVertical: 5,
  },
})
