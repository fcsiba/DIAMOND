import React, { useRef, useState } from "react";
import {
  Dimensions,
  PanResponder,
  View,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import Svg, { Polyline } from "react-native-svg";
import RadioForm from "react-native-simple-radio-button";

import diamondApi from "../api/diamondApi";

const examplePath = [];

var diamond = [
  { criteria: { novelty: "", technology: "", complexity: "", pace: "" } },
];

var technology = [
  { label: "Super-high", value: "Super-high" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
];

var pace = [
  { label: "Regular", value: "Regular" },
  { label: "Fast", value: "Fast" },
  { label: "Time-critical", value: "Time-critical" },
  { label: "Blitz", value: "Blitz" },
];

var complexity = [
  { label: "Assembly", value: "Assembly" },
  { label: "System", value: "System" },
  { label: "Array", value: "Array" },
];

var novelty = [
  { label: "Derivative", value: "Derivative" },
  { label: "Platform", value: "Platform" },
  { label: "Breakthrough", value: "Breakthrough" },
];

const GesturePath = ({ path, color, children }) => {
  const { width, height } = Dimensions.get("window");
  const points = path.map((p) => `${p.x},${p.y}`).join(" ");
  return (
    <>
      <Svg height="400" width="400" viewBox={`0 0 ${width} ${height}`}>
        <Polyline points={points} fill="none" stroke={color} strokeWidth="5" />
      </Svg>
      {children}
    </>
  );
};

const GestureRecorder = ({ onPathChanged, children }) => {
  const pathRef = useRef([]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        pathRef.current = [];
      },
      onPanResponderMove: (event) => {
        pathRef.current.push({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        });

        onPathChanged([...pathRef.current]);
      },
      onPanResponderRelease: () => {
        onPathChanged([...pathRef.current]);
      },
    })
  ).current;

  return (
    <View
      style={[StyleSheet.absoluteFill, styles.container]}
      {...panResponder.panHandlers}
    >
      {children}
    </View>
  );
};

const NTCPDiamondScreen = ({ navigation }) => {
  const projectName = navigation.getParam("projectName");
  const projectDescription = navigation.getParam("projectDescription");
  const projectBudget = navigation.getParam("projectBudget");
  const projectDuration = navigation.getParam("projectDuration");
  const industry = navigation.getParam("industry");
  const companyName = navigation.getParam("companyName");
  const numberOfEmployees = navigation.getParam("numberOfEmployees");
  const [path, setPath] = useState(examplePath);
  const [techVal, setTechVal] = useState("");
  const [noveltyVal, setNoveltyVal] = useState("");
  const [complexityVal, setComplexityVal] = useState("");
  const [paceVal, setPaceVal] = useState("");
  const [projects, setProjects] = useState();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Success",
      "Your new project is successfully added!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Button
        title="Press the buttons (and join them by lines, optional) to make your diamond"
        onPress={() => {}}
        type="solid"
        buttonStyle={{
          backgroundColor: "#33CCFF",
        }}
        titleStyle={{ fontFamily: "sans-serif-light" }}
      />
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#E7F0F0",
          marginTop: 16,
          marginBottom: 30,
        }}
      >
        <GesturePath path={path} color="#33CCFF"></GesturePath>
        <GestureRecorder onPathChanged={setPath}></GestureRecorder>
      </View>

      <View
        style={{
          position: "absolute",
          marginTop: 80,
          marginLeft: 30,
          backgroundColor: "rgba(255, 255, 255, 0.001)",
        }}
      >
        <View
          style={{
            paddingLeft: 145,
            postion: "absolute",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "sans-serif-light",
              fontStyle: "italic",
              paddingLeft: 30,
              color: "#B4BFC3",
            }}
          >
            Technology
          </Text>
          <RadioForm
            radio_props={technology}
            initial={-1}
            onPress={(value) => {
              setTechVal(value);
              diamond[0].criteria.technology = techVal;
            }}
            buttonColor={"#33CCFF"}
            buttonSize={10}
            selectedButtonColor={"#33CCFF"}
            labelStyle={{
              fontFamily: "sans-serif-light",
              fontSize: 7,
            }}
            style={{}}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "sans-serif-light",
                  fontStyle: "italic",
                  paddingLeft: 30,
                  paddingBottom: 5,
                  color: "#B4BFC3",
                }}
              >
                Novelty
              </Text>
              <RadioForm
                radio_props={novelty}
                initial={-1}
                formHorizontal={true}
                labelHorizontal={false}
                onPress={(value) => {
                  setNoveltyVal(value);
                  diamond[0].criteria.novelty = noveltyVal;
                }}
                buttonColor={"#33CCFF"}
                buttonSize={10}
                selectedButtonColor={"#33CCFF"}
                labelStyle={{
                  fontFamily: "sans-serif-light",
                  fontSize: 7,
                }}
              />
            </View>
          </View>

          <View
            style={{
              marginLeft: 40,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontFamily: "sans-serif-light",
                fontStyle: "italic",
                paddingLeft: 30,
                paddingBottom: 5,
                color: "#B4BFC3",
              }}
            >
              Complexity
            </Text>
            <RadioForm
              radio_props={complexity}
              initial={-1}
              formHorizontal={true}
              labelHorizontal={false}
              onPress={(value) => {
                setComplexityVal(value);
                diamond[0].criteria.complexity = complexityVal;
              }}
              buttonColor={"#33CCFF"}
              buttonSize={10}
              selectedButtonColor={"#33CCFF"}
              labelStyle={{
                fontFamily: "sans-serif-light",
                fontSize: 7,
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingLeft: 145,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "sans-serif-light",

              fontStyle: "italic",
              paddingLeft: 30,
              color: "#B4BFC3",
            }}
          >
            Pace
          </Text>
          <RadioForm
            radio_props={pace}
            initial={-1}
            onPress={(value) => {
              setPaceVal(value);
              diamond[0].criteria.pace = paceVal;
            }}
            buttonColor={"#33CCFF"}
            buttonSize={10}
            selectedButtonColor={"#33CCFF"}
            labelStyle={{
              fontFamily: "sans-serif-light",

              fontSize: 7,
            }}
            style={{}}
          />
        </View>
      </View>

      <Button
        title="Save and Continue"
        onPress={async () => {
          try {
            const result = await diamondApi.post("/projects", {
              projectName,
              projectDescription,
              projectBudget,
              projectDuration,
              industry,
              companyName,
              numberOfEmployees,
              diamond,
            });
            setProjects(result.data);
          } catch (err) {
            console.log(err.response.data);
          }
          if (!projects) {
            console.log("loading...");
            return <Text>Loading...</Text>;
          } else {
            console.log("Got projects!");
            console.log(projects);
            createTwoButtonAlert();

            navigation.navigate("Recommendation", {
              diamondRecommendation: projects.recommendation[0].description,
              projectsWithSameDiamond: projects.projectsWithSameDiamond,
              projectsWithSameIndustry: projects.projectsWithSameIndustry,
            });
          }
        }}
        type="solid"
        buttonStyle={{
          backgroundColor: "#5CDD3F",
          marginHorizontal: 15,
          marginBottom: 10,
        }}
        titleStyle={{ fontFamily: "sans-serif-light" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.01)",
  },
});

NTCPDiamondScreen.navigationOptions = {
  title: "Create New Diamond",
};

export default NTCPDiamondScreen;
