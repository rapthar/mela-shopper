import { Box, Container, Heading, Image, SimpleGrid } from '@chakra-ui/react';

export const PaymentMethods = () => {
  const paymentLogos = [
    'Layer 1 copy.png',
    'Layer 2.png',
    'Layer 3.png',
    'Layer 4.png',
    'Layer 5.png',
    'Layer 6.png',
    'Layer 7.png',
    'Layer 8.png',
    'Layer 9.png',
    'Layer 10.png',
    'Layer 11.png',
    'Layer 13.png',
    'Layer 14.png',
    'Layer 15.png',
  ];

  return (
    <Box bg="#FCCD09" py={8}>
      <Container maxW="container.xl">
        <Heading size="md" mb={6} textAlign="center">Accepted Payment Methods</Heading>
        <SimpleGrid 
          columns={{ base: 3, sm: 4, md: 7 }} 
          spacing={6}
          justifyItems="center"
          alignItems="center"
        >
          {paymentLogos.map((logo, index) => (
            <Image
              key={index}
              src={`/logos/${logo}`}
              alt={`Payment Method ${index + 1}`}
              h="40px"
              objectFit="contain"
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
