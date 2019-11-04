import React, { Component } from 'react';
import styled from 'styled-components';
import { push as PushMenu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const styles = {
  bmBurgerButton: {
    display: 'none'
  },
  bmBurgerBars: {
    background: '#0A0A0A',
    backgroundBlendMode: 'difference'
  },
  bmBurgerBarsHover: {
    background: '#0A0A0A'
  },
  bmCrossButton: {
    height: '30px',
    width: '30px'
  },
  bmCross: {
    background: '#FFFFFF'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#0A0A0A',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  }
}

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

    this.open = this.open.bind(this);
    this.isMenuOpen = this.isMenuOpen.bind(this);
    this.scroll = this.scroll.bind(this);
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

  isMenuOpen(state) {
    this.setState({
      isOpen: state.isOpen
    });
  }

  scroll() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <>
        <MenuButton onClick={this.open} style={{ opacity: this.state.isOpen || this.state.start ? 0 : 1 }}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </MenuButton>
        <PushMenu isOpen={ this.state.isOpen } onStateChange={this.isMenuOpen} pageWrapId="page-wrap" outerContainerId="outer-container" styles={styles}>
          <MenuItem
            onClick={this.scroll}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-42}
          >
            About me
          </MenuItem>
          <MenuItem
            onClick={this.scroll}
            activeClass="active"
            to="about-cto"
            spy={true}
            smooth={true}
            duration={500}
            offset={-42}
          >
            What is an interim CTO?
          </MenuItem>
          <MenuItem
            onClick={this.scroll}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-42}
          >
            Contact me
          </MenuItem>
        </PushMenu>
      </>
    );
  }
}