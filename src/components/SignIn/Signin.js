import React, { useState, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import "./Signin.css";
import axios from "axios";

const Signin = ({ onLogin }) => {
  const [user, setUser] = useState({
    uid: "",
    pw: "",
  });
  let signInYn = false;
  const onChangeId = useCallback(
    (e) => {
      const newid = {
        uid: e.target.value,
        pw: user.pw,
      };
      setUser(newid);
    },
    [user]
  );
  const onChangePw = useCallback(
    (e) => {
      const newpw = {
        uid: user.uid,
        pw: e.target.value,
      };
      setUser(newpw);
    },
    [user]
  );

  const onSubmit = useCallback(
    (e) => {
      let flag = false;

      if (user.uid === "admin" && user.pw === "1111") {
        flag = true;
      }
      if (flag) {
        onLogin({ flag: true, signUpFlag: false });
      }
      /* axios
      .get("/signIn", {
        params: {
          id: user.uid,
          pw: user.pw,
        },
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      }); */
    },
    [onLogin, user]
  );
  const onSignUp = useCallback(() => {
    onLogin({ flag: false, signUpFlag: true });
  }, [onLogin]);
  return (
    <div className="login">
      <h1>Hello World</h1>
      <form className="signInForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={user.uid}
          onChange={onChangeId}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={user.pw}
          onChange={onChangePw}
        ></input>
        |<Input type="submit" value="SignIn"></Input> |
        <Input type="button" value="SignUp" onClick={onSignUp}></Input>|
      </form>
    </div>
  );
};

export default Signin;
