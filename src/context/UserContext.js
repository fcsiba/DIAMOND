import createDataContext from "./createDataContext";
import diamondApi from "../api/diamondApi";

const userReducer = (state, action) => {
  switch (action.type) {
    case "fetch_all_projects":
      return action.payload;
    case "fetch_user_projects":
      return action.payload;

    default:
      return state;
  }
};

const fetchAllProjects = (dispatch) => async () => {
  const response = await diamondApi.get("/allProjects");
  dispatch({
    type: "fetch_all_projects",
    payload: response.data,
  });
};

const fetchUserProjects = (dispatch) => async () => {
  const response = await diamondApi.get("/projects");
  dispatch({
    type: "fetch_user_projects",
    payload: response.data,
  });
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { fetchAllProjects, fetchUserProjects },
  []
);
