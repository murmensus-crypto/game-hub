import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import usePlateforms from '@/hooks/usePlatforms';
import { Menu, Button, Portal } from '@chakra-ui/react';
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }) => {
    const { data, error } = usePlateforms();
    return (_jsxs(Menu.Root, { children: [_jsx(Menu.Trigger, { asChild: true, children: _jsx(Button, { variant: "outline", size: "md", children: selectedPlatform?.name || 'Platforms' }) }), _jsx(Portal, { children: _jsx(Menu.Positioner, { children: _jsx(Menu.Content, { children: data.map((platform) => (_jsx(Menu.Item, { onClick: () => onSelectPlatform(platform), value: platform.slug, children: platform.name }, platform.id))) }) }) })] }));
};
export default PlatformSelector;
