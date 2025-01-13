import { Box, Button, Flex, Image, Container, Input, Select, HStack, Text, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiHeart, FiRefreshCw, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200">
      {/* Top bar - Hidden on mobile */}
      <Box borderBottom="1px" borderColor="gray.200" py={2} display={{ base: 'none', md: 'block' }}>
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
          <Flex align="center" gap={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
            {/* Mobile menu button */}
            <IconButton
              aria-label="Menu"
              icon={<FiMenu />}
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              variant="ghost"
            />

            <Box bg="#525459" p={4} borderRadius="md" display="flex" justifyContent="center" alignItems="center">
              <Link to="/">
                <Image src="/logo.png" alt="Mela Online Shopper" h={{ base: "40px", md: "60px" }} objectFit="contain" />
              </Link>
            </Box>

            <Flex flex={1} gap={2} w={{ base: '100%', md: 'auto' }} order={{ base: 3, md: 2 }}>
              <Select w={{ base: "100px", md: "120px" }} placeholder="All" size={{ base: "sm", md: "md" }}>
                <option>All Categories</option>
              </Select>
              <Input 
                flex={1} 
                placeholder="Search..."
                borderRadius="md"
                size={{ base: "sm", md: "md" }}
              />
              <Button colorScheme="blue" size={{ base: "sm", md: "md" }}>
                Search
              </Button>
            </Flex>

            <HStack spacing={2} display={{ base: 'none', md: 'flex' }} order={{ base: 2, md: 3 }}>
              <Button variant="ghost" leftIcon={<FiRefreshCw />} size={{ base: "sm", md: "md" }}>
                <Box textAlign="left" display={{ base: 'none', lg: 'block' }}>
                  <Text fontSize="xs">Reorder</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiHeart />} size={{ base: "sm", md: "md" }}>
                <Box textAlign="left" display={{ base: 'none', lg: 'block' }}>
                  <Text fontSize="xs">Wishlist</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiUser />} size={{ base: "sm", md: "md" }}>
                <Box textAlign="left" display={{ base: 'none', lg: 'block' }}>
                  <Text fontSize="xs">Account</Text>
                </Box>
              </Button>
              <Button variant="ghost" leftIcon={<FiShoppingCart />} size={{ base: "sm", md: "md" }}>
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

            {/* Mobile action buttons */}
            <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
              <IconButton
                aria-label="Account"
                icon={<FiUser />}
                variant="ghost"
                size="sm"
              />
              <IconButton
                aria-label="Cart"
                icon={<FiShoppingCart />}
                variant="ghost"
                size="sm"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Navigation - Hidden on mobile */}
      <Box borderTop="1px" borderColor="gray.200" py={2} display={{ base: 'none', md: 'block' }}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={8}>
              <Button variant="ghost" leftIcon={<Box as="span">☰</Box>}>
                All Categories
                <Text fontSize="xs" ml={2} color="gray.500" display={{ base: 'none', lg: 'block' }}>
                  More than 100K
                </Text>
              </Button>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/electronics">Electronics</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <Link to="/" onClick={onClose}>Home</Link>
              <Link to="/shop" onClick={onClose}>Shop</Link>
              <Link to="/electronics" onClick={onClose}>Electronics</Link>
              <Link to="/faq" onClick={onClose}>FAQ</Link>
              <Link to="/account" onClick={onClose}>My account</Link>
              <Link to="/about" onClick={onClose}>About Us</Link>
              <Link to="/contact" onClick={onClose}>Contact</Link>
              <Link to="/order-tracking" onClick={onClose}>Order Tracking</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
