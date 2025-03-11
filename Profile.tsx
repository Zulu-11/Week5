import React from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";

const Profile = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}'s Profile</Text>

      <Image source={{ uri: user.photo_url }} style={styles.profileImage} />
      <Text style={styles.infoText}>Name: {user.name}</Text>
      <Text style={styles.infoText}>Email: {user.email}</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.navigate("UserList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8
  }
});

export default Profile;
