import React from "react";
import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./App.styles"; 
import userData from "./data.json"; 

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user) => (
        <View style={styles.card} key={user.name}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate("Profile", { user })}
          >
            <Image
              source={{ uri: user.photo_url }}
              style={styles.avatar}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.boldText}>{user.name}</Text>
              <Text>{user.email}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserList;
