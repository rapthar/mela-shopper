import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, VStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) throw error;

      toast({
        title: 'Welcome back!',
        status: 'success',
        duration: 3000,
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={12}>
      <VStack spacing={8}>
        <Heading>Welcome Back</Heading>
        <Box w="100%" bg="white" p={8} borderRadius="lg" boxShadow="md">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                fontSize="md"
                isLoading={loading}
              >
                Sign In
              </Button>
            </Stack>
          </form>
        </Box>
        <Text>
          Don't have an account?{' '}
          <Link to="/signup">
            <Text as="span" color="blue.500">
              Sign up
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};