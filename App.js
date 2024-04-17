import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Button } from "react-native";

import AboutScreen from "./screens/about";
import ItemDetailsScreen from "./screens/details";
import HomeScreen from "./screens/home";

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
