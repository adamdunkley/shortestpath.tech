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
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3cXH-Ke1bdgrFFNm5kr2VpLDlIWfSKAontnDvUhD6FrCjbLLCLxcf_Br8V2onukO9Uii9esrxI?gv=true"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendar"
          ></iframe>
        }
      </Box>
    );
  }
}
