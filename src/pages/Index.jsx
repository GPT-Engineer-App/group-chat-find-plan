import { useState } from "react";
import { Box, Center, ChakraProvider, Flex, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { FaLocationArrow, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there!", align: "flex-start", bg: "blue.100" },
    { text: "Hello!", align: "flex-end", bg: "green.100" },
    { text: "How's everything going?", align: "flex-start", bg: "blue.100" },
    { text: "All good, thanks!", align: "flex-end", bg: "green.100" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, align: "flex-end", bg: "green.100" }]);
      setInputValue("");
    }
  };

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
              {messages.map((message, index) => (
                <Text key={index} bg={message.bg} p={2} borderRadius="lg" alignSelf={message.align} maxW="70%">
                  {message.text}
                </Text>
              ))}
            </Flex>
            <Flex w="full" align="center" p={3}>
              <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." flex="1" />
              <IconButton onClick={handleSendMessage} icon={<FaPaperPlane />} ml={2} colorScheme="blue" aria-label="Send message" />
              <IconButton icon={<FaLocationArrow />} ml={2} colorScheme="teal" aria-label="Find plan" />
            </Flex>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default Index;
