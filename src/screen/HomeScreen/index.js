import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoggedIn,
  setUserInfo,
  userSelect,
  userSlice,
} from "../../store/slices/user";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { dispatch } from "../../store/configStore";

const HomeScreen = ({ navigation }) => {
  const userInfo = useSelector(userSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const onLogout = () => {
    GoogleSignin.signOut();
    dispatch(setUserInfo({}));
    dispatch(setIsLoggedIn(false));
  };

  const getData = async () => {};
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>{JSON.stringify(userInfo.userInfo)}</Text>
      </View>
      <Button onPress={onLogout} title="Đăng xuất" />
    </View>
  );
};

export default HomeScreen;
