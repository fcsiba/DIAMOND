import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Spacer from "./Spacer";
import Loader from "./Loader";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Loader loading={loading} />
      <Spacer>
        <Text h3 style={{ textAlign: "center" }}>
          {headerText}
        </Text>
      </Spacer>
      <Input
        label="Full Name"
        value={name}
        onChangeText={(newName) => setName(newName)}
        autoCorrect={false}
        labelStyle={{
          fontFamily: "sans-serif-light",
        }}
        leftIcon={<Ionicons name="ios-person" size={24} color="#B4BFC3" />}
        inputStyle={{
          fontFamily: "sans-serif-light",
        }}
        placeholder="Name"
      />

      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        labelStyle={{
          fontFamily: "sans-serif-light",
        }}
        leftIcon={<MaterialIcons name="email" size={20} color="#B4BFC3" />}
        inputStyle={{
          fontFamily: "sans-serif-light",
        }}
        placeholder="example@email.com"
      />

      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        labelStyle={{
          fontFamily: "sans-serif-light",
        }}
        leftIcon={<Entypo name="lock" size={20} color="#B4BFC3" />}
        inputStyle={{
          fontFamily: "sans-serif-light",
        }}
        placeholder="Password"
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ name, email, password });
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2500);
          }}
          type="solid"
          buttonStyle={{
            backgroundColor: "#33CCFF",
            marginHorizontal: 15,
          }}
          titleStyle={{ fontFamily: "sans-serif-light" }}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginHorizontal: 18,
    color: "red",
    fontFamily: "sans-serif-light",
  },
});

export default AuthForm;
