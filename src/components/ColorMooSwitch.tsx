
    "use client"

import { HStack } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@chakra-ui/react"

const ColorMooSwitch = () => {
  const { toggleColorMode } = useColorMode()
  return (
 <HStack>

    <Switch.Root size="sm" whiteSpace="nowrap" display="flex" alignItems="center">
      <Switch.HiddenInput />
      <Switch.Control  onClick={toggleColorMode} />
      <Switch.Label>Toggle Mode </Switch.Label>
    </Switch.Root>

  </HStack>
  )

  
}

export default ColorMooSwitch




