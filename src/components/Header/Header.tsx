import { Box, Flex, Image, Container, HStack, Button, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: 'Signed out successfully',
        status: 'success',
        duration: 3000,
      });
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error signing out',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <Flex py={4} justify="space-between" align="center">
          <Box bg="#525459" p={4} borderRadius="md" display="flex" justifyContent="center" alignItems="center">
            <Link to="/">
              <Image src="/logo.png" alt="Mela Online Shopper" h={{ base: "40px", md: "60px" }} objectFit="contain" />
            </Link>
          </Box>

          <HStack spacing={4}>
            {user ? (
              <Button onClick={handleSignOut} colorScheme="blue" variant="outline">
                Sign Out
              </Button>
            ) : (
              <>
                <Button as={Link} to="/login" colorScheme="blue" variant="outline">
                  Login
                </Button>
                <Button as={Link} to="/signup" colorScheme="blue">
                  Registration
                </Button>
              </>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
