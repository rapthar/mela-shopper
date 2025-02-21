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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'Buying',
    questions: [
      {
        question: 'How do I buy on Mela Shopper?',
        answer: 'Dear valued customer, we\'re excited to help you start shopping! You can easily browse our products, add items to your cart, and complete your purchase through our secure checkout process. Simply create an account, select your items, and follow the checkout instructions. We\'re here to make your shopping experience delightful!'
      },
      {
        question: 'If I want an item that\'s not in the shop?',
        answer: 'Hello! We understand you\'re looking for something special. If you can\'t find what you\'re looking for, please don\'t hesitate to contact our friendly customer service team. We\'ll do our best to source the item for you or suggest similar alternatives that might meet your needs.'
      },
      {
        question: 'How long does it take to process my order?',
        answer: 'Thank you for your order! We typically process orders within 24-48 hours. Once your order is confirmed and payment is received, we\'ll begin preparing it for delivery right away. We\'ll keep you updated every step of the way!'
      },
      {
        question: 'What is the service charge for?',
        answer: 'We appreciate your question! The service charge covers order processing, packaging, and handling costs to ensure your items reach you safely and securely. We strive to keep our charges transparent and reasonable while maintaining the highest quality of service.'
      },
      {
        question: 'Do I have to pay extra for delivery?',
        answer: 'Hello! Delivery charges are calculated based on your location and order size. Rest assured, the exact delivery fee will be displayed during checkout before you complete your purchase, so there won\'t be any surprises!'
      },
      {
        question: 'What if I made an error when placing my order?',
        answer: 'Don\'t worry at all! These things happen, and we\'re here to help. Please contact our friendly customer service team immediately after placing your order, and we\'ll gladly help you make the necessary corrections if the order hasn\'t been processed yet.'
      },
      {
        question: 'What if my order has missing or damaged items?',
        answer: 'We\'re truly sorry to hear about this! Please contact us within 24 hours of receiving your order, providing photos of damaged items or details of missing items. We take these matters seriously and will promptly resolve the issue with a replacement or refund to ensure your complete satisfaction.'
      },
      {
        question: 'What if my parcel does not arrive?',
        answer: 'We understand your concern! If your parcel hasn\'t arrived within the expected delivery timeframe, please don\'t worry. Contact our dedicated customer service team, and we\'ll immediately track your order and ensure it reaches you or process a refund if necessary. Your satisfaction is our priority!'
      }
    ]
  },
  {
    title: 'Payments',
    questions: [
      {
        question: 'How do I pay on Mela Shopper?',
        answer: 'Welcome to Mela Shopper! We\'ve made paying easy and secure with various payment methods including credit/debit cards, mobile money, and bank transfers. Simply choose your preferred payment option during checkout, and we\'ll guide you through the process.'
      },
      {
        question: 'Can I use a different payment option each time?',
        answer: 'Absolutely! We want to make payment as convenient as possible for you. You can choose a different payment method for each order, giving you the flexibility to pay in the way that suits you best each time you shop with us.'
      },
      {
        question: 'How long does it take to confirm my payment?',
        answer: 'Great question! Payment confirmation usually happens instantly for card payments and mobile money. For bank transfers, it may take 1-2 business days to reflect. Don\'t worry - we\'ll keep you updated on your payment status throughout the process.'
      },
      {
        question: 'What if my payment has not been confirmed?',
        answer: 'We understand this can be concerning! If your payment isn\'t confirmed within the expected timeframe, please don\'t worry. Contact our friendly support team with your order number and payment details, and we\'ll help track and resolve the issue promptly.'
      },
      {
        question: 'Do I have to pay for transactional charges?',
        answer: 'Thank you for asking! Some payment methods may incur small transaction fees. We believe in full transparency, so these fees will be clearly displayed before you complete your payment. We always strive to keep any additional charges to a minimum.'
      },
      {
        question: 'Can I pay with my refund voucher for a new order?',
        answer: 'Absolutely! We\'re happy to let you know that you can use your refund voucher for any new purchase. Simply enter the voucher code during checkout to apply the credit to your order. It\'s our way of making sure you get the most value from shopping with us!'
      },
      {
        question: 'Do I pay extra charges for delivery?',
        answer: 'Hello! Delivery charges are calculated based on your location and order size. We\'re committed to transparency, so the exact amount will be shown during checkout before you complete your purchase. No hidden fees - we promise!'
      }
    ]
  },
  {
    title: 'Delivery',
    questions: [
      {
        question: 'How do I get my parcel from Mela Shopper?',
        answer: 'Welcome to our delivery service! We deliver directly to your specified address for your convenience. You\'ll receive regular updates about your delivery status, and our friendly courier will contact you when they\'re nearby. We\'re committed to making your delivery experience smooth and hassle-free!'
      },
      {
        question: 'Can I get a delivery to anywhere in Eswatini?',
        answer: 'Absolutely yes! We\'re proud to deliver to all locations across Eswatini. While delivery times and charges may vary depending on your specific location, we\'re committed to bringing Mela Shopper to your doorstep, wherever you are in the country!'
      },
      {
        question: 'How long does it take to receive my parcel?',
        answer: 'Thank you for asking! Delivery times typically range from 1-3 business days, depending on your location. You\'ll receive an estimated delivery time when placing your order, and we\'ll keep you updated throughout the delivery process. We always strive to deliver as quickly and efficiently as possible!'
      },
      {
        question: 'What if my parcel does not arrive?',
        answer: 'We understand this can be worrying! If your parcel hasn\'t arrived within the expected timeframe, please don\'t hesitate to contact our dedicated customer service team. We\'ll immediately track your order and ensure it reaches you or process a refund if necessary. Your peace of mind is important to us!'
      },
      {
        question: 'What if my order has missing or damaged items?',
        answer: 'We\'re very sorry to hear about any issues with your order! Please report any missing or damaged items within 24 hours of receiving your delivery. Our caring customer service team will handle your case with priority - just contact us with photos of damaged items or details of missing items, and we\'ll resolve the issue promptly to ensure your complete satisfaction.'
      }
    ]
  }
];

export const Questions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Box py={16} bg="gray.100">
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="black"
            >
              Got Pressing{" "}
              <Text as="span" color="orange.400">
                Questions?
              </Text>
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
              We're here to help! Browse through our frequently asked questions below.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={8}
            w="full"
            pt={8}
          >
            {[
              { title: "Buying", icon: FaShoppingBag },
              { title: "Payments", icon: FaCreditCard },
              { title: "Delivery", icon: FaTruck },
            ].map((item) => (
              <Box
                key={item.title}
                bg={selectedCategory === item.title ? "orange.400" : "white"}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                cursor="pointer"
                transition="all 0.3s"
                onClick={() => setSelectedCategory(item.title)}
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                }}
                textAlign="center"
              >
                <VStack spacing={4}>
                  <Icon
                    as={item.icon}
                    boxSize={8}
                    color={selectedCategory === item.title ? "white" : "orange.400"}
                  />
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    color={selectedCategory === item.title ? "white" : "gray.700"}
                  >
                    {item.title}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {selectedCategory && (
            <Box w="full" mt={8}>
              {faqData
                .find((category) => category.title === selectedCategory)
                ?.questions.map((faq, index) => (
                  <Box
                    key={index}
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="sm"
                    mb={4}
                  >
                    <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={2}>
                      {faq.question}
                    </Text>
                    <Text color="gray.600">{faq.answer}</Text>
                  </Box>
                ))}
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
};
