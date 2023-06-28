import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screen/loginScreen";
import HomeScreen from "../screen/HomeScreen";
import { useSelector } from "react-redux";
import { userSelect } from "../store/slices/user";

const Stack = createStackNavigator();

export default function MainContainer() {
  const { isLoggedIn } = useSelector(userSelect);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <>
            {isLoggedIn ? (
              <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
            ) : (
              <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            )}
          </>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
