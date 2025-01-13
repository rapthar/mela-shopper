import { Box, Container, Heading, Text, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { OfferCard } from './OfferCard';

export const PreLaunch = () => {
  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={8} mb={12}>
            <Heading fontSize="5xl" textAlign="center">
              <Text as="span" color="black">JOIN </Text>
              <Text as="span" color="red.500">our pre-launch Campaigns</Text>
            </Heading>
            <Text fontSize="2xl" textAlign="center">
              And <Text as="span" color="red.500" fontWeight="bold">YOU could get 100% FREE delivery</Text> for 12months
            </Text>
          </VStack>

          <HStack spacing={8} w="full" flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
            <OfferCard
              image="/Offers/earlybirdspecial.png"
              title="SIGN UP & CONFIRM Your account for your 1st order AND GET 100% OFF service charges"
              discount="100%"
              buttonText="Show Code"
              buttonLink="/register"
            />
            
            <OfferCard
              image="/Offers/120club.png"
              title="JOIN CLUB 120 Become Our Elite Customer"
              discount="100%"
              buttonText="Show Code"
              buttonLink="/club120"
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
