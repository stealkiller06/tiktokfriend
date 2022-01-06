import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store';
import StartingPage from "./src/features/auth/StartingPage";
import Home from "./src/features/Home";
import Notifications from "./src/features/Notifications";
import TikTokIconButton from "./src/components/TikTokIconButton";
import { TikTokPrimary } from "./src/_core/colors";
import Login from "./src/features/auth/Login";
import { useAppDispatch, useAppSelector } from "./src/app/hooks";
import { ActivityIndicator, View } from "react-native";
import TikTokSafeAreaView from "./src/components/TikTokSafeAreaView";
import { getCurrentUser } from "./src/api/auth/authAPI";
import { loginUser, setLoading } from "./src/features/auth/authSlice";
import Profile from "./src/features/Profile";
import Settings from "./src/features/Settings";
import SignUp from "./src/features/auth/SignUp";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Root() {
  const authState = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();


  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userRestored;

      try {
        if (userRestored) return
        userToken = await SecureStore.getItemAsync('userToken');
        userRestored = await getCurrentUser(userToken || "");
        dispatch(loginUser({ user: userRestored || null, userToken: userToken || null }));

      } catch (e) {
        // Restoring token failed
        console.log(e)
      }

      dispatch(setLoading(false))

    };

    bootstrapAsync();
  }, []);


  if (authState.loading) {
    return (
      <TikTokSafeAreaView>
        <ActivityIndicator size="large" color="black" />
      </TikTokSafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {authState.userToken == null ? (
          <>
            <Stack.Screen
              name="StartingPage"
              options={{
                headerShown: false,
              }}
              component={StartingPage}
            />
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
              component={Login}
            />
            <Stack.Screen
              name="SignUp"
              options={{
                headerShown: false,
              }}
              component={SignUp}
            />
          </>
        ) :
          (
            <>
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
                  title: "Notificaciones",
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
              <Stack.Screen
                name="Profile"
                options={{
                  title: "Profile",
                }}
                component={Profile}
              />
              <Stack.Screen
                name="Setting"
                options={{
                  title: "Configuraciones",
                }}
                component={Settings}
              />
            </>
          )
        }



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
