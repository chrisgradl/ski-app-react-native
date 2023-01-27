import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Avatar, Card, Title } from "react-native-paper";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  console.log(item);

  const { Rank, Value, PersonImage, NationImage, NationCC3 } = item;

  return (
    <ScrollView contentContainerStyle={{ flex: 1, padding: 16 }}>
      <View style={{ marginBottom: 16, alignItems: "center" }}>
        <Avatar.Image source={{ uri: PersonImage }} size={200} />
      </View>
      <Card>
        <Card.Content>
          <Avatar.Image source={{ uri: NationImage }} />
          <Title>Rang: {Rank}</Title>
          <Title>Punkte: {Value}</Title>
          <Title>Nation: {NationCC3}</Title>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
