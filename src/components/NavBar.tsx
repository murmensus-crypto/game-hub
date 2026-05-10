import { Steps, HStack, Image } from '@chakra-ui/react';
import devicon from '../assets/devicon.svg';
import ColorMooSwitch from './ColorMooSwitch';
import SearchInput from './SearchInput';


interface Props{
    onSearch:(search:string) => void;

}


const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={devicon} alt="Dev Icon"  boxSize="60px"/>
      <SearchInput onSearch={onSearch}/>
      <ColorMooSwitch/>
    </HStack>
  )
}

export default NavBar