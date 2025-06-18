import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Subscriptions from "@/components/Subscriptions";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{flex: 1}}>
      <Home />
      <Subscriptions />
      <Profile />
    </View>
  );
}
