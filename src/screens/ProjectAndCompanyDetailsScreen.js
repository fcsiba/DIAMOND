import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { SafeAreaView, StyleSheet, Picker, View, Alert } from "react-native";
import { Content, Card, CardItem, Text } from "native-base";
import Spacer from "../components/Spacer";

const ProjectAndCompanyDetailsScreen = ({ navigation }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");

  const resetState = () => {
    setProjectName("");
    setProjectDescription("");
    setProjectBudget("");
    setProjectDuration("");
    setIndustry("");
    setCompanyName("");
    setNumberOfEmployees("");
  };
  const createAnotherTwoButtonAlert = () =>
    Alert.alert(
      "Missing fields",
      "Please fill all the fields and then continue.",
      [{ text: "Cancel", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Content padder>
        <Card>
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Name</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              value={projectName}
              onChangeText={(newProjectName) => setProjectName(newProjectName)}
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Description</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              value={projectDescription}
              onChangeText={(newProjectDescription) =>
                setProjectDescription(newProjectDescription)
              }
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
              multiline
              numberOfLines={4}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Budget</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              numeric
              keyboardType={"numeric"}
              value={projectBudget}
              onChangeText={(newProjectBudget) =>
                setProjectBudget(newProjectBudget)
              }
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Project Duration</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              numeric
              keyboardType={"numeric"}
              value={projectDuration}
              onChangeText={(newProjectDuration) =>
                setProjectDuration(newProjectDuration)
              }
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Industry Related to</Text>
          </CardItem>
          <CardItem bordered>
            <View style={{ flex: 1 }}>
              <Picker
                selectedValue={industry}
                style={
                  ({
                    height: 50,
                    width: 300,
                  },
                  styles.picker)
                }
                onValueChange={(itemValue, itemIndex) => setIndustry(itemValue)}
              >
                <Picker.Item label="Advertising" value="advertising" />
                <Picker.Item
                  label="Communications Industry"
                  value="communicationsindustry"
                />
                <Picker.Item
                  label="Creative Industries"
                  value="Creative Industries"
                />
                <Picker.Item
                  label="Entertainment Industry"
                  value="Entertainment Industry"
                />
                <Picker.Item label="Fashion" value="Fashion" />
                <Picker.Item label="Green Industry" value="Green Industry" />
                <Picker.Item
                  label="Information Technology"
                  value="Information Technology"
                />
                <Picker.Item label="Agriculture" value="Agriculture" />
                <Picker.Item label="Manufacturing" value="Manufacturing" />
                <Picker.Item label="Media" value="Media" />
                <Picker.Item
                  label="Textile Industry"
                  value="Textile Industry"
                />
                <Picker.Item label="Education" value="Education" />
                <Picker.Item label="Health" value="Health" />
                <Picker.Item label="Fianance" value="aianance" />
                <Picker.Item label="Heavy Industry" value="Heavy Industry" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </View>
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Company Name</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              value={companyName}
              onChangeText={(newCompanyName) => setCompanyName(newCompanyName)}
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
          <CardItem header bordered style={styles.cardItemStyle}>
            <Text style={styles.textTitleStyle}>Number of Employees</Text>
          </CardItem>
          <CardItem bordered>
            <Input
              numeric
              keyboardType={"numeric"}
              value={numberOfEmployees}
              onChangeText={(newNumberOfEmployees) =>
                setNumberOfEmployees(newNumberOfEmployees)
              }
              autoCorrect={false}
              labelStyle={{
                fontFamily: "sans-serif-light",
              }}
              inputStyle={{
                fontFamily: "sans-serif-light",
              }}
            />
          </CardItem>
          <Spacer />
          <Spacer />
          <Spacer />
        </Card>
        <Spacer />
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Reset"
            onPress={() => resetState()}
            type="solid"
            buttonStyle={{
              backgroundColor: "#F26C6C",
              paddingHorizontal: 30,
              marginLeft: 60,
            }}
            titleStyle={{ fontFamily: "sans-serif-light" }}
          />
          <Button
            title="Continue"
            onPress={() => {
              if (
                projectName === "" ||
                projectDescription === "" ||
                projectBudget === "" ||
                projectDuration === "" ||
                industry === "" ||
                companyName === "" ||
                numberOfEmployees === ""
              ) {
                createAnotherTwoButtonAlert();
              } else {
                navigation.navigate("NTCPDiamond", {
                  projectName,
                  projectDescription,
                  projectBudget,
                  projectDuration,
                  industry,
                  companyName,
                  numberOfEmployees,
                });
                resetState();
              }
            }}
            type="solid"
            buttonStyle={{
              backgroundColor: "#5CDD3F",
              paddingHorizontal: 20,
              marginLeft: 20,
            }}
            titleStyle={{ fontFamily: "sans-serif-light" }}
          />
        </View>
      </Content>
    </SafeAreaView>
  );
};

ProjectAndCompanyDetailsScreen.navigationOptions = {
  title: "Create New Diamond",
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

export default ProjectAndCompanyDetailsScreen;
