import { Box, Container, Flex, Text, Icon, Image } from '@chakra-ui/react';
import { FaPercent, FaTag, FaTruck, FaCreditCard } from 'react-icons/fa';

const Feature = ({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <Flex 
    align="center" 
    gap={4} 
    flex={1} 
    borderRight={{ base: 'none', md: '1px' }}
    borderBottom={{ base: '1px', md: 'none' }}
    borderColor="gray.200" 
    _last={{ 
      borderRight: 'none',
      borderBottom: 'none'
    }}
    px={6}
    py={{ base: 4, md: 0 }}
  >
    <Box 
      bg="orange.100" 
      p={3} 
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={icon} boxSize={6} color="orange.500" />
    </Box>
    <Box>
      <Text fontWeight="bold" mb={1}>{title}</Text>
      <Text fontSize="sm" color="gray.600">{description}</Text>
    </Box>
  </Flex>
);

export const Features = () => {
  return (
    <Box py={8} bg="white" borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl" px={4}>
        <Flex 
          gap={4} 
          direction={{ base: 'column', md: 'row' }}
        >
          <Feature
            icon={FaPercent}
            title="Opportunity Discounts"
            description="Get exclusive discounts on your favorite items when you register early."
          />
          <Feature
            icon={FaTag}
            title="Discount Codes"
            description="Special promo codes for our early registrants and loyal customers."
          />
          <Feature
            icon={FaTruck}
            title="Free Delivery"
            description="Enjoy free delivery on your first order when we launch."
          />
          <Feature
            icon={FaCreditCard}
            title="Secure payments"
            description="Multiple secure payment options for your convenience."
          />
        </Flex>
      </Container>
    </Box>
  );
};
