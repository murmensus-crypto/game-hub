import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useGenres from '../hooks/useGenre';
import { Heading, List } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCropImageUrl from '@/Services/image-url';
import { Spinner, Button } from '@chakra-ui/react';
export const GenreList = ({ selectedGenre, onSelectGenre }) => {
    const { data, isLoading, error } = useGenres();
    if (isLoading)
        return _jsx(Spinner, {});
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { as: "h2", fontSize: "2xl", marginBottom: 3, children: "Genres" }), _jsx(List.Root, { children: data?.results.map(genre => _jsx(List.Item, { paddingY: '5px', children: _jsxs(HStack, { children: [_jsx(Image, { boxSize: '32px', borderRadius: 8, objectFit: "cover", src: getCropImageUrl(genre.image_background) }), _jsxs(Button, { whiteSpace: 'normal', textAlign: "left", textWrap: "wrap", fontWeight: selectedGenre?.id === genre.id ? 'bold' : 'normal', onClick: () => onSelectGenre(genre), fontSize: 'lg', variant: 'plain', children: ["  ", genre.name] })] }) }, genre.id)) })] }));
};
