import React from "react";
import TikTokSafeAreaView from "../../components/TikTokSafeAreaView";
import TikTokView from "../../components/TikTokViewPage";
import HomeHeader from "./HomeHeader";
import HomeUserProfile from "./HomeUserProfile";

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <TikTokView>
      <TikTokSafeAreaView>
        <HomeHeader />
        <HomeUserProfile />
      </TikTokSafeAreaView>
    </TikTokView>

  );
}
