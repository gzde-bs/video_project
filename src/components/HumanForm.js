import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";

function HumanForm() {
  const [videoPath, setVideoPath] = useState("");
  const [color, setColor] = useState("blue");
  const [gpuSelected, setGpuSelected] = useState(true);

  const handleVideoPathChange = (event) => {
    setVideoPath(event.target.value);
  };

  const handleColorChange = (value) => {
    setColor(value);
  };

  const handleGpuChange = (value) => {
    setGpuSelected(value === "1");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      video_path: videoPath,
      detect: 1,
      color: color,
      use_gpu: gpuSelected ? 1 : 0,
    };

    try {
      const response = await axios.post("http://localhost:5000/detect", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
        width="100%"
        maxWidth="500px"
      >
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading as="h1" size="lg">
            Human Form
          </Heading>
          <FormControl id="video-path">
            <FormLabel>Video Path:</FormLabel>
            <Input
              type="text"
              value={videoPath}
              onChange={handleVideoPathChange}
              bg="gray.600"
              borderColor="gray.500"
              _hover={{ borderColor: "gray.400" }}
            />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Color:</FormLabel>
            <RadioGroup value={color} onChange={handleColorChange}>
              <Stack direction="row" spacing={4}>
                <Radio value="blue">Blue</Radio>
                <Radio value="black">Black</Radio>
                <Radio value="red">Red</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Processing Unit:</FormLabel>
            <RadioGroup value={gpuSelected ? "1" : "0"} onChange={handleGpuChange}>
              <Stack direction="row" spacing={4}>
                <Radio value="1">GPU</Radio>
                <Radio value="0">CPU</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <Button colorScheme="teal" size="lg" type="submit">
            Submit
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default HumanForm;