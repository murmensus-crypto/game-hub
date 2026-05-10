import { jsx as _jsx } from "react/jsx-runtime";
import { Heading } from '@chakra-ui/react';
const GameHeading = ({ gameQuery }) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;
    return (_jsx(Heading, { as: "h1", marginY: 5, fontSize: "5xl", children: heading }));
};
export default GameHeading;
