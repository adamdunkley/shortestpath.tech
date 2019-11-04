import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Heading, Box } from 'rebass';
import Section from '../components/Section';
import Container from '../components/Container';

const landingQuery = graphql`
  query LandingQuery {
    contentfulAbout {
      name
      description
      company
      companyLogo {
        fluid(maxWidth: 400){
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Landing = () => (
  <Container>
    <Section id="top">
      <StaticQuery
        query={landingQuery}
        render={({ contentfulAbout, site }) => {
          const { name, description, company, companyLogo } = contentfulAbout;

          return (
            <>
              <Heading
                textAlign="center"
                as="div"
                mb={[3, 4, 4]}
              >
                <Box width={["250px", "250px", "300px"]} sx={{ display: 'inline-block' }}>
                  <Img
                    fluid={companyLogo.fluid}
                    fadeIn={false}
                    loading="eager"
                    alt={company}
                  />
                </Box>
              </Heading>
              <Heading
                textAlign="center"
                as="h1"
                fontSize={[5, 5, 6]}
                mb={[2, 2, 2]}
                letterSpacing={[1, 1, 1]}
              >
                {`${name}`}
              </Heading>
              <Heading
                textAlign="center"
                as="h2"
                fontFamily="body"
                fontWeight="body"
                fontSize={[4, 4, 5]}
                mb={[3, 4, 5]}
                letterSpacing={[1, 1, 1]}
              >
                {`${description}`}
              </Heading>
            </>
          );
        }}
      />
    </Section>
  </Container>
);

export default Landing;
