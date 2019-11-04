import React, { Component } from 'react';
import { Button } from 'rebass';
import { scroller } from 'react-scroll';

export default class ScrollButton extends Component {
  scroll(elementId) {
    scroller.scrollTo(elementId, {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -42,
    });
  }

  render() {
    return (
      <Button {...this.props} onClick={() => this.scroll(this.props.scrollId)}>
        {this.props.children}
      </Button>
    );
  }
}