// @flow

import styled from 'styled-components';

export const Card = styled.div.withConfig({
  displayName: 'Card',
})`
  background-color: rgb(207, 242, 230);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1%;
  padding: 1%;
  min-width: 60px;
  width: 80%;
  height: 200px;

  border-radius: 3px;
  border-color: rgb(158, 232, 186);
  > img {
    min-width: 100px;
    min-height: 100px;
  }
`;

export const Header = styled.div.withConfig({
  displayName: 'Header',
})`
width: 100%;
height: 100%;
display: flex;
box-sizing: border-box;
> span {
  white-space: nowrap;
  overflow: hidden;
  min-width: 60px;
  text-overflow: ellipsis;
}
`;
