import InitialData from "../initialData";

let myReducer = (state = InitialData, action) => {
  switch (action.type) {
    case "USER":
      {
        state = {
          ...state,
          userInformation: action.payload,
        };
      }
      break;
    case "POST": {
      state = {
        ...state,
        postInformation: action.payload,
      };
    }
  }
  return state;
};
export default myReducer;
