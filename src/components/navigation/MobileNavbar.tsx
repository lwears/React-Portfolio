import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyMobileNavbar = styled.nav` 
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: red;
  color: white;
  width: 15vw;
`;

export default function MobileNavbar() {
  return (
    <MyMobileNavbar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </MyMobileNavbar>
  );
}
