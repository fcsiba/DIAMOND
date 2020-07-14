import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Head = () => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={require("../../assets/splash_modified.png")}
        style={{
          width: 45,
          height: 45,
          alignSelf: "center",
          marginBottom: 35,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 9,
    position: "relative",
  },
  textStyle: {
    textAlign: "center",
    flex: 1,
    fontSize: 25,
  },
});

export default Head;
