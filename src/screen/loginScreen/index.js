import React from "react";
import { Button, View } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setUserInfo } from "../../store/slices/user";

GoogleSignin.configure({
  webClientId:
    // "319062689013-u17p7i49gkvjmuidk3b43lnfi4e72n8l.apps.googleusercontent.com",
    "1017306312727-aeitpvok0v4mgaguk241fjn5s0o512nm.apps.googleusercontent.com",
  offlineAccess: false,
  scopes: ["profile", "email"],
  forceCodeForRefreshToken: false,
});

function App({ navigation }) {
  const dispatch = useDispatch();
  const body =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk5YmNiMDY5MzQwYTNmMTQ3NDYyNzk0ZGZlZmE3NWU3OTk2MTM2MzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODc4NzEyODMsImF1ZCI6IjMxOTA2MjY4OTAxMy1ma3U2bTU0dmYzYXJiaHJub2lpajg0cWIwZTg1Mm8yOC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzAwMjMwNjI5NTk3NzQ3MjM4MiIsImVtYWlsIjoiY3Vvbmd0dTUzMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMzE5MDYyNjg5MDEzLWZrdTZtNTR2ZjNhcmJocm5vaWlqODRxYjBlODUybzI4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IsSQ4bupYyBDxrDhu51uZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkdHZqaXNXYWxkTVppaWJpOTI4MjJEc190UlZ0Y0pveDZBeEg0Vjc5Z1E9czk2LWMiLCJnaXZlbl9uYW1lIjoixJDhu6ljIEPGsOG7nW5nIiwiaWF0IjoxNjg3ODcxNTgzLCJleHAiOjE2ODc4NzUxODMsImp0aSI6IjVkNTJjMjBhNDQwZjAwMDg5YzZlYjg3MTVlMmZhZDRiZWMxMGQxMjAifQ.QcoFCHtSMWz3t30iArO2Y4dO_IeFtHNUxN6UCMxQHh-WdtHDRBQDvBoOj_qBMGDVIq7zW69EiU_hefClZWySqQ-RVh9d7NEWdj7qygzUbaKlW_XrBGq2Bp5n7YvETkyZlbdpnJWbl5qlqIl1EyiIFyQ_m-ZianjljML68OQz7Ma40ocOjM2Gotuyxon_xVaQI36aMDrkpiVYqet71RO-vna_SSaVRIv0e-50-etEJUNe5PASYc5uh1pv_byLIIqyHKXwolbGj-Hxa6Jp4dAgxM1_GbmjDg9TW4euWdYg2QfGt0Ps-uuixAGPsAgGdF1vnJ2x7LD7vWx_ssRij8ZBIg";
  const onLogin = async (idToken) => {
    const result = await axios({
      url: "https://fbus-swp.azurewebsites.net/api/Auth",
      method: "POST",
      data: body,
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    navigation.navigate("HomeScreen");
    console.log("=====result====", result.data);
  };

  const onLoginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo?.idToken) {
        dispatch(setUserInfo(userInfo.user));
        dispatch(setIsLoggedIn(true));
      }
    } catch (error) {
      console.log("====error=====", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <GoogleSigninButton onPress={onLoginGoogle} />
    </View>
  );
}

export default App;
