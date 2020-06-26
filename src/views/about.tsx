import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #efeef1;
  color: black;
  height: 100vh;
  flex: 3;
  padding: 3rem;
`;

export default function About() {
  return (
    <Content>
      <h1>
        Liam
        <span> Wears</span>
      </h1>
      <p>Tech Enthusiast, Good Googler and aspiring FullStack Developer</p>
      <p>
        I am a highly motivated, enthusiastic and amiable Full Stack Developer
        with a strong passion for all things technical. Why coding? Simply
        because I have a thirst for knowledge, and learning ever-evolving new
        technologies quenches that thirst! By combining my passion with my
        programming skills I aspire to build software and applications to
        simplify life for the average person.
      </p>
      <div>
        <a href="https://github.com/lwears">Github</a>
        <a href="https://www.linkedin.com/in/liam-wears">Linkedin</a>
        <a href="https://github.com/lwears/resume/raw/master/LiamWears_CV.pdf">
          Resume
        </a>
      </div>
    </Content>
  );
}
