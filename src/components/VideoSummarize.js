// VideoSummarizer.js
import React from 'react';
import { Box, Heading, Button, Stack, Icon } from '@chakra-ui/react';
import { FaVideo } from 'react-icons/fa'; // react-icons paketinden YouTube ikonu

const VideoSummarizer = () => {
  return (
    <Box  w="full" p={10} color="#63c5e9" textAlign="center" padding= "100px">
      <Icon as={FaVideo} w={10} h={10} mb={4} color="#63c5e9"/>
      <Heading mb={6}>SUMMAWİEV</Heading>
      <Heading size="md" mb={6}>Summarize your video to any duration.</Heading>
      <Stack direction="row" spacing={4} justify="center">
        <Button colorScheme="blue" variant="outline">
          Summarize Youtube video
        </Button>
        <Button colorScheme="blue" variant="outline">
          Summarize Uploaded video
        </Button>
      </Stack>
    </Box>
  );
};

export default VideoSummarizer;
