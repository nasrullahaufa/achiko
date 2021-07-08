import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const intialState = {
  user:{email:'',name:''},
  isLogin:false
};

function reducer(state = intialState, action:any) {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOGIN":
      return { ...state, isLogin: payload };
    case "SET_USER":
      return { ...state, user: payload };
  

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof store.getState>