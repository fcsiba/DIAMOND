import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import AuthForm2 from "../components/AuthForm2";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillBlur={() => clearErrorMessage()} />
      <Image
        source={require("../../assets/splash_modified.png")}
        style={{ width: 80, height: 80, alignSelf: "center", marginTop: 50 }}
      />
      <AuthForm2
        headerText=""
        errorMessage={state.errorMessage}
        onSubmit={({ email, password }) => {
          signin({ email, password });
        }}
        submitButtonText="Sign In"
      />
      <Spacer />
      <Spacer />
      <Spacer />
      <NavLink
        text="Don't have an account? Sign up instead."
        routeName="SignUp"
      />
    </SafeAreaView>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 150,
    backgroundColor: "#fff",
  },
});

export default SignInScreen;
