import React from 'react';
import { Button } from 'reactstrap';

import './Header.css';

const Header = (props) => {
   return (
      <div className='Header'>
         <Button color="danger">Danger!</Button>
         <Button color="danger">Danger!</Button>
         <Button color="danger">Danger!</Button>
         <Button color="danger">Danger!</Button>
         <h1>Hello World!</h1>
      </div>
   );
}

export default Header;