import React, { useEffect, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { Context as UserContext } from "../context/UserContext";
import { OptimizedFlatList } from "react-native-optimized-flatlist";

const ViewMyDiamondsScreen = ({ navigation }) => {
  const { state, fetchUserProjects } = useContext(UserContext);
  useEffect(() => {
    fetchUserProjects();
  }, []);

  return (
    <>
      <View style={styles.container}>
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
        />
      </View>
    </>
  );
};

ViewMyDiamondsScreen.navigationOptions = {
  title: "Projects Made By You",
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

export default ViewMyDiamondsScreen;
