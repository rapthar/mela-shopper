import { Box, Heading, Text, Button } from '@chakra-ui/react';

export const ComingSoon = () => {
  return (
    <Box bg="yellow.400" p={6} textAlign="center">
      <Heading size="lg">COMING SOON</Heading>
      <Text fontSize="xl" fontWeight="bold">ESWATINI</Text>
      <Button mt={4} colorScheme="black" variant="solid">
        Register Now
      </Button>
    </Box>
  );
};
