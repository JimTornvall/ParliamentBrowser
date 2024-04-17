import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BoxShadow } from "react-native-shadow";

const shadowOpt = {
  width: 300,
  height: 300,
  color: "#000",
  border: 10,
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: { marginVertical: 5 },
};

const About = () => (
  <View style={styles.container}>
    <BoxShadow setting={shadowOpt}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 20,
          width: 300,
          height: 300,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Parliament Browser</Text>
        <Text>Version 1.0</Text>
        <Text>Author: Jim Törnvall</Text>
        <Text>--------------------</Text>
        <Text>
          A simple browser to show current Parliament members and basic
          information about them.
        </Text>
      </View>
    </BoxShadow>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#DBD7D2",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default About;
