import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FlipCard from "./components/FlipCard";
import theme from "./components/theme";
import FAQ from "./components/FAQ";
import VideoSummarize from "./components/VideoSummarize";
import FeaturesTimeline from "./components/FeaturesTimeline";
import UploadedVideoPage from "./components/UploadedVideoPage";
import HumanForm from "./components/HumanForm"; 
import ObjectForm from "./components/ObjectForm"; 

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <VideoSummarize />
                <FlipCard />
                <FeaturesTimeline />
                <FAQ />
              </>
            }
          />
          <Route path="/upload-video" element={<UploadedVideoPage />} />
          <Route path="/human" element={<HumanForm />} /> 
          <Route path="/object" element={<ObjectForm />} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
