import React from 'react';
import { Heading, Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import ComponentFader from '../components/ComponentFader'
import Section from '../components/Section';
import Container from '../components/Container';

const reviewsQuery = graphql`
  query ReviewsQuery {
    contentfulAbout {
      reviews {
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  }
`;

const ReviewsSection = styled(Section)`
  min-height: auto;
`;

const Review = styled(Text)`
  position: relative;
  &:before {
    position: relative;
    left: -5px;
    line-height: 0;
    font-size: 25px;
    content: "“";
  }
  &:after {
    position: relative;
    bottom: -15px;
    right: -5px;
    line-height: 0;
    font-size: 25px;
    content: "”";
  }
`;

const Reviews = () => (
  <StaticQuery
    query={reviewsQuery}
    render={data => {
      const { reviews } = data.contentfulAbout;
      return (
        <Container>
          <ReviewsSection id="reviews">
            <Heading
              as="h2"
              variant="heading"
              textAlign="center"
              mt={[5, 6, 6]}
            >
              What's it like working with me?
            </Heading>
            <Flex flexWrap='wrap' justifyContent="center" pl={3} pr={3} mt={3} mb={[4, 5, 5]}>
              <Box width={[1, 4/7]}>
                <ComponentFader height="100px" width="100%" interval={9000}>
                  {reviews.map((review, i) => (
                    <Review variant="main" textAlign="center" fontSize={4} key={`review-${i}`}>
                      {review.content.childMarkdownRemark.rawMarkdownBody}
                    </Review>
                  ))}
                </ComponentFader>
              </Box>
            </Flex>
          </ReviewsSection>
        </Container>
      );
    }}
  />
);

export default Reviews;
