import { Box, Container, Heading, Text, HStack, Icon, Button, useColorModeValue } from '@chakra-ui/react';
import { FaStore, FaHandshake, FaTruck, FaUserTie } from 'react-icons/fa';

type WorkCard = {
  title: string;
  icon: React.ElementType;
  color: string;
  link: string;
};

const cards: WorkCard[] = [
  {
    title: 'Shop Runner Agent',
    icon: FaStore,
    color: 'yellow.500',
    link: '/signup/shoprunner'
  },
  {
    title: 'Transporter Agent',
    icon: FaTruck,
    color: 'yellow.500',
    link: '/signup/transporter'
  },
  {
    title: 'Pick-up Point Agent',
    icon: FaHandshake,
    color: 'yellow.500',
    link: '/signup/pickup'
  },
  {
    title: 'View Jobs @ Mela',
    icon: FaUserTie,
    color: 'yellow.500',
    link: '/careers'
  }
];

const Card = ({ card }: { card: WorkCard }) => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box
      bg={bg}
      p={4}
      borderRadius="lg"
      boxShadow="md"
      display="flex"
      alignItems="center"
      gap={4}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
    >
      <Box
        p={2}
        bg={`${card.color}15`}
        color={card.color}
        borderRadius="md"
      >
        <Icon as={card.icon} boxSize={5} />
      </Box>
      <Text fontWeight="bold" fontSize="sm">
        {card.title}
      </Text>
      <Button
        size="sm"
        colorScheme="yellow"
        ml="auto"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export const WorkWithUs = () => {
  return (
    <Box py={12} bg="gray.50">
      <Container maxW="container.xl">
        <Box mb={8}>
          <Heading 
            size="xl" 
            mb={4}
            bgGradient="linear(to-r, yellow.400, yellow.600)"
            bgClip="text"
          >
            Work with Us
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Join our growing network of partners and be part of our success
          </Text>
        </Box>

        <HStack 
          spacing={4} 
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
          gap={4}
        >
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};
