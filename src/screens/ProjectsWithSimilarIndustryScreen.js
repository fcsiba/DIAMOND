import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import { OptimizedFlatList } from "react-native-optimized-flatlist";

const ProjectWithSimilarIndustryScreen = ({ navigation }) => {
  const projectsWithSameIndustry = navigation.getParam(
    "projectsWithSameIndustry"
  );

  return (
    <SafeAreaView style={styles.container}>
      <OptimizedFlatList
        data={projectsWithSameIndustry}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <Content padder>
              <Card>
                <CardItem
                  header
                  bordered
                  style={{ backgroundColor: "#33CCFF" }}
                >
                  <Text style={styles.textTitleStyle}>{item.projectName}</Text>
                </CardItem>

                <CardItem bordered>
                  <Body>
                    <Text style={styles.textStyle}>
                      {item.projectDescription}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ViewSimilarProjectDetail", {
                        _id: item._id,
                      })
                    }
                  >
                    <Text
                      style={{
                        color: "#B4BFC3",
                        fontFamily: "sans-serif-light",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                </CardItem>
              </Card>
            </Content>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "sans-serif-light",
  },
  textTitleStyle: {
    fontFamily: "sans-serif-light",
    color: "#fff",
  },
  textStyle: {
    fontFamily: "sans-serif-light",
  },
});

ProjectWithSimilarIndustryScreen.navigationOptions = {
  title: "Projects With Same Industry",
};

export default ProjectWithSimilarIndustryScreen;
