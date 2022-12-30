import { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";

const LandingNewsFeed = () => {
  const data = useMemo(() => {
    let results = [
      { name: "ABC", image: "/", description: "This is an article" },
      { name: "ABC", image: "/", description: "This is an article" },
      { name: "ABC", image: "/", description: "This is an article" },
      { name: "ABC", image: "/", description: "This is an article" },
    ];

    return results;
  }, []);

  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: 18, padding: 10 }}>News Feed</Text>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => {
          return (
            <NewsBlock>
              <Text>{item.name}</Text>
              <Text>{item.image}</Text>
              <Text>{item.description}</Text>
            </NewsBlock>
          );
        }}
        keyExtractor={(item, idx) => item.name + idx.toString()}
        // extraData={selectedId}
      />
    </View>
  );
};

const NewsBlock = styled.View`
  border: 1px solid black;
  padding: 20px;
  height: 200px;
  width: 200px;
  border-radius: 12px;
`;

export default LandingNewsFeed;
