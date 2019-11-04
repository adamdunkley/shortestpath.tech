import React from 'react';
import { Heading, Text, Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ScrollButton from '../components/ScrollButton';
import Section from '../components/Section';
import Container from '../components/Container';

const FudgeBox = styled(Box)`
  right: -30px;
  @media (max-width: 1083px) {
    width: 170px;
    overflow-x: hidden;
    right: -0px;
  }
`;

const paths = [
  <FudgeBox sx={{ position: 'absolute', top: -240, display: ['none', 'block', 'block'] }}>
    <svg width="200px" viewBox="0 0 584 694" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M582,0 C582,272 1,313 1,693" stroke="#979797" fillRule="nonzero"></path>
      </g>
    </svg>
  </FudgeBox>,
  <Box sx={{ position: 'absolute', width: [300, 300, 471], top: [0, -100, -180], right: [0, -80, -170], display: ['none', 'block', 'block'] }}>
    <svg width="100%" viewBox="0 0 1325 729" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M1324,0 C1197,462 63,341 1,728" stroke="#979797" fillRule="nonzero"></path>
      </g>
    </svg>
  </Box>,
  <Box sx={{ position: 'absolute', bottom: 300, left: -160, display: ['none', 'block', 'block'] }}>
    <svg width="400px" viewBox="0 0 1019 404" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M1,0 C1,393 723,393 1018,403" id="Path-3" stroke="#979797" fillRule="nonzero"></path>
      </g>
    </svg>
  </Box>,
  <Box sx={{ position: 'absolute', width: [300, 300, 370], top: [0, -130, -150], right: -100, display: ['none', 'block', 'block'] }}>
    <svg width="100%" viewBox="0 0 1020 593" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M1,592 C82,245 913,119 1018,0" id="Shape" stroke="#979797" fillRule="nonzero"></path>
      </g>
    </svg>
  </Box>,
];

const AboutInfoPicture = (props) => (
  <Box
    width={[1, 7/12, 7/12]}
    textAlign={props.even ? ['center' , 'left' , 'left'] : ['center', 'right', 'right']}
    pl={props.even ? [0, 50, 50] : 0}
    pr={props.even ? 0 : [0, 50, 50]}
    mt={props.i === 0 ? [-120, -250, -250] : (props.even ? 0 : [0, -300, -300])}
    pb={props.even ? 0 : [0, 200, 200]}
    pt={props.even ? [0, 100, 100] : 0}
    order={[(props.i * 2) - 1, 0, 0]}
    sx={{ position: 'relative' }}>
    {paths[props.i]}
    <Fade>
      <Image
        srcSet={props.fluidImage.srcSet}
        width={[200, 324, 324]}
      />
    </Fade>
  </Box>
);

const AboutInfo = (props) => {
  let items = [];
  let even = false;
  let i = 0;
  for (const item of props.info) {
    if (even) {
      items.push(
        <AboutInfoPicture even={even} itemTitle={item.title} fluidImage={item.image.fluid} i={i} key={item.title + 'Image'} />
      );
    }
    items.push(
      <Box
        alignSelf="flex-end"
        px={[4, 3, 3]}
        py={2}
        width={[1, 5/12, 5/12]}
        pb={even ? [40, 400, 400] : [40, 80, 80]}
        key={item.title}
        order={[i*2, 0, 0]}>
        <Fade>
          <Heading
            as="h3"
            letterSpacing={[1, 1, 1]}
            textAlign={['center', even ? 'right' : 'left', even ? 'right' : 'left']}
            pb={1}
            >
              {item.title}
          </Heading>
          <Text
            variant="main"
            fontSize={4}
            textAlign={['center', even ? 'right' : 'left', even ? 'right' : 'left']}
            >
              {item.content.childMarkdownRemark.rawMarkdownBody}
              {item.buttonText ? <>
                <br />
                <ScrollButton variant="smallOutline" marginTop={2} scrollId={item.buttonScrollId}>{item.buttonText}</ScrollButton>
              </> : null}


          </Text>
        </Fade>
      </Box>
    );
    if (!even) {
      items.push(
        <AboutInfoPicture even={even} itemTitle={item.title} fluidImage={item.image.fluid} i={i} key={item.title + 'Image'} />
      );
    }
    i++;
    even = !even;
  }
  return items;
}

const aboutQuery = graphql`
  query AboutQuery {
    contentfulAbout {
      aboutInfo {
        title
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        image {
          fluid(maxWidth: 400){
            ...GatsbyContentfulFluid_withWebp
          }
        }
        buttonText
        buttonScrollId
      }
    }
  }
`;

const About = () => (
  <Container>
    <Section id="about">
      <StaticQuery
        query={aboutQuery}
        render={data => {
          const { aboutInfo } = data.contentfulAbout;
          return (
            <Flex flexWrap='wrap'>
                <AboutInfo info={aboutInfo}></AboutInfo>
            </Flex>
          );
        }}
      />
    </Section>
  </Container>
);

export default About;
