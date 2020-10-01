import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fcfcfc;
  height: 60px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #363636;
  width: 100%;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#fcfcfc')};
  }
`;
