import {FaWindows, FaApple, FaXbox, FaPlaystation, FaLinux, FaAndroid } 

from "react-icons/fa";
import {MdPhone} from "react-icons/md"
import { SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import {Platform} from "../hooks/useGames"
import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";

interface Props{
    platforms: Platform[];
}

export const PlatformIconList = ({platforms}: Props) => {

    const iconMap:{[key: string]: IconType}={
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        android: FaAndroid,
        ios: FaApple,
        mac: FaApple,
        linux: FaLinux,
        web: BsGlobe

    }
  return (
    <HStack marginY={2}> 
   {platforms.map(platform =>(<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>))}
   </HStack>
  )
}
