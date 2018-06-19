// @flow

import styled from 'styled-components';

export const Card = styled.div.withConfig({
  displayName: 'Card',
})`
  background-color: #b3e5fc;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5%;
  box-sizing: border-box;
  width: 46%;
  margin: 5px;

  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &: hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Title = styled.div.withConfig({
  displayName: 'Title',
})`
  margin-bottom: .125em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.1;
`;

export const About = styled.p.withConfig({
  displayName: 'About',
})`
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Author = styled.div.withConfig({
  displayName: 'Author',
})`
  color: #666;
  font-size: .825em;
  line-height: 1.4;
  margin-bottom: .5em;
`;

export const Publishig = styled.div.withConfig({
  displayName: 'Publishig',
})`
  color: #666;
  font-size: .825em;
  line-height: 1.4;
  margin-bottom: .5em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.hr.withConfig({
  displayName: 'Divider',
})`
  border: none;
  width: 100%;
  height: 1px;
  background-color: #a094b7;
`;

export const Chip = styled.p.attrs({
  className: 'chip',
})`
  font-size: .625em;
  text-overflow: ellipsis;
`;

export const ChipsBox = styled.div`
  display: flex;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  overflow: hidden;
  width: 95%;
`;
