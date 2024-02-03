import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatforms";
import usePlatformSearch from "../hooks/usePlatformSearch";
import useGenreSearch from "../hooks/useGenreSearch";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreSearch(gameQuery.genreId);

  const platform = usePlatformSearch(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
