import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container';

const AboutCTOContainer = styled(Container)`
  background: black;
  color: white;
`;

const AboutCTOSection = styled(Section)`
  min-height: auto;
`;

const AboutCTO = () => (
  <AboutCTOContainer>
    <AboutCTOSection id="about-cto">
      <Heading
        as="h2"
        pt={[5, 5, 6]}
        pl={[3, 2, 2]}
        pr={[3, 2, 2]}
      >
        What is an interim CTO?
      </Heading>
      <Flex flexWrap='wrap' pb={[5, 5, 6]}>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Strategy</Heading>
          <Text variant="main">
              What do you want to do and how are we going to do it?
              I work with people across your business to create a
              pragmatic plan to deliver something great for your users.
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Technical Architecture</Heading>
          <Text variant="main">
            Once a strategy is set, I will work with your tech team
            create technical specs. The output should be concrete and understandable
            by the whole business.
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Hiring</Heading>
          <Text variant="main">
            A great strategy needs a great team. I can help you benchmark
            salaries, write the perfect job ad, build a hiring process and source great candidates.
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Management</Heading>
          <Text variant="main">
            Teams of all sizes need structure to do their
            best work. I help on sprint process, peer review and personal development
            to create an amazing environment.
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Coaching</Heading>
          <Text variant="main">
            The broader team needen't see tech as a black box, I can help lift
            the veil. From 1-1 sessions to workshops I provide insight for your
            team on engaging with tech.
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/3]} pt={[4, 4, 5]} pl={[3, 2, 2]} pr={[3, 2, 2]}>
          <Heading as="h3" variant="subheading">Oversight</Heading>
          <Text variant="main">
            Worrying about due diligence? Need someone technical on your board?
            Just need some technical work reviewed? I can translate for you.
          </Text>
        </Box>
      </Flex>
    </AboutCTOSection>
  </AboutCTOContainer>
);

export default AboutCTO;
