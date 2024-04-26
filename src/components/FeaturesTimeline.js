import React from 'react';
import { Flex, Box, Text, Heading, Badge } from '@chakra-ui/react';
import { featuresData } from '../utils/consts';

const FeatureTimeline = () => {
  const statusColorScheme = {
    inDevelopment: 'yellow',
    planned: 'gray',
    released: 'green',
  };

  return (
    <Flex
      id="features-timeline"
      direction="column"
      alignItems="center" // Yatay olarak merkeze alır
      justifyContent="center" // Dikey olarak merkeze alır
      h="60vh" // Yüksekliği viewport'un yüksekliğine eşitler
      color="#63c5e9"
      p={5}
    >
      <Box w="100%" maxW="560px" maxH="100px"> {/* İçerik genişliği sınırlayıcı */}
        <Heading mb={4}>Features Timeline</Heading>
        <Flex direction="column" alignItems="start">
          {featuresData.map(({ name, status }, index) => (
            <Flex key={index} p={2} w="100%" justifyContent="space-between">
              <Text fontSize="lg">{name}</Text>
              <Badge colorScheme={statusColorScheme[status]}>{status}</Badge>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default FeatureTimeline;
