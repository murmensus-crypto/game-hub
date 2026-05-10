import { createSystem, defaultConfig } from "@chakra-ui/react";
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};
const theme = createSystem(defaultConfig, {});
export default themes;
