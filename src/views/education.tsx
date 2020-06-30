import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #efeef1;
  color: black;
  height: 100vh;
  flex: 4;
  padding: 3rem;
`;

export default function Education() {
  return (
    <Content>
      <h1>Education</h1>
      <h3>Intensive FullStack Developer Program</h3>
      <p>School of Applied Technology</p>
      <p>
        I am a highly motivated, enthusiastic and amiable Full Stack Developer
        with a strong passion for all things technical. Why coding? Simply
        because I have a thirst for knowledge, and learning ever-evolving new
        technologies quenches that thirst! By combining my passion with my
        programming skills I aspire to build software and applications to
        simplify life for the average person.
      </p>
      <div>
        <p>January 2020 - April 2020</p>
      </div>
      <h3>HND(Higher National Diploma) in Computing</h3>
      <p>Worcester College of Technology</p>
      <p>
        I am a highly motivated, enthusiastic and amiable Full Stack Developer
        with a strong passion for all things technical. Why coding? Simply
        because I have a thirst for knowledge, and learning ever-evolving new
        technologies quenches that thirst! By combining my passion with my
        programming skills I aspire to build software and applications to
        simplify life for the average person.
      </p>
      <div>
        <p>2005 - 2010</p>
      </div>
    </Content>
  );
}
