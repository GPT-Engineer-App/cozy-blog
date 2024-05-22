import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="brand.800" color="white" py={4}>
          <Container maxW="container.xl">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">
                My Blog
              </Heading>
              <Flex as="nav">
                <Link to="/" style={{ marginRight: "1rem" }}>
                  Home
                </Link>
                <Link to="/about" style={{ marginRight: "1rem" }}>
                  About
                </Link>
                <Link to="/contact">Contact</Link>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Flex flex="1" direction={{ base: "column", md: "row" }} p={4}>
          <Box flex="3" p={4}>
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary...</Text>
              </Box>
            </VStack>
          </Box>

          <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} mt={{ base: 4, md: 0 }}>
            <Heading as="h3" size="md" mb={4}>
              Sidebar
            </Heading>
            <Text>Additional widgets or information can go here.</Text>
          </Box>
        </Flex>

        <Box as="footer" bg="brand.800" color="white" py={4} textAlign="center">
          <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;