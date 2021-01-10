import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import headset from './headset.svg';
import power from './power.svg';
import user from './user.svg';
import chat from './chat.svg';
import menulink from './menulink.svg';
import logo from './logo.svg';

const Header = (props) => {
  return (
    <div>
      <Container fluid>
        <Navbar style={{ background: '#e5e5e5' }} expand='lg'>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              width='150rem'
              height='75rem'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            style={{ textAlign: 'center' }}
          >
            <Nav className='ml-auto'>
              <Navbar.Brand href='/'>
                <img
                  src={headset}
                  width='28rem'
                  height='28rem'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
              <Nav.Link
                style={{ fontSize: '1.2rem', marginRight: '1.5rem' }}
                href='/'
              >
                Contact Support
              </Nav.Link>
              <Navbar.Brand href='/'>
                <img
                  src={chat}
                  width='28rem'
                  height='28rem'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
              <Navbar.Brand href='/'>
                <img
                  src={user}
                  width='30rem'
                  height='30rem'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
              <Navbar.Brand href='#home'>
                <img
                  src={power}
                  width='30rem'
                  height='30rem'
                  className='d-inline-block align-top'
                  alt='React Bootstrap logo'
                />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
