import { Card, IconButton, Avatar, Title, Subheading } from "react-native-paper";

export default function PersonRanking({ personRanking, onPress }) {
  const { FirstName, LastName, PersonImage, Value, Rank } = personRanking;

  return (
    <Card style={{ marginVertical: 8 }} onPress={onPress}>
      <Card.Title
        title={FirstName}
        subtitle={LastName}
        left={(props) => (
          <Avatar.Image {...props} source={{ uri: PersonImage }} />
        )}
      />
      <Card.Content>
        <Subheading>Rang: {Rank}</Subheading>
          <Subheading>Punkte: {Value}</Subheading>
      </Card.Content>
    </Card>
  );
}
