import React from 'react';
import { Text, Box, Flex, Link } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MeBackground from '../assets/me-background.svg';

const footerQuery = graphql`
  query FooterQuery {
    contentfulAbout {
      companyLongName
      footerImage {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp
        }
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
                <Img
                  fluid={footerImage.fluid}
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
              <Text width={[1, 2/3, 1/2]} variant="main" pb={[1, 0, 0]} textAlign={['center', 'left', 'left']}>
                <Link
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank" variant="footer">
                    <FontAwesomeIcon icon={['fab', 'creative-commons']} />&nbsp;
                    <FontAwesomeIcon icon={['fab', 'creative-commons-by']} />&nbsp;
                    <FontAwesomeIcon icon={['fab', 'creative-commons-sa']} />&nbsp;
                    Some&nbsp;Rights&nbsp;Reserved
                </Link> – 
                  {new Date().getFullYear()}
              </Text>
              <Text width={[1, 1/3, 1/2]} variant="main" textAlign={['center', 'right', 'right']} alignSelf="flex-end">
                <Link
                  href="https://beta.companieshouse.gov.uk/company/12092755"
                  target="_blank" variant="footer">{companyLongName}</Link>
              </Text>
            </Flex>
          </Box>
        </>
      );
    }}
  />
);

export default Footer;
