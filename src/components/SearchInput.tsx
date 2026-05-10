import React, { useRef } from 'react'
import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

interface Props{
    onSearch:(search:string) => void;

}

const SearchInput = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null);
  return (  
    <form  onSubmit={(e) =>{e.preventDefault();
        if (ref.current){
     onSearch(ref.current.value);
   }}}>      

    <InputGroup startElement={<LuSearch color='gray.300' />} >
       
<Input ref={ref} borderRadius="8px" placeholder={'Search games...'} />
    </InputGroup>
    </form>
  )
}

export default SearchInput