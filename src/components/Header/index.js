import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="search" />
    </Search>
    <User>
      <img src="https://avatars1.githubusercontent.com/u/41435?v=4" alt="Giovani Generali" />
      Giovani Generali
    </User>
  </Container>
);

export default Header;
