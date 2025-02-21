import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Header } from './components/Header/Header'
import { WorkWithUs } from './components/WorkWithUs/WorkWithUs'
import { PreLaunch } from './components/PreLaunch/PreLaunch'
import { Questions } from './components/Questions/Questions'
import { Hero } from './components/Hero/Hero'
import { HowToOrder } from './components/HowToOrder/HowToOrder'
import { Vision } from './components/Vision/Vision'
import { PaymentMethods } from './components/PaymentMethods/PaymentMethods'
import { Footer } from './components/Footer/Footer'
import { Login } from './components/Auth/Login'
import { Signup } from './components/Auth/Signup'

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={
              <div>
                <Hero />
                <PreLaunch />
                <HowToOrder />
                <Questions />
                <Vision />
                <WorkWithUs />
                <PaymentMethods />
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
