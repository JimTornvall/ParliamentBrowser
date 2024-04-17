import { StyleSheet, View } from "react-native";

import PersonDetails from "../components/personDetails";
function Details({ route }) {
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

export default Details;