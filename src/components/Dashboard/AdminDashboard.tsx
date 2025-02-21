import { Box, Flex, Input, IconButton, Text, Table, Thead, Tbody, Tr, Th, Td, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Select, Badge } from '@chakra-ui/react';
import { FiSearch, FiMoreVertical, FiFilter, FiDownload } from 'react-icons/fi';
import { useState } from 'react';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box p={6}>
      <Flex direction="column" gap={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={1}>Products</Text>
            <Text color="gray.600" fontSize="sm">Manage and track your product inventory</Text>
          </Box>
          <HStack spacing={3}>
            <Button
              leftIcon={<FiDownload />}
              variant="outline"
              size="md"
              colorScheme="gray"
            >
              Export
            </Button>
            <Button
              colorScheme="blue"
              size="md"
            >
              Add Product
            </Button>
          </HStack>
        </Flex>

        <Flex gap={4} wrap="wrap">
          <Box flex={1} minW="280px">
            <Flex position="relative" alignItems="center">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="md"
                pl="40px"
              />
              <IconButton
                aria-label="Search"
                icon={<FiSearch />}
                size="sm"
                position="absolute"
                left={2}
                variant="ghost"
                color="gray.400"
              />
            </Flex>
          </Box>
          
          <HStack spacing={3}>
            <Select placeholder="Category" size="md" minW="150px">
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
            </Select>
            <Button
              leftIcon={<FiFilter />}
              variant="outline"
              size="md"
              colorScheme="gray"
            >
              Filters
            </Button>
          </HStack>
        </Flex>

      <Box overflowX="auto" bg="white" rounded="lg" shadow="sm" borderWidth="1px" borderColor="gray.200">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th pl={6}>Product</Th>
              <Th>Status</Th>
              <Th>Category</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>Stock</Th>
              <Th>Last Updated</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3].map((item) => (
              <Tr key={item}>
                <Td pl={6}>
                  <Flex align="center" gap={3}>
                    <Box
                      boxSize="48px"
                      bg="gray.100"
                      rounded="md"
                      borderWidth="1px"
                      borderColor="gray.200"
                    />
                    <Box>
                      <Text fontWeight="medium">Smartphone X Pro</Text>
                      <Text fontSize="sm" color="gray.500">#PRD-{item}234</Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    px={2}
                    py={1}
                    rounded="full"
                  >
                    Active
                  </Badge>
                </Td>
                <Td>Electronics</Td>
                <Td isNumeric fontWeight="medium">$999.00</Td>
                <Td isNumeric>150</Td>
                <Td>2 hours ago</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<FiMoreVertical />}
                      variant="ghost"
                      size="sm"
                    />
                    <MenuList>
                      <MenuItem>View Details</MenuItem>
                      <MenuItem>Edit Product</MenuItem>
                      <MenuItem color="red.500">Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default AdminDashboard;