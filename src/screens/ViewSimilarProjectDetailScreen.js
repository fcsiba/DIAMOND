import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Context as UserContext } from "../context/UserContext";
import { Content, Card, CardItem, Text, Body } from "native-base";
import Spacer from "../components/Spacer";

const ViewSimilarProjectDetailScreen = ({ navigation }) => {
  const { state } = useContext(UserContext);

  const _id = navigation.getParam("_id");

  const project = state.find((p) => p._id === _id);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Content padder>
        <Card>
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Name</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.projectName}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Description</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.projectDescription}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Budget</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.projectBudget}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Duration</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.projectDuration}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Industry Related to</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.industry}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Company Name</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.companyName}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Number of Employees</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.numberOfEmployees}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Diamond</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={styles.textStyle}>{project.diamond.criteria}</Text>
            </Body>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
        </Card>
      </Content>
    </SafeAreaView>
  );
};

ViewSimilarProjectDetailScreen.navigationOptions = {
  title: "Project Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "sans-serif-light",
  },
  cardItemStyle: {
    backgroundColor: "#33CCFF",
    marginHorizontal: 5,
    marginTop: 5,
  },
  textTitleStyle: {
    fontFamily: "sans-serif-light",
    color: "#fff",
  },
  textStyle: {
    fontFamily: "sans-serif-light",
  },
});

export default ViewSimilarProjectDetailScreen;
