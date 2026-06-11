import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { GenreList } from "./components/GenreList"
import { useState } from "react";
import { Genres } from "./hooks/useGenre";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Flex } from "@chakra-ui/react";


export interface GameQuery{
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);


  return (
    <Grid templateAreas={{base :'"nav main"',
    lg: '"nav nav" "aside main"',}}
    templateColumns={{base: '1fr', lg: '200px 1fr'}}>
      <GridItem area="nav" >
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Box hideBelow="lg">
        
         <GridItem area="aside" paddingX="6px"><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} /></GridItem>

      </Box>  
      <GridItem area="main">
        <Box  paddingLeft={8}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              < PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSOrtOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </Flex>
        </Box>
          <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App
