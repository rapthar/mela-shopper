import { Box, Flex, IconButton, VStack, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import { FiHome, FiPackage, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

interface DashboardLayoutProps {
  isAdmin?: boolean;
}

const DashboardLayout = ({ isAdmin = false }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <Flex h="100vh">
      <Box w="64px" bg="gray.800" py={4}>
        <VStack spacing={6}>
          <IconButton
            aria-label="Home"
            icon={<FiHome />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'gray.700' }}
          />
          {isAdmin && (
            <>
              <IconButton
                aria-label="Products"
                icon={<FiPackage />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'gray.700' }}
              />
              <IconButton
                aria-label="Users"
                icon={<FiUsers />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'gray.700' }}
              />
            </>
          )}
          <IconButton
            aria-label="Settings"
            icon={<FiSettings />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'gray.700' }}
          />
          <IconButton
            aria-label="Logout"
            icon={<FiLogOut />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'gray.700' }}
            mt="auto"
          />
        </VStack>
      </Box>
      <Box flex={1} bg="gray.50">
        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
      </Box>
    </Flex>
  );
};

export default DashboardLayout;