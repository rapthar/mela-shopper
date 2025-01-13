import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Features } from './components/Features/Features'
import { WorkWithUs } from './components/WorkWithUs/WorkWithUs'
import { PreLaunch } from './components/PreLaunch/PreLaunch'
import { Questions } from './components/Questions/Questions'
import { Hero } from './components/Hero/Hero'
import { HowToOrder } from './components/HowToOrder/HowToOrder'
import { Vision } from './components/Vision/Vision'
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Header />
          <Hero />
          <Features />
          <PreLaunch />
          <HowToOrder />
          <Questions />
          <Vision />
          <WorkWithUs />
          <PaymentMethods />
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  )
}

export default App
