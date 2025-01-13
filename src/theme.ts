import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      yellow: '#FFD700',
      black: '#000000',
    },
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.yellow',
          color: 'black',
          _hover: {
            bg: 'yellow.500',
          },
        },
        outline: {
          borderColor: 'brand.yellow',
          color: 'black',
          _hover: {
            bg: 'yellow.50',
          },
        },
      },
    },
  },
})

export default theme
