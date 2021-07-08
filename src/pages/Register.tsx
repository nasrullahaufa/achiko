import React from "react";
import logo from "./logo.svg";
import Toast from "../helpers/swalToast";
import "../App.css";
import "@ionic/react/css/ionic.bundle.css";
import {
  IonApp,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonHeader,
  IonTitle,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/action";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  }
  function handleRepeatPasswordChange(e: any) {
    setRepeatPassword(e.target.value);
  }
  function submitRegister(e: any) {
    console.log(email, password, repeatPassword);
    e.preventDefault();
    if (password !== repeatPassword) {
      Toast.fire({
        icon: "error",
        title: "Password did not match",
      });
    } else {
      dispatch(register({ email, password }));
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <form className="ion-padding" onSubmit={submitRegister}>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput onIonChange={handleEmailChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" onIonChange={handlePasswordChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" onIonChange={handleRepeatPasswordChange} />
        </IonItem>

        <IonButton className="ion-margin-top" type="submit" expand="block">
          Register
        </IonButton>
      </form>
    </IonPage>
  );
};
export default Register;
