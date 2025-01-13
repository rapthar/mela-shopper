import { Box, Container, Heading, Text, Image, Stack, useBreakpointValue } from '@chakra-ui/react';

export const Vision = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const subHeadingSize = useBreakpointValue({ base: "4xl", md: "6xl" });
  const imageSize = useBreakpointValue({ base: "80px", md: "100px", lg: "120px" });

  return (
    <Box 
      w="full" 
      bg="#DA8B2B"
      position="relative"
      py={{ base: 8, md: 12, lg: 16 }}
      minH={{ base: "auto", lg: "600px" }}
      overflow="hidden"
    >
      {isDesktop && (
        <Box
          position="absolute"
          top={0}
          right={0}
          w={{ base: "100%", lg: "45%" }}
          h="100%"
          bgImage="url('/vision/vrbackground.png')"
          bgPosition={{ base: "center", lg: "center right" }}
          bgSize="cover"
          bgRepeat="no-repeat"
          opacity={0.9}
          zIndex={0}
          display={{ base: "none", lg: "block" }}
        />
      )}
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Box 
          position="relative"
          borderRadius="2xl"
          p={{ base: 4, md: 6, lg: 8 }}
        >
          <Box maxW={{ base: "100%", lg: "60%" }} position="relative">
            <Heading 
              size={headingSize}
              color="white"
              mb={{ base: 4, md: 6, lg: 8 }}
              lineHeight="1.2"
              textAlign={{ base: "center", lg: "left" }}
            >
              A DRIVE to 120K
              <Text as="span" display="block" fontSize={subHeadingSize}>
                in 12 Months
              </Text>
            </Heading>
            
            <Text 
              fontSize={{ base: "2xl", md: "3xl" }}
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
              mb={{ base: 6, md: 8 }}
              textAlign={{ base: "center", lg: "left" }}
            >
              SAKHA KWETFU
            </Text>

            <Stack 
              direction={{ base: "column", md: "row" }} 
              spacing={{ base: 4, md: 6, lg: 8 }} 
              align="stretch"
              w="full"
            >
              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={{ base: 4, md: 6 }}
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image 
                  src="/vision/120k.png" 
                  alt="120K Goal"
                  mx="auto"
                  mb={4}
                  w={imageSize}
                  h={imageSize}
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Our Vision
                </Text>
              </Box>

              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={{ base: 4, md: 6 }}
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image 
                  src="/vision/12months.png" 
                  alt="12 Months"
                  mx="auto"
                  mb={4}
                  w={imageSize}
                  h={imageSize}
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Timeline
                </Text>
              </Box>

              <Box 
                bg="rgba(255,255,255,0.1)" 
                p={{ base: 4, md: 6 }}
                borderRadius="xl"
                backdropFilter="blur(10px)"
                flex={1}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image 
                  src="/vision/10percent.png" 
                  alt="Our Target"
                  mx="auto"
                  mb={4}
                  w={imageSize}
                  h={imageSize}
                />
                <Text color="white" textAlign="center" fontWeight="bold">
                  Our Target
                </Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
