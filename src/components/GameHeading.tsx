import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const genre = useGenre(genreID);
  const platform = usePlatform(platformID);
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {`${platform?.name || ""} ${genre?.name || ""} Games`}
    </Heading>
  );
};

export default GameHeading;
