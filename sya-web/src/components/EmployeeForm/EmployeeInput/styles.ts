import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  input {
    background: transparent;
    color: #fcfcfc;
    position: relative;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${shade(0.2, '#fcfcfc')};
    margin-left: 25px;
    font-size: 22px;
  }
`;
