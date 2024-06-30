import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, Box, Button, Heading, Container } from '@chakra-ui/react';

function UploadedVideoPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Container centerContent>
      <Box
        bg="gray.700"
        color="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        mt={10}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="lg">
            Choose an option:
          </Heading>
          <Button colorScheme="teal" size="lg" onClick={() => handleNavigation('/human')}>
            Human
          </Button>
          <Button colorScheme="teal" size="lg" onClick={() => handleNavigation('/object')}>
            Object
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default UploadedVideoPage;