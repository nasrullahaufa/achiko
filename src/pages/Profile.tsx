import React from "react";
import logo from "./logo.svg";
import "../App.css";
import "@ionic/react/css/ionic.bundle.css";
import {
  IonApp,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonChip,
  IonPage
} from "@ionic/react";
import { RootState } from "../store/";
import { useDispatch, useSelector } from "react-redux";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
      <IonPage>

    <div className="card-body">
      <div className="user-meta ion-text-center">
        <h3 className="playername">{user.email}</h3>
        <h5 className="country">{user.name}</h5>
        <h6 className="ranking">
          Current ranking:{" "}
          <IonChip>
            <IonLabel>2</IonLabel>
          </IonChip>
        </h6>
      </div>
      <IonButton expand="full" color="primary">
        http://rogerfederer.com
      </IonButton>
      <IonButton expand="full" color="secondary">
        @RogerFederer on Twitter
      </IonButton>
      <IonButton expand="full" color="secondary">
        View profile at ATP
      </IonButton>
    </div>
      </IonPage>
  );
};
export default Profile;
