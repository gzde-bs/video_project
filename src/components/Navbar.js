// Navbar.js
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Stack,
  Link,
  Image,
  useColorModeValue,
  useBreakpointValue
}from '@chakra-ui/react';
import logoImage from '../assets/logo.jpeg';
import ThemeToggleButton from './ThemeToogleButton'; 


const Navbar = () => {
  const handleFAQClick = (event) => {
    event.preventDefault();
    document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleUsecaseClick = (event) => {
    event.preventDefault();
    document.getElementById('A new era of productivity for everyone').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeaturesClick = (event) => {
    event.preventDefault();
    document.getElementById('features-timeline').scrollIntoView({ behavior: 'smooth' });
  };

  const bgColor = useColorModeValue('gray.100', 'gray.900'); // Işık ve karanlık mod için arka plan rengi
  const navDisplay = useBreakpointValue({ base: 'none', md: 'flex' }); // "md" breakpoint'ten itibaren görünür olacak

  return (
    <Box bg={bgColor} px={4}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" fontWeight="700"  justifyContent="space-between">
          
          <Link href="/" replace>
          <Image src={logoImage} alt="Logo" boxSize="50px" width="150px" height="60px"/>
          </Link>
          <Flex alignItems="center">
          <Stack
            direction={['column', 'row']} // ekran küçüldüğünde dikey, büyüdüğünde yatay olacak
            display={navDisplay} // "md" breakpoint'ten itibaren göster
            width={{ base: 'full', md: 'auto' }} // temelde tam genişlik, "md" breakpoint'ten itibaren otomatik ayar
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }} // temelde üstten boşluk, "md" breakpoint'ten itibaren 0
          >
            <Link href="#">Upload</Link>
            <Link href="#" onClick={handleUsecaseClick}>Use cases</Link>
            <Link href="#" onClick={handleFeaturesClick}>Features</Link>
            <Link href="#" >Contact Us</Link>
            <Link href="#faq" onClick={handleFAQClick}>FAQ</Link>
              <ThemeToggleButton />
              {/* Diğer bağlantılarınızı buraya ekleyebilirsiniz */}
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
