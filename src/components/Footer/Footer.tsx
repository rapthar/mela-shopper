import { Box, Container, Heading, Text, HStack, VStack, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box bg="white" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="center">
          <Heading fontSize="2xl">
            Connect with <Text as="span" color="orange.400">Us</Text>
          </Heading>

          <HStack spacing={8} justify="center">
            <Link href="#" _hover={{ color: 'orange.400' }}>
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Icon as={FaFacebookF} boxSize={6} />
              </Box>
            </Link>
            <Link href="#" _hover={{ color: 'orange.400' }}>
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Icon as={FaInstagram} boxSize={6} />
              </Box>
            </Link>
            <Link href="#" _hover={{ color: 'orange.400' }}>
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Icon as={FaEnvelope} boxSize={6} />
              </Box>
            </Link>
            <Link href="#" _hover={{ color: 'orange.400' }}>
              <Box bg="white" p={4} boxShadow="md" borderRadius="md">
                <Icon as={FaWhatsapp} boxSize={6} />
              </Box>
            </Link>
          </HStack>

          <HStack spacing={2} align="center">
            <Icon as={FaPhone} boxSize={5} color="black" />
            <Text fontSize="xl" color="black">+268 7648 5058</Text>
          </HStack>

          <Text fontSize="lg" color="black">
            To learn more <Link href="#" color="orange.400">About US</Link> click here...
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
