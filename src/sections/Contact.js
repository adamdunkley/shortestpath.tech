import React from 'react';
import { Heading, Flex, Box, Button, Text, Link } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import Section from '../components/Section';
import Container from '../components/Container';
import Calendly from '../components/Calendly';
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
        <Box as="form" width={[1, 2/3, 1/2]} mt={[4, 4, 0]}  pl={3} pr={3} sx={{
            maxWidth: '512px'
          }} name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <Heading as="h2" variant="subheading" textAlign={['left', 'left', 'left']}>
            Get in touch
          </Heading>
          <Text variant="main" textAlign={['left', 'left', 'left']} mb={3}>
            If you prefer email, send me an intro here or in your email client
            at <Link href="mailto:intro@shortestpath.tech">intro@shortestpath.tech</Link>.
          </Text>
          <Box pb={2}>
            <Label htmlFor='name' fontWeight='body' pb={1}>Your name</Label>
            <Input
              id='name'
              name='name'
              required={true}
            />
          </Box>
          <Box pb={2}>
            <Label htmlFor='email' fontWeight='body' pb={1}>Your email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              required={true}
            />
          </Box>
          <Box pb={3}>
            <Label htmlFor='body' fontWeight='body' pb={1}>Message</Label>
            <Textarea
              id='body'
              name='body'
              rows={18}
              required={true}
            />
          </Box>
          <Box textAlign={['left', 'right', 'right']}>
            <Button type="submit">Send</Button>
          </Box>
        </Box>
      </Flex>
    </ContactSection>
  </Container>
);

export default Contact;
