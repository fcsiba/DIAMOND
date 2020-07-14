import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Head from "../components/Head";
import { Content, Card, CardItem, Body } from "native-base";
import Spacer from "../components/Spacer";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const RecommendationScreen = ({ navigation }) => {
  const diamondRecommendation = navigation.getParam("diamondRecommendation");
  const projectsWithSameDiamond = navigation.getParam(
    "projectsWithSameDiamond"
  );
  const projectsWithSameIndustry = navigation.getParam(
    "projectsWithSameIndustry"
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Head />
        <Content>
          <Card>
            <CardItem header bordered style={{ backgroundColor: "#33CCFF" }}>
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  paddingLeft: 115,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Your Diamond
              </Text>
            </CardItem>
            <CardItem cardBody>
              {diamondRecommendation.localeCompare(
                "Sample recommendation 2"
              ) === 0 ? (
                <Image
                  source={require(`../../assets/sample2.png`)}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              ) : null}
              {diamondRecommendation.localeCompare(
                "Sample recommendation 1"
              ) === 0 ? (
                <Image
                  source={require(`../../assets/sample1.png`)}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              ) : null}
              {diamondRecommendation.localeCompare(
                "Sample recommendation 3"
              ) === 0 ? (
                <Image
                  source={require(`../../assets/sample3.png`)}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              ) : null}
            </CardItem>

            <CardItem header bordered style={{ backgroundColor: "#33CCFF" }}>
              <Text
                style={{
                  fontFamily: "sans-serif-light",
                  paddingLeft: 100,
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                Recommendation
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text
                  style={{
                    fontFamily: "sans-serif-light",
                    textAlign: "center",
                  }}
                >
                  {diamondRecommendation}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginBottom: 10,
                    fontFamily: "sans-serif-light",
                    textDecorationLine: "underline",
                  }}
                >
                  View Same Projects
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{ marginRight: 60 }}
                    onPress={() => {
                      navigation.navigate("ProjectsWithSimilarDiamond", {
                        projectsWithSameDiamond,
                      });
                    }}
                  >
                    <FontAwesome name="diamond" size={24} color="#33CCFF" />
                    <Text
                      style={{
                        color: "#B4BFC3",
                        fontFamily: "sans-serif-light",
                      }}
                    >
                      By Diamond
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{}}
                    onPress={() => {
                      navigation.navigate("ProjectsWithSimilarIndustry", {
                        projectsWithSameIndustry,
                      });
                    }}
                  >
                    <FontAwesome5 name="industry" size={24} color="#33CCFF" />
                    <Text
                      style={{
                        color: "#B4BFC3",
                        fontFamily: "sans-serif-light",
                      }}
                    >
                      By Industry
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>

        <Spacer />
        <Spacer />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProjectAndCompanyDetails");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "sans-serif-light",
              color: "#33CCFF",
            }}
          >
            Create another project?
          </Text>
        </TouchableOpacity>
      </View>
      <Spacer />
      <Spacer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "black",
  },
  box: {
    width: 335,
    height: 150,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  recommendationsbox: {
    marginTop: 30,
    marginLeft: 13,
    borderColor: "black",
    borderWidth: 1,
    width: 335,
    height: 250,
    backgroundColor: "#1598a1",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "sans-serif-light",
  },

  textStyle: {
    fontFamily: "sans-serif-light",
  },
  myButtonStyle: {
    backgroundColor: "#A5D3D3",
    marginHorizontal: 15,
  },
});

RecommendationScreen.navigationOptions = {
  headerShown: false,
};

export default RecommendationScreen;
