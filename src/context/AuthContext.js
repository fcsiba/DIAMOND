import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import diamondApi from "../api/diamondApi";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signout":
      return { token: null, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await diamondApi.post("/signup", {
      name,
      email,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);

    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up. Try again.",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await diamondApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      type: "signin",
      payload: response.data.token,
    });
    navigate("mainFlow");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in. Try again.",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({
    type: "signout",
  });
  navigate("loginFlow");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({
    type: "clear_error_message",
  });
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({
      type: "signin",
      payload: token,
    });

    navigate("mainFlow");
  } else {
    navigate("loginFlow");
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
