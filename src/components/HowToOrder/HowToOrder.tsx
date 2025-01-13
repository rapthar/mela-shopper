import { Box, Container, Heading, Text, Grid, VStack, HStack, Circle, useColorModeValue } from '@chakra-ui/react';
import { FaShoppingCart, FaWhatsapp, FaSearch, FaRegCreditCard, FaBox, FaTruck, FaRegCheckCircle, FaPhone } from 'react-icons/fa';

type OrderStep = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const OnlineSteps: OrderStep[] = [
  {
    icon: FaSearch,
    title: "Browse Products",
    description: "Search and explore our wide range of products on the website"
  },
  {
    icon: FaShoppingCart,
    title: "Add to Cart",
    description: "Select your items and add them to your shopping cart"
  },
  {
    icon: FaRegCheckCircle,
    title: "Create Account",
    description: "Sign up or log in to your Mela Online Shopper account"
  },
  {
    icon: FaRegCreditCard,
    title: "Checkout",
    description: "Enter your delivery details and complete your payment"
  },
  {
    icon: FaTruck,
    title: "Track Order",
    description: "Track your order status in real-time until delivery"
  }
];

const WhatsAppSteps: OrderStep[] = [
  {
    icon: FaPhone,
    title: "Save Our Number",
    description: "Save our WhatsApp number: +268 7654 3210"
  },
  {
    icon: FaWhatsapp,
    title: "Send Message",
    description: "Message us with your order details and delivery location"
  },
  {
    icon: FaBox,
    title: "Confirm Order",
    description: "Review your order summary and confirm the details"
  },
  {
    icon: FaRegCreditCard,
    title: "Make Payment",
    description: "Complete your payment through our secure payment options"
  },
  {
    icon: FaTruck,
    title: "Delivery",
    description: "Receive updates and track your order until delivery"
  }
];

const OrderStepCard = ({ step, index }: { step: OrderStep; index: number }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  
  return (
    <HStack 
      spacing={4} 
      bg={bgColor}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
      transition="all 0.2s"
    >
      <Circle
        size="50px"
        bg="green.500"
        color="white"
        fontSize="24px"
      >
        <Box as={step.icon} />
      </Circle>
      <VStack align="start" spacing={1} flex={1}>
        <HStack spacing={3}>
          <Circle size="24px" bg="green.100" color="green.700">
            <Text fontSize="sm" fontWeight="bold">{index + 1}</Text>
          </Circle>
          <Heading size="sm">{step.title}</Heading>
        </HStack>
        <Text color="gray.600" fontSize="sm">
          {step.description}
        </Text>
      </VStack>
    </HStack>
  );
};

const OrderSection = ({ title, steps }: { title: string; steps: OrderStep[] }) => (
  <Box flex={1}>
    <Heading size="lg" mb={8} color="green.700">
      {title}
    </Heading>
    <VStack spacing={4}>
      {steps.map((step, index) => (
        <OrderStepCard key={index} step={step} index={index} />
      ))}
    </VStack>
  </Box>
);

export const HowToOrder = () => {
  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>Using Mela Online Shopper</Heading>
            <Text fontSize="xl" color="gray.600">
              Choose your preferred way to order
            </Text>
          </Box>
          
          <Grid 
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} 
            gap={12}
            w="full"
          >
            <OrderSection 
              title="HOW TO ORDER ONLINE" 
              steps={OnlineSteps} 
            />
            <OrderSection 
              title="HOW TO ORDER VIA WHATSAPP" 
              steps={WhatsAppSteps} 
            />
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};
