import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { Input, InputGroup } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
const SearchInput = ({ onSearch }) => {
    const ref = useRef(null);
    return (_jsx("form", { onSubmit: (e) => {
            e.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value);
            }
        }, children: _jsx(InputGroup, { startElement: _jsx(LuSearch, { color: 'gray.300' }), children: _jsx(Input, { ref: ref, borderRadius: "8px", placeholder: 'Search games...' }) }) }));
};
export default SearchInput;
