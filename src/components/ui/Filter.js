// @flow

import styled from 'styled-components';

export const FilterBox = styled.div.withConfig({
  displayName: 'FilterBox',
})`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 1%;
  margin-top: 90px;
  padding: 1%;
  box-sizing: border-box;

  width: 260px;
  height: 87%;

  background-color: #e1f5fe;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  overflow: hidden;
`;

export const BucketKey = styled.p.attrs({
  className: 'truncate',
})`
  text-overflow: ellipsis;
  font-weight: ${props => (props.active ? '900' : '300')};
  margin: 0;
`;

export const DocCount = styled.div`
  font-size: 12px;
  text-align: right;
  color: #ccc;
`;

export const List = styled.ul`
  overflow: hidden;
`;

export const BackIcon = styled.i.attrs({
  className: 'material-icons',
})`
  cursor: pointer;
`;

export const ListItem = styled.li`
  font-size: 14px;
  color: #666;
  cursor: pointer;
  padding: 0;
  line-height: 22px;
  font-weight: 300;
  width: 95%;
  border-bottom: ${props => (props.active ? '1px solid #01579b' : 'none')}
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
`;
