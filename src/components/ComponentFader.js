import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
`;

const Fader = styled.div`
  grid-column: 1;
  grid-row: 1;
  &.inactive {
    display: none;
  }
`;

const DotContainer = styled.div`
  text-align: center;
  padding-top: 5px;
`;
const Dot = styled.span`
  display: inline-block;
  padding: 1.5px;
  cursor: pointer;
  &:after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 3px;
    background-color: #fff;
    border: 1px solid #0A0A0A;
    border-radius: 50%;
    transition: background-color 1s;
  }
  &.active:after {
    background-color: #0A0A0A;
  }
`;

export default class ComponentFader extends Component {

  constructor(props) {
    super(props);

    const previousIndex = 0;
    const activeIndex = 0;
    const interval = this.props.interval || 3000;

    this.state = {
      previousIndex,
      activeIndex,
      interval
    };

    this.next = this.next.bind(this);
    this.update = this.update.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(
      this.next,
      this.state.interval + 1000
    );
  }

  clear() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  componentWillUnmount() {
    this.clear();
  }

  next() {
    this.setState(prevState => ({
      previousIndex: this.state.activeIndex,
      activeIndex: -1
    }));
    this.timeout = setTimeout(
      this.update,
      1000
    )
  }

  update() {
    const i = (this.state.previousIndex + 1) % this.props.children.length;
    this.setState(prevState => ({ activeIndex: i }));
  }

  clickDot(i) {
    this.clear();
    this.setState(prevState => ({ activeIndex: i }));
  }

  render() {
    return (
      <>
        <Container>
          {
            this.props.children.map((child, index) => (
              <Fader
                key={'fader-item-' + index}
                className={index === this.state.activeIndex ? null : 'inactive'}
              >
                {child}
              </Fader>
            ))
          }
        </Container>
        <DotContainer>
          {
            this.props.children.map((child, index) => (
              <Dot
                key={'fader-dot-' + index}
                className={index === this.state.activeIndex ? 'active' : null}
                onClick={() => this.clickDot(index)}
              />
            ))
          }
        </DotContainer>
      </>
    );
  }
}