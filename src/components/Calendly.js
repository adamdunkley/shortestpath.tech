import React, { Component } from 'react';
import { Box } from 'rebass';

export default class Calendly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIframe: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showIframe: true }), 300);
  }

  render() {
    const { showIframe } = this.state;
    return (
      <Box sx={{
        height: 502,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray',
        padding: '1',
        borderRadius: 'default'
      }}>
        {
          showIframe &&
            <iframe
              src="https://calendly.com/shortestpath/intro?hide_event_type_details=1&primary_color=4d5055"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly"
            ></iframe>
        }
      </Box>
    );
  }
}