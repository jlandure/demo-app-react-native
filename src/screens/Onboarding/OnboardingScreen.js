import { Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

export default class OnboardingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Onboarding",
  });

  constructor(props) {
    super(props);
  }

  onDone() {
    console.log("OnDone");
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <Onboarding
        showSkip={false}
        onDone={() => this.onDone()}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../../assets/onboarding/circle.png")}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fe6e58",
            image: (
              <Image
                source={require("../../../assets/onboarding/square.png")}
              />
            ),
            title: "The Title",
            subtitle: "This is the subtitle that sumplements the title.",
          },
          {
            backgroundColor: "#999",
            image: (
              <Image
                source={require("../../../assets/onboarding/triangle.png")}
              />
            ),
            title: "Triangle",
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
    );
  }
}
