import React, { useContext, useEffect, useReducer } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { Button } from "react-native-elements";
import { OptimizedFlatList } from "react-native-optimized-flatlist";
import Head from "../components/Head";
import { Context as UserContext } from "../context/UserContext";

const ViewProjectsScreen = ({ navigation }) => {
  const { state, fetchAllProjects } = useContext(UserContext);
  useEffect(() => {
    fetchAllProjects();
  }, []);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

  return (
    <>
      <View style={styles.container}>
        <Head headerText="Diamond" />
        <Button
          title="Current projects"
          type="solid"
          buttonStyle={{
            backgroundColor: "#CDA9FC",
          }}
          onPress={() => handleClick()}
          titleStyle={{ fontFamily: "sans-serif-light" }}
        />
        <OptimizedFlatList
          data={state}
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
                    <Text style={styles.textTitleStyle}>
                      {item.projectName}
                    </Text>
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
                        navigation.navigate("ViewProjectDetail", {
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
          extraData={state}
        />
      </View>
    </>
  );
};

ViewProjectsScreen.navigationOptions = {
  headerShown: false,
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

export default ViewProjectsScreen;
