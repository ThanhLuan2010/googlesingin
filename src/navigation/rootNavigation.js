import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from '../screen/loginScreen'
import HomeScreen from "../screen/HomeScreen";


const Stack = createStackNavigator();

export default function MainContainer() {
  // const { isLoggedIn } = useSelector(userSelect);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
           

          </>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
