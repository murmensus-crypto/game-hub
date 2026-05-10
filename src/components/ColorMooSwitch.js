"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@chakra-ui/react";
const ColorMooSwitch = () => {
    const { toggleColorMode } = useColorMode();
    return (_jsx(HStack, { children: _jsxs(Switch.Root, { size: "sm", whiteSpace: "nowrap", display: "flex", alignItems: "center", children: [_jsx(Switch.HiddenInput, {}), _jsx(Switch.Control, { onClick: toggleColorMode }), _jsx(Switch.Label, { children: "Toggle Mode " })] }) }));
};
export default ColorMooSwitch;
