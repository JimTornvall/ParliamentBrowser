import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

import PersonDetails from "./components/personDetails";
import AboutScreen from "./screens/about";
import HomeScreen from "./screens/home"; // Import the HomeScreen component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("About")}
                title="About"
                color="darkgray"
              />
            ),
          })}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetailsScreen}
          options={({ route }) => ({ title: route.params.item.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ItemDetailsScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <PersonDetails item={item} />
    </View>
  );
}

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
