import useGenre from "../hooks/useGenre";
import { HStack, Image, Text, ListItem, List } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
