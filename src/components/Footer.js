import React from 'react';
import { Text, Box, Flex, Link } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsSa
} from '@fortawesome/free-brands-svg-icons';
import MeBackground from '../assets/me-background.svg';

const footerQuery = graphql`
  query FooterQuery {
    contentfulAbout {
      companyLongName
      footerImage {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={data => {
      const { companyLongName, footerImage } = data.contentfulAbout;
      return (
        <>
          <Box pl={['40px', '60px', '85px']} mt={[4, 6, 6]} sx={{
            backgroundImage: `url(${MeBackground})`,
            backgroundPosition: ['left bottom', 'center bottom'],
            backgroundRepeat: 'repeat-x',
            backgroundSize: ['680px', '900px', '1024px'],
          }}>
            <Box
              width={['300px', '420px', '480px']}
              sx={{
                margin: '0 auto'
              }}>
              <GatsbyImage
                image={footerImage.gatsbyImageData}
                alt="Hand drawing of Adam"
              />
            </Box>
          </Box>
          <Box mt={0} pt={3} pb={3} sx={{
            background: '#0A0A0A',
            color: '#FFF'
          }} as="footer">
            <Flex
              flexWrap='wrap'
              pt={1}
              pb={1}
              pl={4}
              pr={4}
              sx={{
                minWidth: 320,
                maxWidth: 1024,
                margin: '0 auto',
              }}>
              <Text width={[1, 2 / 3, 1 / 2]} variant="main" pb={[1, 0, 0]} textAlign={['center', 'left', 'left']}>
                <Link
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank" variant="footer" rel="noopener">
                  <FontAwesomeIcon icon={faCreativeCommons} />&nbsp;
                  <FontAwesomeIcon icon={faCreativeCommonsBy} />&nbsp;
                  <FontAwesomeIcon icon={faCreativeCommonsSa} />&nbsp;
                  Some&nbsp;Rights&nbsp;Reserved
                </Link> –
                {new Date().getFullYear()}
              </Text>
              <Text width={[1, 1 / 3, 1 / 2]} variant="main" textAlign={['center', 'right', 'right']} alignSelf="flex-end">
                <Link
                  href="https://beta.companieshouse.gov.uk/company/12092755"
                  target="_blank" variant="footer" rel="noopener">{companyLongName}</Link>
              </Text>
            </Flex>
          </Box>
        </>
      );
    }}
  />
);

export default Footer;
