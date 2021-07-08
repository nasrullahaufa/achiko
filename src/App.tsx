import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@ionic/react/css/ionic.bundle.css";
import {
  IonApp,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { RootState } from "./store/";
function App() {
  const isLogin = useSelector((state: RootState) => state.isLogin);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/new" component={NewItem} /> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
