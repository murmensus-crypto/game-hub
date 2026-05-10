import React from 'react'
import {Game} from "../hooks/useGames"
import { Image, Heading, Card, HStack } from "@chakra-ui/react";
import {PlatformIconList} from "./PlatformIconList";
import CriticScore from './CriticScore';
import getCropImageUrl from '../Services/image-url';
import Emoji from './Emoji';


interface Props{    
    game: Game
}

export const GameCard = ({game}: Props) => {
  return (
   <Card.Root>

    <Image src={getCropImageUrl(game.background_image)} alt={game.name}/>
    <Card.Body>
      
       <HStack justifyContent="space-between" marginY={2} marginBottom={3}>
       <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}/> 
      </HStack>
      <Heading fontSize="1xl">  {game.name} <Emoji rating={game.rating_top}/ > </Heading>
    </Card.Body>    

   </Card.Root>
  )
}
