import { Redirect } from "react-router";
import Toast from "../helpers/swalToast";

import { hashPassword, checkPassword } from "../helpers/hashPassword";

// const server = "http://localhost:3001"
const server =
  "https://achiko-8b296-default-rtdb.asia-southeast1.firebasedatabase.app/";
var userInfo = "";
let u = "";
export function setUser(payload: any) {
  return { type: "SET_USER", payload };
}
export function setLogin(payload: any) {
  console.log("setlog");
  return { type: "SET_LOGIN", payload };
}

export function login(payload: any) {
  return function (dispatch: any) {
    console.log("action", payload);
    fetch(server + "users.json", {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let users = [];
        for (let i in result) {
          users.push(result[i]);
        }
        console.log(users);

        const user = users.filter((u: any) => u.email === payload.email);

        if (user.length == 0) {
          Toast.fire({
            icon: "error",
            title: "User tidak terdaftar",
          });
        } else {
          console.log(user[0]);
          var checkedPassword = checkPassword(
            payload.password,
            user[0].password
          );
          console.log(checkedPassword);
          if (!checkedPassword) {
            Toast.fire({
              icon: "error",
              title: "Password salah",
            });
          } else {
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(setLogin(true));
            dispatch(setUser(user))
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function register(payload: any) {
  console.log(payload);
  return function (dispatch: any) {
    fetch(server + "users.json", {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let users = [];
        for (let i in result) {
          users.push(result[i]);
        }
        console.log(users);
        const user = users.filter((u: any) => u.email === payload.email);

        if (user.length !== 0) {
          Toast.fire({
            icon: "error",
            title: "email sudah terdaftar",
          });
        } else {
          var hashedPassword = hashPassword(payload.password);
          return fetch(server + "users.json", {
            method: "POST",

            body: JSON.stringify({
              email: payload.email,
              password: hashedPassword,
            }),

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };
}
