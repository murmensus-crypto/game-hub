
import { Menu, Button, Portal } from '@chakra-ui/react'


interface Props{
    onSelectSOrtOrder: (sortOrder: string) => void;
    sortOrder: string;
}
export const SortSelector = ({ onSelectSOrtOrder, sortOrder}: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
      ];
      const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
   return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="md" >
         Order by: {currentSortOrder?.label || 'Relevance' }
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
        {sortOrders.map(order => (
          <Menu.Item onClick={() => onSelectSOrtOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </Menu.Item>
        ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    )
 }
