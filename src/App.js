import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = () => {
  const appID = 1107891783507263;
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      // User is logged in, handle the response here
      console.log(response);
    } else {
      // User cancelled the login
      console.log("Login cancelled");
    }
  };

  return (
    <div>
      <h2>Login with Facebook</h2>
      <FacebookLogin
        appId={appID}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
  );
};

export default FacebookLoginButton;
