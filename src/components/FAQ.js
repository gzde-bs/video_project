"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";

import  {FAQdata} from "../utils/consts";
import {ChevronDownIcon} from "@chakra-ui/icons"
import { useTranslation } from "react-i18next";
export default function SimpleAccordion() {
  const {t}=useTranslation("");
  return (
    
    <Flex
      id="faq-section"
      minH={"75vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container>
      <Heading>
        <Text color="#63c5e9" marginBottom="revert" align="center">Frequently Asked Questions</Text>
      </Heading>

        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {FAQdata.map(({ question,answer}, index) => (
            <AccordionItem key={index}>
              <AccordionButton
              key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                
              >
                <Text fontSize="md" fontWeight="500">{t(question)}</Text>
                <ChevronDownIcon fontSize="24px"  />
              </AccordionButton>
              <AccordionPanel pb={4}>
              <Text color="#2895df" fontWeight="500">{t(answer)}</Text>

              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Flex>
  );
}
