import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { SortSelector } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Flex } from "@chakra-ui/react";
function App() {
    const [gameQuery, setGameQuery] = useState({});
    return (_jsxs(Grid, { templateAreas: { base: '"nav main"',
            lg: '"nav nav" "aside main"', }, templateColumns: { base: '1fr', lg: '200px 1fr' }, children: [_jsx(GridItem, { area: "nav", children: _jsx(NavBar, { onSearch: (searchText) => setGameQuery({ ...gameQuery, searchText }) }) }), _jsx(Box, { hideBelow: "lg", children: _jsx(GridItem, { area: "aside", bg: "blue", paddingX: "5px", children: _jsx(GenreList, { selectedGenre: gameQuery.genre, onSelectGenre: (genre) => setGameQuery({ ...gameQuery, genre }) }) }) }), _jsxs(GridItem, { area: "main", children: [_jsxs(Box, { paddingLeft: 5, children: [_jsx(GameHeading, { gameQuery: gameQuery }), _jsxs(Flex, { marginBottom: 5, children: [_jsx(Box, { marginRight: 5, children: _jsx(PlatformSelector, { selectedPlatform: gameQuery.platform, onSelectPlatform: (platform) => setGameQuery({ ...gameQuery, platform }) }) }), _jsx(SortSelector, { sortOrder: gameQuery.sortOrder, onSelectSOrtOrder: (sortOrder) => setGameQuery({ ...gameQuery, sortOrder }) })] })] }), _jsx(GameGrid, { gameQuery: gameQuery })] })] }));
}
export default App;
