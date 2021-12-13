import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TikTokSafeAreaView from "../../components/TikTokSafeAreaView";
import HomeHeader from "./HomeHeader";
import HomeUserProfile from "./HomeUserProfile";

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <TikTokSafeAreaView>
      <HomeHeader />
      <HomeUserProfile />
    </TikTokSafeAreaView>
  );
}
