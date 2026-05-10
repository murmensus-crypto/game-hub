import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
const GameCardSkeleton = () => {
    return (_jsxs(Card.Root, { children: [_jsx(Skeleton, { height: "200px" }), _jsx(CardBody, { children: _jsx(SkeletonText, {}) })] }));
};
export default GameCardSkeleton;
