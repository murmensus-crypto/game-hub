import { Steps, type ThemingConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config: ThemingConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = createSystem(defaultConfig, {});

export default themes;
