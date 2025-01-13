import { Box, Button, Circle, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  image: string;
  title: string;
  discount: string;
  buttonText: string;
  buttonLink: string;
}

export const OfferCard = ({ 
  image, 
  title, 
  discount, 
  buttonText, 
  buttonLink 
}: OfferCardProps) => (
  <Box
    bg="white"
    borderRadius="xl"
    overflow="hidden"
    boxShadow="lg"
    position="relative"
    border="1px solid"
    borderColor="gray.200"
    p={6}
    display="flex"
    flexDirection="column"
    gap={4}
    transition="all 0.3s"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: 'xl',
    }}
  >
    {/* Left circular notch */}
    <Box
      position="absolute"
      left="-10px"
      top="50%"
      w="20px"
      h="20px"
      bg="gray.100"
      borderRadius="full"
      transform="translateY(-50%)"
    />
    
    {/* Right circular notch */}
    <Box
      position="absolute"
      right="-10px"
      top="50%"
      w="20px"
      h="20px"
      bg="gray.100"
      borderRadius="full"
      transform="translateY(-50%)"
    />

    {/* Dotted line */}
    <Box
      position="absolute"
      top="50%"
      left="0"
      right="0"
      borderTop="2px dashed"
      borderColor="gray.200"
      transform="translateY(-50%)"
      zIndex={0}
    />

    <Flex gap={6} align="center" zIndex={1} bg="white">
      <Circle size="80px" overflow="hidden" bg="gray.50">
        <Image 
          src={image}
          alt={title}
          boxSize="60px"
          objectFit="contain"
        />
      </Circle>
      
      <Box flex={1}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {title}
        </Text>
      </Box>

      <Box 
        bg="yellow.100" 
        p={4} 
        borderRadius="lg"
        textAlign="center"
      >
        <Text 
          color="red.500" 
          fontSize="3xl" 
          fontWeight="bold"
        >
          {discount}
        </Text>
        <Text 
          color="red.500" 
          fontSize="xl" 
          fontWeight="bold"
        >
          OFF
        </Text>
      </Box>
    </Flex>

    <Button
      as={Link}
      to={buttonLink}
      colorScheme="red"
      size="lg"
      zIndex={1}
      bg="white"
      color="red.500"
      border="2px solid"
      borderColor="red.500"
      _hover={{
        bg: 'red.500',
        color: 'white'
      }}
    >
      {buttonText}
    </Button>

    <Text fontSize="sm" color="gray.500" textAlign="center" zIndex={1}>
      Expires On 31-03-2025
    </Text>
  </Box>
);
