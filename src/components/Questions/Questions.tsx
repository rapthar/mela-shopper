import { Box, Container, Heading, Text, SimpleGrid, VStack, Input, Textarea, Button, useToast, FormControl, FormLabel, Select, Icon } from '@chakra-ui/react';
import { FaShoppingBag, FaCreditCard, FaTruck } from 'react-icons/fa';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
};

export const Questions = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const topics = [
    { 
      label: 'Buying Questions',
      value: 'buying',
      icon: FaShoppingBag,
      color: 'blue.500'
    },
    { 
      label: 'Payment Questions',
      value: 'payment',
      icon: FaCreditCard,
      color: 'green.500'
    },
    { 
      label: 'Delivery Questions',
      value: 'delivery',
      icon: FaTruck,
      color: 'purple.500'
    },
  ];

  return (
    <Box 
      py={16} 
      bgGradient="linear(to-br, blue.500, purple.500)"
      color="white"
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center" maxW="800px">
            <Heading 
              size="2xl" 
              mb={4}
              color="white"
            >
              Got Pressing Questions?
            </Heading>
            <Text fontSize="xl" color="white">
              We're here to help! Choose a topic below and let us know your concerns.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {topics.map((topic) => (
              <Box
                key={topic.value}
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                transition="all 0.3s"
                color="gray.800"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '2xl',
                }}
              >
                <VStack spacing={6}>
                  <Icon 
                    as={topic.icon} 
                    boxSize={12} 
                    color={topic.color}
                  />
                  <Heading size="md">{topic.label}</Heading>
                  
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <VStack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Phone</FormLabel>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your question or concern"
                          resize="vertical"
                          minH="100px"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        colorScheme={topic.color.split('.')[0]}
                        w="full"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};
