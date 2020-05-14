import React, { useContext } from 'react';
import styled from '@emotion/styled';

const NavBar = styled.nav`
  background: #412c41;
  color: #fff;
  // display: flex;
  // justify-content: space-around;
  padding: 30px 60px;
`;

const Nav = () => {

  return (
    <NavBar>
      <a href="">BookLibs</a>
      <div>
        <input type="text" placeholder="Search on BookLibs" />
      </div>
      <div>
        <a href="#">Share Link</a>
        <a>LL</a>
        <a>NN</a>
        <a>IM</a>
      </div>

    </NavBar>
  );
};

export default Nav;
