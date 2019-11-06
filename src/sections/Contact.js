import React from 'react';
import { Heading, Flex, Box, Text, Link } from 'rebass';
import Section from '../components/Section';
import Container from '../components/Container';
import Calendly from '../components/Calendly';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const ContactSection = styled(Section)`
  min-height: auto;
`;

const Contact = () => (
  <Container>
    <ContactSection>
      <Flex flexWrap='wrap' justifyContent="center" pt={[4, 5, 5]}>
        <Box width={[1, 2/3, 1/2]} pl={3} pr={3} sx={{
            maxWidth: '512px'
          }}>
          <Heading as="h2" variant="subheading" textAlign={['left', 'left', 'left']}>
            Book an intro call
          </Heading>
          <Text variant="main" textAlign={['left', 'left', 'left']} mb={3}>
            Find a time below for a 30 minute call, I'd love to hear
            about your business.
          </Text>
          <Calendly />
        </Box>
        <Box width={[1, 2/3, 1/2]} mt={[4, 4, 0]}  pl={3} pr={3} sx={{
            maxWidth: '512px'
          }}>
          <Heading as="h2" variant="subheading" textAlign={['left', 'left', 'left']}>
            Get in touch
          </Heading>
          <Text variant="main" textAlign={['left', 'left', 'left']} mb={3}>
            If you prefer email, send me an intro here or in your email client
            at <Link href="mailto:intro@shortestpath.tech">intro@shortestpath.tech</Link>.
          </Text>
          <ContactForm />
        </Box>
      </Flex>
    </ContactSection>
  </Container>
);

export default Contact;
