import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@chakra-ui/react';
export const GameCardContainer = ({ children }) => {
    return (_jsx(Box, { borderRadius: 10, overflow: 'hidden', children: children }));
};
