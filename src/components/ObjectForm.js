import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  HStack,
} from "@chakra-ui/react";

function ObjectForm() {
  const [videoPath, setVideoPath] = useState("");
  const [gpuSelected, setGpuSelected] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [outputVideoPath, setOutputVideoPath] = useState("");

  const class_names = {
    0: { name: "person" },
    1: { name: "bicycle" },
    2: { name: "car" },
    3: { name: "motorbike" },
    4: { name: "aeroplane" },
    5: { name: "bus" },
    6: { name: "train" },
    7: { name: "truck" },
    8: { name: "boat" },
    9: { name: "traffic light" },
    10: { name: "fire hydrant" },
    11: { name: "stop sign" },
    12: { name: "parking meter" },
    13: { name: "bench" },
    14: { name: "bird" },
    15: { name: "cat" },
    16: { name: "dog" },
    17: { name: "horse" },
    18: { name: "sheep" },
    19: { name: "cow" },
    20: { name: "elephant" },
    21: { name: "bear" },
    22: { name: "zebra" },
    23: { name: "giraffe" },
    24: { name: "backpack" },
    25: { name: "umbrella" },
    26: { name: "handbag" },
    27: { name: "tie" },
    28: { name: "suitcase" },
    29: { name: "frisbee" },
    30: { name: "skis" },
    31: { name: "snowboard" },
    32: { name: "sports ball" },
    33: { name: "kite" },
    34: { name: "baseball bat" },
    35: { name: "baseball glove" },
    36: { name: "skateboard" },
    37: { name: "surfboard" },
    38: { name: "tennis racket" },
    39: { name: "bottle" },
    40: { name: "wine glass" },
    41: { name: "cup" },
    42: { name: "fork" },
    43: { name: "knife" },
    44: { name: "spoon" },
    45: { name: "bowl" },
    46: { name: "banana" },
    47: { name: "apple" },
    48: { name: "sandwich" },
    49: { name: "orange" },
    50: { name: "broccoli" },
    51: { name: "carrot" },
    52: { name: "hot dog" },
    53: { name: "pizza" },
    54: { name: "donut" },
    55: { name: "cake" },
    56: { name: "chair" },
    57: { name: "sofa" },
    58: { name: "pottedplant" },
    59: { name: "bed" },
    60: { name: "diningtable" },
    61: { name: "toilet" },
    62: { name: "tvmonitor" },
    63: { name: "laptop" },
    64: { name: "mouse" },
    65: { name: "remote" },
    66: { name: "keyboard" },
    67: { name: "cell phone" },
    68: { name: "microwave" },
    69: { name: "oven" },
    70: { name: "toaster" },
    71: { name: "sink" },
    72: { name: "refrigerator" },
    73: { name: "book" },
    74: { name: "clock" },
    75: { name: "vase" },
    76: { name: "scissors" },
    77: { name: "teddy bear" },
    78: { name: "hair drier" },
    79: { name: "toothbrush" },
  };

  const handleVideoPathChange = (event) => {
    setVideoPath(event.target.value);
  };

  const handleGpuChange = (value) => {
    setGpuSelected(value === "1");
  };

  const handleClassChange = (event) => {
    const value = event.target.value;
    setSelectedClasses((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      video_path: videoPath,
      detect: 1,
      use_gpu: gpuSelected ? 1 : 0,
      classes: selectedClasses,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/detect",
        formData
      );
      console.log(response.data);

      if (response.data.output_video_path) {
        setOutputVideoPath(response.data.output_video_path);
      }
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
            Object Form
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
            <FormLabel as="legend">Processing Unit:</FormLabel>
            <RadioGroup
              value={gpuSelected ? "1" : "0"}
              onChange={handleGpuChange}
            >
              <Stack direction="row" spacing={4}>
                <Radio value="1">GPU</Radio>
                <Radio value="0">CPU</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Select Classes:</FormLabel>
            <VStack align="start">
              {Object.entries(class_names).map(([key, { name }]) => (
                <HStack key={key}>
                  <Checkbox value={key} onChange={handleClassChange}>
                    {name}
                  </Checkbox>
                </HStack>
              ))}
            </VStack>
          </FormControl>
          <Button colorScheme="teal" size="lg" type="submit">
            Submit
          </Button>
        </VStack>
        {outputVideoPath && (
          <div>
            <h2>Output Video</h2>
            <video controls src={outputVideoPath} width="400" height="300" />
          </div>
        )}
      </Box>
    </Container>
  );
}

export default ObjectForm;
