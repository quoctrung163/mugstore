import React, { useState } from 'react';
import {
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header id='header'>
      <Container>
        <div className='logo float-left'>
        </div>
      </Container>
    </header>
  );
}

export default Header;