import React from "react";
import { Text, View, ListView } from "react-native";
import styles from "./styles";

class Event extends React.Component {
  static navigationOptions = {
    title: "Events"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default Event;
