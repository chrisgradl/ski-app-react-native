import * as React from "react";
import { View, Text, Button, FlatList, RefreshControl } from "react-native";
import PersonRanking from "../components/PersonRanking";
import { useQuery } from "react-query";
import { fetchWorldCupMale } from "../lib/skiApi";

export default function ListScreen({ navigation }) {
  const { data, refetch, isLoading, isRefetching } = useQuery(
    "worldCupMale",
    fetchWorldCupMale
  );


  console.log(isRefetching);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading || isRefetching} onRefresh={refetch} />
      }
      data={data?.PersonRankings}
      contentContainerStyle={{  paddingHorizontal: 16 }}
      renderItem={({ item }) => (
        <PersonRanking
          personRanking={item}
          onPress={() => navigation.navigate("DetailScreen", { item })}
        />
      )}
    />
  );
}
