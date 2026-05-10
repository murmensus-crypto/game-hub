import { jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from '@chakra-ui/react';
const CriticScore = ({ score }) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    return (_jsxs(Badge, { colorScheme: color, fontSize: '14px', paddingX: 2, borderRadius: '4px', children: [" ", score, " "] }));
};
export default CriticScore;
