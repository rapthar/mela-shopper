import { Box, Button, Container, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <Container maxW="container.xl" py={{ base: 6, md: 4 }} px={{ base: 4, md: 6 }}>
      <Box 
        bg="gray.50" 
        borderRadius="lg" 
        p={{ base: 8, md: 12 }}
        position="relative"
        overflow="hidden"
        backgroundImage="linear-gradient(45deg, #f8f4ef 0%, #fff5e6 100%)"
        minH={{ base: "500px", md: "600px" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Box 
          maxW={{ base: "100%", md: "45%" }} 
          position="relative" 
          zIndex={2}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 8, md: 0 }}
        >
          <Text 
            color="#2F5231" 
            fontSize={{ base: "sm", md: "md" }} 
            mb={{ base: 3, md: 4 }}
            fontWeight="medium"
          >
            COMING SOON ESWATINI
          </Text>
          <Text 
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold" 
            lineHeight="1.2"
            color="#2F5231"
            mb={{ base: 4, md: 6 }}
          >
            To Enjoy Shopping
          </Text>
          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="#4A5568" 
            mb={{ base: 6, md: 8 }} 
            maxW={{ base: "90%", md: "90%" }}
            mx={{ base: "auto", md: 0 }}
          >
            Join thousands of happy shoppers getting their favorite items 
            delivered right to their doorstep. Be the first to experience 
            Mela Online Shopper.
          </Text>
          <Button 
            bg="white" 
            color="black"
            size={{ base: "md", md: "lg" }}
            px={{ base: 6, md: 8 }}
            rounded="md"
            _hover={{ bg: 'gray.50' }}
            as={Link}
            to="/register"
            w={{ base: "full", sm: "auto" }}
          >
            Register Now
          </Button>
        </Box>

        <Box 
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "auto", md: "0" }}
          bottom={{ base: "auto", md: "0" }}
          width={{ base: "80%", md: "50%" }}
          height={{ base: "200px", md: "100%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src="/MicrosoftTeams-image-7.png"
            alt="Mela Shopping Experience"
            objectFit="contain"
            maxW="100%"
            h="100%"
          />
        </Box>

        {/* Diagonal lines background pattern */}
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)"
          opacity={0.5}
          zIndex={0}
        />
      </Box>
    </Container>
  );
};
