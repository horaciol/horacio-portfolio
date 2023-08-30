import {
  StyleSheet,
  View,
  Text,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  Dimensions,
} from "react-native";

import { useProjectData } from "../hooks/useProjectsData";
import ProjectList, { ProjectListType } from "../data/projectsData";
import { FlashList } from "@shopify/flash-list";
import Colors from "../../constants/Colors";

const seperator = () => {
  return <View style={styles.separator} />;
};

export default function ProjectsScreen() {
  const { getImage } = useProjectData();

  const renderItems = ({ item }: { item: ProjectListType }) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.title}>{item.project_title}</Text>
        <View style={styles.listImageContainer}>
          <Image style={styles.image} source={getImage(item.project_image)} />
        </View>
        <Text style={styles.subHeading}>Client:</Text>
        <Text style={styles.content}>{item.project_client}</Text>
        <Text style={styles.subHeading}>Description:</Text>
        <Text style={styles.content}>{item.project_description}</Text>
        <Text style={styles.subHeading}>Tasks:</Text>
        <Text style={styles.content}>{item.project_tasks}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <View style={styles.listContainer}>
        <FlashList
          data={ProjectList}
          renderItem={renderItems}
          estimatedItemSize={500}
          ItemSeparatorComponent={seperator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
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
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
  },
  listImageContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: 150,
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
});
