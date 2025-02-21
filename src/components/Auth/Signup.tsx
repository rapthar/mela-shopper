import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, useToast, VStack, Checkbox, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [joinStokvel, setJoinStokvel] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!acceptTerms) {
      toast({
        title: 'Error',
        description: 'Please accept the Terms & Conditions',
        status: 'error',
        duration: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp(email, password);
      if (error) throw error;

      toast({
        title: 'Success!',
        description: 'Please check your email for verification link',
        status: 'success',
        duration: 5000,
      });
      navigate('/login');
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
    <Container maxW="container.sm" py={8}>
      <VStack spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">Fill in your information</Text>
        <Box w="100%" bg="white" p={6} borderRadius="md" boxShadow="sm">
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>First Names</FormLabel>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Value"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Value"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Value"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contact (Mobile)</FormLabel>
                <Input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Value"
                  size="lg"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contact (WhatsApp)</FormLabel>
                <Input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Value"
                  size="lg"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="8 characters"
                  minLength={8}
                  size="lg"
                />
              </FormControl>
              <Stack spacing={3} mt={2}>
                <Checkbox
                  isChecked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  size="lg"
                >
                  Accept Terms & Conditions
                  <ChakraLink color="blue.500" href="/terms" ml={1}>
                    Click to read
                  </ChakraLink>
                </Checkbox>
                <Checkbox
                  isChecked={joinStokvel}
                  onChange={(e) => setJoinStokvel(e.target.checked)}
                  size="lg"
                >
                  Join Stokvel Waya Waya
                  <ChakraLink color="blue.500" href="/stokvel" ml={1}>
                    Learn more
                  </ChakraLink>
                </Checkbox>
              </Stack>
              <Button
                type="submit"
                bg="gray.800"
                color="white"
                size="lg"
                fontSize="md"
                isLoading={loading}
                _hover={{ bg: 'gray.700' }}
                w="100%"
                mt={4}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};