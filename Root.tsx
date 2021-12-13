import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingPage from "./src/features/auth/StartingPage";
import Home from "./src/features/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartingPage"
          options={{
            headerShown: false,
          }}
          component={StartingPage}
        />

        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
