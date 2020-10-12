import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #141212;
  width: 100px;
  height: 60px;
  margin-right: 10px;

  border: 2px solid #fcfcfc;
  border-radius: 10px;
  font-size: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#fcfcfc')};
  }
`;
