import { Box, Container, Grid, Heading, Text, Input, Button, HStack, VStack, Link, Image, Icon, Flex } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest, FaMapMarkerAlt, FaCommentAlt, FaPhoneAlt, FaEnvelope, FaHeadphones, FaTelegram, FaViber, FaWhatsapp } from 'react-icons/fa';

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    color="whiteAlpha.800"
    _hover={{ color: 'white', textDecoration: 'none' }}
    fontSize="sm"
    mb={2}
    display="block"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon }: { icon: React.ElementType }) => (
  <Link
    href="#"
    bg="whiteAlpha.200"
    w="40px"
    h="40px"
    rounded="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
    _hover={{ bg: 'whiteAlpha.300' }}
  >
    <Icon as={icon} color="white" boxSize="20px" />
  </Link>
);

export const Footer = () => {
  return (
    <Box bg="blue.500" color="white">
      {/* Help Section */}
      <Container maxW="container.xl" py={6}>
        <Flex justify="space-between" align="center" wrap={{ base: 'wrap', md: 'nowrap' }} gap={4}>
          <Box flex={1}>
            <Heading size="md" mb={2}>Need help?</Heading>
            <Text fontSize="sm">Reach out to us on any of the support channels</Text>
          </Box>
          <HStack spacing={8} wrap="wrap">
            <HStack spacing={3}>
              <Icon as={FaMapMarkerAlt} boxSize={6} />
              <Box>
                <Text fontWeight="bold">Store Locator</Text>
                <Text fontSize="sm">Find a store nearby</Text>
              </Box>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaCommentAlt} boxSize={6} />
              <Box>
                <Text fontWeight="bold">Feedback</Text>
                <Text fontSize="sm">Send us your feedback</Text>
              </Box>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaHeadphones} boxSize={6} />
              <Box>
                <Text fontWeight="bold">Chat Now</Text>
                <Text fontSize="sm">Send us your feedback</Text>
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </Container>

      {/* Newsletter Section */}
      <Box bg="blue.600" py={8}>
        <Container maxW="container.xl">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align={{ base: 'start', md: 'center' }}
            justify="space-between"
            gap={4}
          >
            <HStack spacing={4}>
              <Icon as={FaEnvelope} boxSize={8} />
              <Box>
                <Heading size="md">Learn first about discounts</Heading>
                <Text fontSize="sm">As well as news, special offers and promotions</Text>
              </Box>
            </HStack>
            <HStack spacing={2} w={{ base: 'full', md: 'auto' }}>
              <Input
                placeholder="Enter your email address"
                bg="white"
                color="gray.800"
                size="lg"
                w={{ base: 'full', md: '400px' }}
              />
              <Button
                colorScheme="yellow"
                size="lg"
                px={8}
              >
                SEND
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Footer Links */}
      <Container maxW="container.xl" py={12}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
          }}
          gap={8}
        >
          {/* Let Us Help You */}
          <VStack align="start">
            <Heading size="md" mb={4}>Let Us Help You</Heading>
            <FooterLink>Your Orders</FooterLink>
            <FooterLink>Returns & Replacements</FooterLink>
            <FooterLink>Shipping Rates & Policies</FooterLink>
            <FooterLink>Refund and Returns Policy</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms and Conditions</FooterLink>
            <FooterLink>Cookie Settings</FooterLink>
            <FooterLink>Help Center</FooterLink>
          </VStack>

          {/* Make Money with Us */}
          <VStack align="start">
            <Heading size="md" mb={4}>Make Money with Us</Heading>
            <FooterLink>Sell on Mela</FooterLink>
            <FooterLink>Sell Your Services</FooterLink>
            <FooterLink>Become a Vendor</FooterLink>
            <FooterLink>Advertise Your Products</FooterLink>
            <FooterLink>Become an Affiliate</FooterLink>
          </VStack>

          {/* Get to Know Us */}
          <VStack align="start">
            <Heading size="md" mb={4}>Get to Know Us</Heading>
            <FooterLink>Careers at Mela</FooterLink>
            <FooterLink>About Mela</FooterLink>
            <FooterLink>Investor Relations</FooterLink>
            <FooterLink>Customer Reviews</FooterLink>
            <FooterLink>Social Responsibility</FooterLink>
            <FooterLink>Store Locations</FooterLink>
          </VStack>

          {/* For Buyers */}
          <VStack align="start">
            <Heading size="md" mb={4}>For Buyers</Heading>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>My Account</FooterLink>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Contact</FooterLink>
          </VStack>

          {/* Download */}
          <VStack align="start">
            <Heading size="md" mb={4}>Download</Heading>
            <Text fontSize="sm" mb={4}>
              You can download our mobile application from app stores
            </Text>
            <VStack spacing={4} align="start">
              <Link href="#" _hover={{ opacity: 0.8 }}>
                <Image src="/google-play-button-dark.webp" alt="Get it on Google Play" h="48px" />
              </Link>
              <Link href="#" _hover={{ opacity: 0.8 }}>
                <Image src="/apple-store-button-dark.webp" alt="Download on the App Store" h="48px" />
              </Link>
              <Text fontSize="xs">Download App Get -10% Discount</Text>
            </VStack>
          </VStack>
        </Grid>
      </Container>

      {/* Social and Contact */}
      <Container maxW="container.xl" py={6} borderTop="1px" borderColor="whiteAlpha.200">
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center"
          gap={4}
        >
          <HStack spacing={4}>
            <SocialIcon icon={FaFacebookF} />
            <SocialIcon icon={FaInstagram} />
            <SocialIcon icon={FaYoutube} />
            <SocialIcon icon={FaPinterest} />
          </HStack>
          <HStack spacing={8} wrap="wrap" justify={{ base: 'center', md: 'flex-end' }}>
            <HStack>
              <Icon as={FaPhoneAlt} />
              <Link href="tel:+26876543210">+268 7654 3210</Link>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} />
              <Link href="#">Send Mail</Link>
            </HStack>
            <HStack>
              <Icon as={FaHeadphones} />
              <Link href="#">Write to us</Link>
            </HStack>
            <HStack>
              <Icon as={FaTelegram} />
              <Link href="#">Telegram</Link>
            </HStack>
            <HStack>
              <Icon as={FaViber} />
              <Link href="#">Viber</Link>
            </HStack>
            <HStack>
              <Icon as={FaWhatsapp} />
              <Link href="#">Whatsapp</Link>
            </HStack>
          </HStack>
        </Flex>
      </Container>

      {/* Copyright */}
      <Box bg="blue.600" py={4}>
        <Container maxW="container.xl">
          <Text fontSize="sm" textAlign="center">
            Copyright 2025 &copy; Mela Online Shopper. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
