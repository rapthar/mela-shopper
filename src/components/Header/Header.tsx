import { Box, Button, Flex, Image, Container, Input, Select, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiHeart, FiRefreshCw, FiUser, FiShoppingCart } from 'react-icons/fi';

export const Header = () => {
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200">
      {/* Top bar */}
      <Box borderBottom="1px" borderColor="gray.200" py={2}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Link to="/faq">FAQ</Link>
              <Link to="/account">My account</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </HStack>
            <Link to="/order-tracking">Order Tracking</Link>
          </Flex>
        </Container>
      </Box>

      {/* Main header */}
      <Box py={4}>
        <Container maxW="container.xl">
          <Flex align="center" gap={4}>
            <Box bg="#525459" p={4} borderRadius="md" display="flex" justifyContent="center" alignItems="center">
              <Link to="/">
                <Image src="/logo.png" alt="Mela Online Shopper" h="60px" objectFit="contain" />
              </Link>
            </Box>

            <Flex flex={1} gap={2}>
              <Select w="120px" placeholder="All">
                <option>All Categories</option>
              </Select>
              <Input 
                flex={1} 
                placeholder="Search everything at bevesi online and in store..."
                borderRadius="md"
              />
              <Button colorScheme="blue">
                Search
              </Button>
            </Flex>

            <HStack spacing={4}>
              <Button variant="ghost" leftIcon={<FiRefreshCw />}>
                <Box textAlign="left">
                  <Text fontSize="xs">Reorder</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiHeart />}>
                <Box textAlign="left">
                  <Text fontSize="xs">Wishlist</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiUser />}>
                <Box textAlign="left">
                  <Text fontSize="xs">Account</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiShoppingCart />}>
                <Box position="relative">
                  <Box
                    position="absolute"
                    top="-8px"
                    right="-8px"
                    bg="red.500"
                    color="white"
                    borderRadius="full"
                    w="16px"
                    h="16px"
                    fontSize="xs"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    0
                  </Box>
                </Box>
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Navigation */}
      <Box borderTop="1px" borderColor="gray.200" py={2}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={8}>
              <Button variant="ghost" leftIcon={<Box as="span">☰</Box>}>
                All Categories
                <Text fontSize="xs" ml={2} color="gray.500">
                  More than 100K
                </Text>
              </Button>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/electronics">Electronics</Link>
              <Link to="/home-furniture">Home & Furniture</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </HStack>
            <Link to="/deals">Today's Deal</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
