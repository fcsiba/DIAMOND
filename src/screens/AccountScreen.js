import React, { useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";
import { Content, Card, CardItem, Body, Text } from "native-base";
import { navigate } from "../navigationRef";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/splash_modified.png")}
        style={{
          width: 80,
          height: 80,
          alignSelf: "center",
          marginTop: 50,
        }}
      />

      <Card
        style={{
          paddingVertical: 15,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewMyDiamondsFlow")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="diamond"
              size={24}
              color="#33CCFF"
              style={{ marginTop: 13, marginLeft: 3 }}
            />
            <Text
              style={{
                fontSize: 18,
                marginTop: 14,
                marginLeft: 10,
                fontFamily: "sans-serif-light",
                color: "#B4BFC3",
              }}
            >
              View your diamonds
            </Text>
          </View>
        </TouchableOpacity>
      </Card>

      <Card
        style={{
          paddingVertical: 15,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("createProjectFlow")}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="create"
              size={27}
              color="#33CCFF"
              style={{ marginTop: 12, marginLeft: 3 }}
            />
            <Text
              style={{
                fontSize: 18,
                marginTop: 14,
                marginLeft: 10,
                fontFamily: "sans-serif-light",
                color: "#B4BFC3",
              }}
            >
              Create a new diamond
            </Text>
          </View>
        </TouchableOpacity>
      </Card>

      <Card
        bordered
        style={{
          paddingVertical: 15,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={signout}>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="logout"
              size={28}
              color="#33CCFF"
              style={{ marginTop: 10, marginLeft: 3 }}
            />
            <Text
              style={{
                fontSize: 18,
                marginTop: 14,
                marginLeft: 10,
                fontFamily: "sans-serif-light",
                color: "#B4BFC3",
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "My Account",
  tabBarIcon: (
    <MaterialCommunityIcons
      name="account"
      size={27}
      color="#B4BFC3"
      style={{ marginTop: 10, marginBottom: 3 }}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 150,
    backgroundColor: "#fff",
  },
});

export default AccountScreen;
