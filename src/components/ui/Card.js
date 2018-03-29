// @flow

import styled from 'styled-components';

export const Card = styled.div.withConfig({
  displayName: 'Card',
})`
  background-color: #d1c4e9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3%;
  box-sizing: border-box;
  max-width: 320px;
  width: 80%;
  margin: 1rem;

  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &: hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Title = styled.div.withConfig({
  displayName: 'Header',
})`
  margin-bottom: .125em;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.1;
`;

export const About = styled.p.withConfig({
  displayName: 'Header',
})`
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Author = styled.div.withConfig({
  displayName: 'Header',
})`
  color: #666;
  font-size: .825em;
  line-height: 1.4;
  margin-bottom: .5em;
`;
