import { Box, Flex, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Card, CardBody, Stack, Heading, SimpleGrid } from '@chakra-ui/react';

const UserDashboard = () => {
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold">My Dashboard</Text>
      </Flex>

      <Tabs variant="enclosed">
        <TabList>
          <Tab>Order History</Tab>
          <Tab>Account Details</Tab>
          <Tab>Saved Items</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {/* Order history will be populated here */}
              <Card>
                <CardBody>
                  <Stack spacing={3}>
                    <Heading size="md">No orders yet</Heading>
                    <Text>Your order history will appear here</Text>
                  </Stack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
            <Card>
              <CardBody>
                <Stack spacing={3}>
                  <Heading size="md">Account Information</Heading>
                  <Text>Your account details will appear here</Text>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <Card>
                <CardBody>
                  <Stack spacing={3}>
                    <Heading size="md">No saved items</Heading>
                    <Text>Items you save will appear here</Text>
                  </Stack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default UserDashboard;