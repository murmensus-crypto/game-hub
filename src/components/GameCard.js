import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, Heading, Card, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from './CriticScore';
import getCropImageUrl from '../Services/image-url';
import Emoji from './Emoji';
export const GameCard = ({ game }) => {
    return (_jsxs(Card.Root, { children: [_jsx(Image, { src: getCropImageUrl(game.background_image), alt: game.name }), _jsxs(Card.Body, { children: [_jsxs(HStack, { justifyContent: "space-between", marginY: 2, marginBottom: 3, children: [_jsx(PlatformIconList, { platforms: game.parent_platforms.map(p => p.platform) }), _jsx(CriticScore, { score: game.metacritic })] }), _jsxs(Heading, { fontSize: "1xl", children: ["  ", game.name, " ", _jsx(Emoji, { rating: game.rating_top }), " "] })] })] }));
};
