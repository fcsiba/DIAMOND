import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillBlur={() => clearErrorMessage()} />
      <Image
        source={require("../../assets/splash_modified.png")}
        style={{ width: 80, height: 80, alignSelf: "center", marginTop: 50 }}
      />
      <AuthForm
        headerText=""
        errorMessage={state.errorMessage}
        onSubmit={({ name, email, password }) =>
          signup({ name, email, password })
        }
        submitButtonText="Sign Up"
      />
      <Spacer />
      <Spacer />
      <Spacer />
      <NavLink
        routeName="SignIn"
        text="Already have an account? Sign in instead."
      />
    </SafeAreaView>
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //marginBottom: 150,
    //marginTop: 50,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
});

export default SignUpScreen;
