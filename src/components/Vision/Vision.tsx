import { Box, Container, Heading, Text, Image, HStack } from '@chakra-ui/react';

export const Vision = () => {
  return (
    <Box 
      w="full" 
      bg="#DA8B2B"
      position="relative"
      py={16}
      minH="600px"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        w="45%"
        h="100%"
        bgImage="url('/vision/vrbackground.png')"
        bgPosition="center right"
        bgSize="cover"
        bgRepeat="no-repeat"
        opacity={0.9}
        zIndex={0}
      />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Box 
          position="relative"
          borderRadius="2xl"
          p={8}
        >
          <Box maxW="60%" position="relative">
            <Heading 
              size="2xl" 
              color="white"
              mb={8}
              lineHeight="1.2"
            >
              A DRIVE to 120K
              <Text as="span" display="block" fontSize="6xl">
                in 12 Months
              </Text>
            </Heading>
            
            <Text 
              fontSize="3xl" 
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              mb={8}
            >
              SAKHA KWETFU
            </Text>

            <HStack spacing={8} align="stretch">
              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={6} 
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
              >
                <Image 
                  src="/vision/120k.png" 
                  alt="120K Goal"
                  mx="auto"
                  mb={4}
                  w="120px"
                  h="120px"
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Our Vision
                </Text>
              </Box>

              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={6} 
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
              >
                <Image 
                  src="/vision/12months.png" 
                  alt="12 Months"
                  mx="auto"
                  mb={4}
                  w="120px"
                  h="120px"
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Timeline
                </Text>
              </Box>

              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={6} 
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
              >
                <Image 
                  src="/vision/10percent.png" 
                  alt="Our Target"
                  mx="auto"
                  mb={4}
                  w="120px"
                  h="120px"
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Our Target
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
