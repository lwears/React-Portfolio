import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Liam from '../../assets/Liam.png';

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryLight};
  color: white;
  flex: 1;
  /* width: 13rem; */
  height: 100vh;
  margin: 0;

  ul {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  li a {
    display: block;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
  }

  li a.active {
    background-color: #4caf50;
    color: white;
  }

  li a:hover:not(.active) {
    background-color: ${({ theme }) => theme.primaryHover};
    color: white;
  }

  .me {
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    max-width: 75%;
    border-radius: 50%;
    border: 0.5rem solid #4484f5;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function DesktopNavBar() {
  return (
    <MyDesktopNavbar>
      <div className="me">
        <img src={Liam} alt="Liam Wears" />
      </div>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </MyDesktopNavbar>
  );
}
