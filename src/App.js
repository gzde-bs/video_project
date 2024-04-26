import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import FlipCard from './components/FlipCard';
import theme from './components/theme'; 
import   FAQ from './components/FAQ';
import VideoSummarize from './components/VideoSummarize';
import FeaturesTimeline from './components/FeaturesTimeline';
function App() {
  return (
    <ChakraProvider theme={theme}> 
      <Navbar />
      <VideoSummarize/>
      <FlipCard/>
      <FeaturesTimeline/>
      <FAQ/>
      {/* Diğer bileşenler buraya eklenecek */}
    </ChakraProvider>
  );
}

export default App;
