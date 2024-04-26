import React, { useState } from "react";
import "../styles/flipCard.css";
import { useTranslation } from "react-i18next";
import { Image, Text, Flex, Card, CardHeader, Heading } from "@chakra-ui/react";
import { flipCardData } from "../utils/consts";

const FlipCard = () => {
  const { t } = useTranslation('');
  const [flipped, setFlipped] = useState(false);

  return (
    <div id="A new era of productivity for everyone">
      <Text
        variant={{
          base: "size5",
          sm: "size6",
          md: "size6",
          lg: "size7",
          xl: "size8",
        }}
        textAlign="center"
        color="#63c5e9"
        _hover={{ color: "buttonColor" }}
        fontWeight="bold" // Kalın font
        fontSize="3xl"     // Daha büyük font boyutu
      >
        {t("A new era of productivity for everyone")}
      </Text>
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={{ base: "center", sm: "space-around" }}
        flexWrap="wrap"
        alignItems="center"
        marginTop={{ sm: "30px", md: "40px", lg: "50px", xl: "60px" }}
        z-index="1"
        marginBottom="100px"
      >
        {flipCardData.map(({ image, label, text}, index) => (
          <Card
            key={index}
            boxShadow="2xl"
            bgColor="whiteColor"
            marginBottom={10}
            overflow="hidden"
            h={{
              base: "330px",
              sm: "360px",
              md: "400px",
              lg: "480px",
              xl: "400px",
            }}
            w={{
              base: "240px",
              sm: "280px",
              md: "320px",
              lg: "240px",
              xl: "300px",
            }}
            _hover={{ transform: "scale3d(1.05, 1.05, 1)" }}
            className="flip-card"
            onClick={() => setFlipped((prev) => !prev)}
          >
            <Card className="flip-card-inner">
              <Card className={`flip-card-front ${flipped && "hidden"}`}>
                <CardHeader>
                <Image
                 // position="absolute"
                //   top="0px"
                //   left="0px"
                //    height="100%"
                //   width="100%"
                 src={image}
                 zIndex="-1"
                //   opacity="0.5"
                //   alt="#"
                />
                <Heading
                  size="md"
                  color="whiteColor"
                  // height="100%"
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {t(label)}
                  </Heading>
                </CardHeader>
              </Card>
              <Card
                position="relative"
                className={`flip-card-back ${flipped && "hidden"}` }
                justifyContent="center"
              >
           <Image
                    // margin="auto"
                    // display="block"
                    // auto="fixed"
                    // flexShrink="0"
                    // position="relative"
                    // transitionProperty="transform"
                    // borderRadius="25%"
                    // w="40%"
                    
                  />
                  {/* <Heading
                    textAlign="center"
                    size="sm"
                    color="buttonColor"
                    marginBottom="5px"
                    marginTop="5px"
                  >
                    {t(label)}
                  </Heading> */}
                  <Text
                    fontWeight="500"
                    fontSize="20px"
                    textAlign="center"
                    color="grey.500"
                    fontFamily="Montserrat"
                    lineHeight="1.5"
                    
                    
                    
        
                  >
                    {t(text)}
                  </Text>
              </Card>
            </Card>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default FlipCard;