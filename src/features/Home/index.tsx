import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
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
interface HomeProps { }

export default function Home(props: HomeProps) {
  const { loadingLocation, profileList, location } = useAppSelector(state => state.matchUser)
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

  useEffect(() => {
    getLocation();
  }, [])


  useEffect(() => {
    const socket = io(API);
    console.log(socket.connected)
    console.log(API)
    console.log("testing")
    socket.emit("events", "Test")
    socket.emit("events", 10)

    socket.on('connect', function () {
      console.log('Connected');
      console.log("we are connected")

      socket.emit('events', { test: 'test' });
      socket.emit('identity', 0, response =>
        console.log('Identity:', response),
      );
    });

    socket.on("error", function (err) {
      console.log(err)
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
    }

  }, [])


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
        <View style={styles.noMoreContainer}>
          <TikTokText style={styles.noMoreText}>No hay más tiktokers por tu zona</TikTokText>
          <TikTokButton onPress={() => searchForMore()}>Buscar más</TikTokButton>
        </View>
      )
    }

    return <HomeUserProfile />
  }


  return (
    <TikTokView>
      <TikTokSafeAreaView>
        <HomeHeader />
        {loadingLocation ?
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
          :
          renderProfile()
        }
      </TikTokSafeAreaView>
    </TikTokView>

  );
}

