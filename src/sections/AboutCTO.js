import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import Container from '../components/Container';

const aboutCTOQuery = graphql`
  query AboutCTOQuery {
    contentfulAbout {
      ctoInfo {
        title
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  }
`;

const AboutCTOContainer = styled(Container)`
  background: black;
  color: white;
`;

const AboutCTOSection = styled(Section)`
  min-height: auto;
`;

const AboutCTO = () => (
  <StaticQuery
    query={aboutCTOQuery}
    render={data => {
      const { ctoInfo } = data.contentfulAbout;
      return (
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
              {ctoInfo.map((item, i) => (
                <Box
                  width={[1, 1/2, 1/3]}
                  pt={[4, 4, 5]}
                  pl={[3, 2, 2]}
                  pr={[3, 2, 2]}
                  key={`about-cto-intem-${i}`}
                >
                  <Heading as="h3" variant="subheading">{item.title}</Heading>
                  <Text variant="main">
                      {item.content.childMarkdownRemark.rawMarkdownBody}
                  </Text>
                </Box>
              ))}
            </Flex>
          </AboutCTOSection>
        </AboutCTOContainer>
      );
    }}
  />
);

export default AboutCTO;
