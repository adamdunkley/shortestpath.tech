import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Image } from 'rebass';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Container from '../components/Container';
//
// const LandingSection = styled(Section)`
//   min-height: 100vh;
// `;

const landingQuery = graphql`
  query LandingQuery {
    contentfulAbout {
      name
      description
      company
      companyLogo {
        fluid(maxWidth: 400){
          ...GatsbyContentfulFluid_withWebp
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
            <Fade>
              <Heading
                textAlign="center"
                as="div"
                mb={[3, 4, 4]}
              >
                <Image
                  srcSet={companyLogo.fluid.srcSet}
                  alt={company}
                  width={["250px", "250px", "300px"]}
                />
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
            </Fade>
          );
        }}
      />
    </Section>
  </Container>
);

export default Landing;
