import { Box, Heading, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export const Connect = () => {
  return (
    <Box py={{ base: 6, md: 8 }} px={4} bg="gray.100">
      <Box maxW="container.xl" mx="auto">
        <Heading size={{ base: "md", md: "lg" }} mb={{ base: 4, md: 6 }} textAlign="center">Connect with Us</Heading>
        <HStack spacing={{ base: 3, md: 4 }} justify="center">
          <IconButton
            as={Link}
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            fontSize={{ base: "18px", md: "20px" }}
            size={{ base: "sm", md: "md" }}
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram />}
            colorScheme="pink"
            fontSize={{ base: "18px", md: "20px" }}
            size={{ base: "sm", md: "md" }}
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Email"
            icon={<FaEnvelope />}
            colorScheme="red"
            fontSize={{ base: "18px", md: "20px" }}
            size={{ base: "sm", md: "md" }}
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="whatsapp"
            fontSize={{ base: "18px", md: "20px" }}
            size={{ base: "sm", md: "md" }}
          />
        </HStack>
      </Box>
    </Box>
  )
}
