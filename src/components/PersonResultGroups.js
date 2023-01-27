import {
  Card,
  IconButton,
  Avatar,
  Title,
  Subheading,
} from "react-native-paper";

import { View } from 'react-native';

//{
// "GroupName": "Weltcup Riesenslalom",
// "PersonResults": [
// {
// "SportEventId": 11415,
// "EventDate": "2023-01-24T10:30:00",
// "Rank": "1",
// "CompetitionName": "Weltcup",
// "DisciplineName": "Riesenslalom",
// "LocationName": "Kronplatz / San Vigilio"
// },
// {
// "SportEventId": 11485,
// "EventDate": "2023-01-25T10:30:00",
// "Rank": "1",
// "CompetitionName": "Weltcup",
// "DisciplineName": "Riesenslalom",
// "LocationName": "Kronplatz / San Vigilio"
// }
// ]
// }

export default function PersonResultGroups({ groups }) {
  return groups?.map((group) => (
    <Card style={{ marginVertical: 8 }}>
      <Card.Content>
        <Title>{group.GroupName}</Title>
        {group.PersonResults.map(event => (
            <View>
                <Subheading>{event.LocationName} : {event.Rank}</Subheading>
            </View>
        ))}
      </Card.Content>
    </Card>
  ));
}
