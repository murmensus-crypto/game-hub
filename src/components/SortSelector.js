import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Menu, Button, Portal } from '@chakra-ui/react';
export const SortSelector = ({ onSelectSOrtOrder, sortOrder }) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
    return (_jsxs(Menu.Root, { children: [_jsx(Menu.Trigger, { asChild: true, children: _jsxs(Button, { variant: "outline", size: "md", children: ["Order by: ", currentSortOrder?.label || 'Relevance'] }) }), _jsx(Portal, { children: _jsx(Menu.Positioner, { children: _jsx(Menu.Content, { children: sortOrders.map(order => (_jsx(Menu.Item, { onClick: () => onSelectSOrtOrder(order.value), value: order.value, children: order.label }, order.value))) }) }) })] }));
};
