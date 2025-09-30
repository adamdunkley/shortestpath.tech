import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const SlideOutMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #0A0A0A;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
  z-index: 999;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const MenuButton = styled.a`
  mix-blend-mode: difference;
  position: fixed;
  z-index: 1000;
  top: 16px;
  left: 16px;
  cursor: pointer;
  transition: opacity 1s;
  padding: 2px 3px;

  @media (max-width: 1080px) {
    mix-blend-mode: normal;
    background: #FFFFFF;
    border-radius: 2px;
    svg {
      color: black;
    }
  }
`;

const MenuItem = styled(Link)`
  color: #FFF;
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  padding: 16px;
  font-weight: 200;
  transition: background 1s, color 1s;

  &.active {
    background: #FFFFFF;
    color: #0A0A0A;
  }
`;

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      start: true,
    };

    this.scrollPoints = {
      about: 'About me',
      'about-cto': 'What is an interim CTO?',
      contact: 'Contact me',
    };

    this.scrollStates = {};
    for (const id of Object.keys(this.scrollPoints)) {
      this.scrollStates[id] = false;
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.scroll = this.scroll.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    this.setState({
      start: false,
    });
  }

  open() {
    this.setState({
      isOpen: true,
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  scroll() {
    this.setState({
      isOpen: false
    });
  }

  setActive(to) {
    if (this.scrollStates[to]) {
      return;
    }
    // Track navigation events with gtag
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'Scrolled to ' + to, {
        event_category: 'Navigation',
        event_label: to
      });
    }
    this.scrollStates[to] = true;
  }

  render() {
    return (
      <>
        <MenuButton onClick={this.open} style={{ opacity: this.state.isOpen || this.state.start ? 0 : 1 }}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
        <Overlay isOpen={this.state.isOpen} onClick={this.close} />
        <SlideOutMenu isOpen={this.state.isOpen}>
          <CloseButton onClick={this.close}>×</CloseButton>
          {Object.keys(this.scrollPoints).map(id => (
            <MenuItem
              onClick={this.scroll}
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-62}
              onSetActive={this.setActive}
              key={`menu-item-${id}`}
            >
              {this.scrollPoints[id]}
            </MenuItem>
          ))}
        </SlideOutMenu>
      </>
    );
  }
}