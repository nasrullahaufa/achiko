import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "../App.css";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "@ionic/react/css/ionic.bundle.css";
import {
  IonApp,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
} from "@ionic/react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/action";
import { RootState } from "../store/";
import { Redirect, Route } from "react-router";
import { createBrowserHistory } from "history";
const Login: React.FC = () => {
  const isLogin = useSelector((state: RootState) => state.isLogin);

  const history = createBrowserHistory();
  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      history.push("/profile");
    }
  }, [isLogin]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  }

  function submitLogin(e: any) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login{isLogin}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <form className="ion-padding" onSubmit={submitLogin}>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput onIonChange={handleEmailChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" onIonChange={handlePasswordChange} />
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Remember me</IonLabel>
          <IonCheckbox defaultChecked={true} slot="start" />
        </IonItem>
        <IonButton className="ion-margin-top" type="submit" expand="block">
          Login
        </IonButton>
      </form>
    </IonPage>
  );
};
export default Login;
