import * as React from "react";
import { Text, Image, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  if (age < 18) {
    return null;
  }
  return age;
};

const PersonDetails = ({ item }) => {
  const age = calculateAge(item.birthday);

  return (
    <>
      {item.image?.url ? (
        <Image
          source={{ uri: item.image.url }}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <>
          <Icon name="user" size={200} color="gray" />
        </>
      )}
      <View style={{ alignItems: "flex-start" }}>
        {item.name && <Text>Name: {item.name}</Text>}
        {item.email && <Text>Email: {item.email}</Text>}
        {item.phone && <Text>Phone: {item.phone}</Text>}
        {item.profession && <Text>Profession: {item.profession}</Text>}
        {item.birthday && (
          <Text>
            {age ? `Age: ${age} years` : `Birthday: ${item.birthday}`}
          </Text>
        )}
        {item.city && <Text>City: {item.city}</Text>}
      </View>
    </>
  );
};

export default PersonDetails;
