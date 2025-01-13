import { Box, Button, Container, Text, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const categories = [
  { icon: '📱', name: 'Electronics', link: '/electronics' },
  { icon: '🥑', name: 'Grocery & Fruits', link: '/grocery' },
  { icon: '🛋️', name: 'Home & Furniture', link: '/furniture' },
  { icon: '👕', name: 'Fashion & Accessories', link: '/fashion' },
  { icon: '💄', name: 'Beauty & Personal Care', link: '/beauty' },
  { icon: '🐕', name: 'Pets', link: '/pets' },
  { icon: '👶', name: 'Baby & Kids', link: '/kids' },
  { icon: '🎮', name: 'Toys & Video Games', link: '/toys' },
  { icon: '💊', name: 'Health & Wellness', link: '/health' },
  { icon: '🏠', name: 'Household & Essentials', link: '/household' },
  { icon: '🌺', name: 'Patio & Garden', link: '/garden' },
  { icon: '⚽', name: 'Sport & Outdoor', link: '/sports' },
];

export const Hero = () => {
  return (
    <Container maxW="container.xl" py={4} px={{ base: 4, md: 6 }}>
      <Grid 
        templateColumns={{ base: "1fr", md: "250px 1fr" }} 
        gap={4}
      >
        {/* Categories sidebar - Hidden on mobile */}
        <Box 
          borderRadius="lg" 
          borderWidth="1px" 
          p={2}
          display={{ base: 'none', md: 'block' }}
        >
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <Box 
                p={2} 
                _hover={{ bg: 'gray.50' }}
                display="flex"
                alignItems="center"
                gap={3}
              >
                <Text fontSize="xl">{category.icon}</Text>
                <Text>{category.name}</Text>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Hero banner */}
        <Box 
          bg="gray.50" 
          borderRadius="lg" 
          p={{ base: 6, md: 12 }}
          position="relative"
          overflow="hidden"
          backgroundImage="linear-gradient(45deg, #f8f4ef 0%, #fff5e6 100%)"
          minH={{ base: "400px", md: "600px" }}
          display="flex"
          alignItems="center"
        >
          <Box maxW={{ base: "100%", md: "45%" }} position="relative" zIndex={2}>
            <Text color="#2F5231" fontSize="md" mb={4}>
              COMING SOON ESWATINI
            </Text>
            <Text 
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold" 
              lineHeight="1.1"
              color="#2F5231"
              mb={6}
            >
              Your One-Stop
              <br />
              Online Shopping.
            </Text>
            <Text 
              fontSize={{ base: "sm", md: "md" }} 
              color="#4A5568" 
              mb={8} 
              maxW={{ base: "100%", md: "90%" }}
            >
              Join thousands of happy shoppers getting their favorite items 
              delivered right to their doorstep. Be the first to experience 
              Mela Online Shopper.
            </Text>
            <Button 
              bg="white" 
              color="black"
              size={{ base: "md", md: "lg" }}
              px={8}
              rounded="md"
              _hover={{ bg: 'gray.50' }}
              as={Link}
              to="/register"
            >
              Register Now
            </Button>
          </Box>

          <Box 
            position="absolute" 
            right={{ base: "-150px", md: "-100px" }}
            bottom={{ base: "-100px", md: "-50px" }}
            width={{ base: "80%", md: "60%" }}
            height={{ base: "100%", md: "120%" }}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            justifyContent="center"
            zIndex={1}
          >
            <Image
              src="/MicrosoftTeams-image-7.png"
              alt="Mela Shopping Experience"
              objectFit="contain"
              maxW="100%"
              h="auto"
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
      </Grid>
    </Container>
  );
};
