import { Avatar } from "@rneui/themed";
import { Asset } from "expo-asset";
import * as React from "react";
import { Text } from "react-native";
import { List } from "react-native-paper";

const Person = ({ id, name, birth, email, phone, profession, image }) => {
  const [imgUri, setImgUri] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (image) {
        const asset = Asset.fromURI(image);
        await asset.downloadAsync();
        setImgUri(asset.localUri);
      }
    })();
  }, [image]);

  return (
    <List.Item
      title={
        <Text>
          {`${name} `}
          <Text style={{ fontSize: 12 }}>({id.toLowerCase()})</Text>
        </Text>
      }
      description={`${email ? `Email: ${email}\n` : ""}${
        phone ? `Phone: ${phone}\n` : ""
      }${profession ? `Profession: ${profession}` : ""}`}
      descriptionNumberOfLines={3}
      left={(props) => (
        <>
          {imgUri ? (
            <Avatar
              size={64}
              rounded
              source={{ uri: imgUri }}
              key={`avatar-${id}`}
            />
          ) : (
            <Avatar
              size={64}
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "lightgray" }}
            />
          )}
        </>
      )}
      style={{
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#000",
      }}
    />
  );
};

export default Person;
