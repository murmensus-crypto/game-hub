import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
const GameGrid = ({ gameQuery }) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6,];
    return (_jsx(_Fragment, { children: _jsxs(SimpleGrid, { columns: { sm: 1, md: 2, lg: 3, xl: 5 }, padding: '10px', gap: 6, children: [isLoading && skeletons.map(skeleton => _jsx(GameCardContainer, { children: _jsx(GameCardSkeleton, {}) }, skeleton)), data.map(game => (_jsx(GameCardContainer, { children: _jsx(GameCard, { game: game }) }, game.id)))] }) }));
};
export default GameGrid;
