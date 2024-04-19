import { Box, Button, Center, ChakraProvider, Flex, IconButton, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaLocationArrow, FaPaperPlane, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Center bg="gray.50" minH="100vh" p={4}>
        <Box maxW="500px" w="full" bg="white" boxShadow="md" borderRadius="lg">
          <VStack spacing={4}>
            <Box w="full" p={4} borderBottomWidth="1px">
              <Text fontSize="2xl" fontWeight="bold">
                Chat Group
              </Text>
            </Box>
            <Flex direction="column" overflowY="scroll" p={3} h="400px">
              {/* Dummy messages */}
              <Text bg="blue.100" p={2} borderRadius="lg" alignSelf="flex-start" maxW="70%">
                Hi there!
              </Text>
              <Text bg="green.100" p={2} borderRadius="lg" alignSelf="flex-end" maxW="70%">
                Hello!
              </Text>
              <Text bg="blue.100" p={2} borderRadius="lg" alignSelf="flex-start" maxW="70%">
                How's everything going?
              </Text>
              <Text bg="green.100" p={2} borderRadius="lg" alignSelf="flex-end" maxW="70%">
                All good, thanks!
              </Text>
            </Flex>
            <Flex w="full" align="center" p={3}>
              <Input placeholder="Type a message..." flex="1" />
              <IconButton icon={<FaPaperPlane />} ml={2} colorScheme="blue" aria-label="Send message" />
              <IconButton icon={<FaLocationArrow />} ml={2} colorScheme="teal" aria-label="Find plan" />
            </Flex>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default Index;
