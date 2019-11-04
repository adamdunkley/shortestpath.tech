import React from 'react';
import { Box } from 'rebass';

const Calendly = () => (
  <Box sx={{
    height: 502,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: '1',
    borderRadius: 'default'
  }}>
    <iframe
      src="https://calendly.com/shortestpath/intro?hide_event_type_details=1&primary_color=4d5055"
      width="100%"
      height="100%"
      frameBorder="0"
      title="Calendly"
    ></iframe>
  </Box>
);

export default Calendly;