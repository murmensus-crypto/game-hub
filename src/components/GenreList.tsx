import React from 'react'
import useGenres, { Genres } from '../hooks/useGenre';
import useData from '@/hooks/useData';
import { Heading, List } from '@chakra-ui/react';
import { ListItem } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import getCropImageUrl from '@/Services/image-url';
import { Text, Spinner, Button} from '@chakra-ui/react';

interface Props{
    onSelectGenre: (genre: Genres) => void;
    selectedGenre : Genres | null;
}
export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const {data, isLoading, error}=useGenres();

    if (isLoading) return <Spinner/>;
  
    return (
<>
    <Heading as="h2" fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List.Root>    

        {data?.results.map(genre => <List.Item key={genre.id} paddingY='5px'>
            <HStack>        
                <Image boxSize='32px' borderRadius={8} objectFit="cover" src={getCropImageUrl(genre.image_background)} />
                <Button whiteSpace='normal' textAlign="left" textWrap= "wrap"  fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='plain'>  {genre.name}</Button>
            </HStack>
        </List.Item>)}
    </List.Root>
</>
  )
}
