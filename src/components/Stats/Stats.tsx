import { Box, Text, VStack, Circle, Heading } from '@chakra-ui/react';

export const Stats = () => {
  return (
    <Box py={8}>
      <Heading textAlign="center" mb={8}>A DRIVE TO 120K IN 12 MONTHS</Heading>
      
      <Box display="flex" justifyContent="space-around" mb={8}>
        <VStack>
          <Circle size="150px" bg="gray.800" color="white">
            <VStack>
              <Text fontSize="2xl" fontWeight="bold">1.2M</Text>
              <Text fontSize="sm">Of the 1.2M ESWATINI Living in Eswatini</Text>
            </VStack>
          </Circle>
        </VStack>

        <VStack>
          <Circle size="150px" bg="yellow.400">
            <VStack>
              <Text fontSize="2xl" fontWeight="bold">10%</Text>
              <Text fontSize="sm">We're looking for just 10%</Text>
            </VStack>
          </Circle>
        </VStack>

        <VStack>
          <Circle size="150px" bg="gray.800" color="white">
            <VStack>
              <Text fontSize="2xl" fontWeight="bold">120K</Text>
              <Text fontSize="sm">To Reach 120k Monthly shoppers</Text>
            </VStack>
          </Circle>
        </VStack>
      </Box>
    </Box>
  );
};
