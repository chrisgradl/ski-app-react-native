import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Avatar, Card, Title } from "react-native-paper";
import { useQuery } from "react-query";
import { fetchPersonDetail } from "../lib/skiApi";
import PersonResultGroups from "../components/PersonResultGroups";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  const { PersonId } = item;

  const { data } = useQuery(["person", PersonId], () =>
    fetchPersonDetail(PersonId)
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ marginBottom: 16, alignItems: "center" }}>
        <Avatar.Image source={{ uri: data?.PersonImage }} size={200} />
      </View>
      <Title>Results</Title>
      <Card style={{marginBottom: 16}}>
        <Card.Content>
          <Avatar.Image source={{ uri: data?.NationImage }} />
          <Title>Rang: {data?.WcRank}</Title>
          <Title>Punkte: {data?.WcPoints}</Title>
          <Title>Nation: {data?.NationName}</Title>
          <Title>Equipment: {data?.Equipment}</Title>

          <Title>Alter: {data?.Age}</Title>
          <Title>Größe: {data?.Height} cm</Title>
          <Title>Nation: {data?.NationName}</Title>
          <Title>Residence: {data?.Residence}</Title>
          <Title>Geboren am: {new Date(data?.BirthDay).toLocaleDateString()}</Title>
        </Card.Content>
      </Card>

      <PersonResultGroups groups={data?.PersonResultGroups}/>
    </ScrollView>
  );
}
