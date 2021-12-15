import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingPage from "./src/features/auth/StartingPage";
import Home from "./src/features/Home";
import Notifications from "./src/features/Notifications";
import TikTokIconButton from "./src/components/TikTokIconButton";
import { TikTokPrimary } from "./src/_core/colors";

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
          <Stack.Screen
          name="Notifications"
          options={{
            // headerShown: false,
            title:"Notificaciones",
            headerRight: () => (
              <TikTokIconButton
                onPress={() => alert('This is a button!')}
                name="trash-o"
                color={TikTokPrimary}
              />
            ),
          }}
          component={Notifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
