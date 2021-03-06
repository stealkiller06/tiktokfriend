import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TikTokSafeAreaView from "../../components/TikTokSafeAreaView";
import TikTokView from "../../components/TikTokViewPage";
import HomeHeader from "./HomeHeader";
import HomeUserProfile from "./HomeUserProfile";
import styles from './styles'
import * as Location from 'expo-location';
import { sendGetProfileListRequest, setLoadingLocation, setLocation } from "./matchUserSlice";
import TikTokText from "../../components/TiktokText";
import TikTokButton from "../../components/TikTokButton";
import { io } from 'socket.io-client';
import { API } from "../../../config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Animated, { FadeIn } from "react-native-reanimated";
import TikTokDonationButton from "../../components/TikToKDonationButton";

export default function Home({ navigation }: NativeStackScreenProps<RootStackParamList>) {
  const { loadingLocation, profileList, location } = useAppSelector(state => state.matchUser)
  const user = useAppSelector(state => state.auth.user)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const userToken = useAppSelector(state => state.auth.userToken)
  const dispatch = useAppDispatch();
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Mensaje", "La ubicación es necesaria.")
      throw new Error("Location is required")
    }

    let location = await Location.getCurrentPositionAsync({});
    dispatch(setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude }))
    dispatch(setLoadingLocation(false))
    setIsFirstLoad(false)
    return location;
  }


  function searchForMore() {
    dispatch(setLoadingLocation(true))
    dispatch(sendGetProfileListRequest(location?.latitude || 0,
      location?.longitude || 0
      ,
      userToken || ""))
    dispatch(setLoadingLocation(false))
  }
  function renderProfile() {
    if (!profileList.length && !isFirstLoad) {
      return (
        <View style={{ flex: 1 }}>
          <Animated.View
            entering={FadeIn.duration(1500)}
            style={styles.noMoreContainer}>
            <TikTokText style={styles.noMoreText}>No hay más tiktokers por tu zona</TikTokText>
            <TikTokButton onPress={() => searchForMore()}>Buscar más</TikTokButton>


          </Animated.View>

          <TikTokDonationButton style={{ marginTop: 80 }} />

        </View>
      )
    }



    return (
      <View style={styles.profileContainer}>
        {profileList.map((userProfile, index) => <HomeUserProfile index={index} key={userProfile._id} user={userProfile} />)}
      </View>
    )
  }

  useEffect(() => {
    getLocation();
  }, [])

  useEffect(() => {
    if (location) {
      searchForMore()
    }
  }, [location])


  useEffect(() => {
    const socket = io(API, {});
    socket.on('connect', function () {
      console.log('Connected');
      console.log(user?._id)
      socket.emit("joinMyRoom", user?._id);
    });

    socket.on("matched", msg => {
      console.log("nuevo match")
      Alert.alert("Nuevo Match", "Tienes un nuevo match",
        [
          { text: "Ok", onPress: () => navigation.navigate("Notifications") }
        ]
      )
    })




    socket.on("error", function (err) {
      console.log(err)
      console.log("this is the error")
    })
    socket.on('events', function (data) {
      console.log('event', data);
    });
    socket.on('disconnect', function () {
      console.log('Disconnected');
    });

    socket.on('connect_failed', function (err) {
      console.log(err)
      console.log("this is connection error")
    })

    return () => {
      socket.off('events')
      socket.off('error')
      socket.off('disconnect')
      socket.off('connect_failed')
      socket.off("matched")
      socket.off("test")
    }

  }, [user])





  return (
    <TikTokSafeAreaView style={{ paddingTop: 0 }}>
      <HomeHeader />
      {loadingLocation ?
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
        :
        renderProfile()
      }
    </TikTokSafeAreaView>

  );
}

