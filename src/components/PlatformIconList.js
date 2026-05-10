import { jsx as _jsx } from "react/jsx-runtime";
import { FaWindows, FaApple, FaXbox, FaPlaystation, FaLinux, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
export const PlatformIconList = ({ platforms }) => {
    const iconMap = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        android: FaAndroid,
        ios: FaApple,
        mac: FaApple,
        linux: FaLinux,
        web: BsGlobe
    };
    return (_jsx(HStack, { marginY: 2, children: platforms.map(platform => (_jsx(Icon, { as: iconMap[platform.slug], color: "gray.500" }, platform.id))) }));
};
