import { Box, Heading, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export const Connect = () => {
  return (
    <Box py={8} px={4} bg="gray.100">
      <Box maxW="container.xl" mx="auto">
        <Heading size="lg" mb={6}>Connect with Us</Heading>
        <HStack spacing={4} justify="center">
          <IconButton
            as={Link}
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            fontSize="20px"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            fontSize="20px"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Email"
            icon={<FaEnvelope />}
            colorScheme="red"
            fontSize="20px"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="whatsapp"
            fontSize="20px"
          />
        </HStack>
      </Box>
    </Box>
  )
}
