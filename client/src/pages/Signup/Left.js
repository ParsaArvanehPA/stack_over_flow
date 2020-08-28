import React, { useState } from "react";
import InputBox from "./InputBox";
import axios from "axios";

import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

const Left = (props) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  console.log(userInfo);

  const changeHandler = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === "username") {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        userName: value,
      }));
    }
    if (name === "email") {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        email: value,
      }));
    }
    if (name === "password") {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        password: value,
      }));
    }
  };

  const signupHandler = async () => {
    const result = await axios.post("http://localhost:4000/user-auth/sing-up", {
      userName: userInfo.userName,
      password: userInfo.password,
      email: userInfo.email,
    });

    if (result.data.error) {
      alert(result.data.error);
    } else {
      alert(result.data.message);
    }

    console.log(result);
  };

  return (
    <div className="left">
      <div className="left__title">Join Us Now !</div>
      <InputBox
        type="text"
        name="username"
        placeholder="Username"
        icon={<PersonIcon />}
        changeHandler={changeHandler}
      />
      <InputBox
        type="email"
        name="email"
        placeholder="Email"
        icon={<EmailIcon />}
        changeHandler={changeHandler}
      />
      <InputBox
        type="password"
        name="password"
        placeholder="Password"
        icon={<LockIcon />}
        changeHandler={changeHandler}
      />

      <div className="button button--primary" onClick={signupHandler}>
        SIGN UP
      </div>
    </div>
  );
};

export default Left;
