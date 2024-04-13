import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import Person from "./components/person";

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default function App() {
  const [parliamentJson, setParliamentJson] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.lagtinget.ax/api/persons.json?state=1",
        );
        const data = await response.json();
        setParliamentJson(data);
        for (let i = 0; i < data.length; i++) {
          const person = await fetch(
            `https://api.lagtinget.ax/api/persons/${data[i].id}.json`,
          );
          const personData = await person.json();
          data[i] = { ...data[i], ...personData };
          setParliamentJson(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "darkgray" }}
    >
      <SafeAreaProvider>
        <SafeAreaView
          style={{ ...styles.container, backgroundColor: "darkgray" }}
        >
          {isLoading ? (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : (
            <>
              <Text style={{ ...styles.bigText, fontSize: 24, color: "white" }}>
                Parliament Currently Active
              </Text>
              <FlatList
                data={parliamentJson}
                renderItem={({ item }) => (
                  <Person
                    id={item.id}
                    name={item.name}
                    birth={item.birth}
                    email={item.email}
                    phone={item.phone}
                    profession={item.profession}
                    image={item.image ? item.image.url : null}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </>
          )}
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
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
