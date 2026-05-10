import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, Image } from '@chakra-ui/react';
import devicon from '../assets/devicon.svg';
import ColorMooSwitch from './ColorMooSwitch';
import SearchInput from './SearchInput';
const NavBar = ({ onSearch }) => {
    return (_jsxs(HStack, { padding: '10px', children: [_jsx(Image, { src: devicon, alt: "Dev Icon", boxSize: "60px" }), _jsx(SearchInput, { onSearch: onSearch }), _jsx(ColorMooSwitch, {})] }));
};
export default NavBar;
