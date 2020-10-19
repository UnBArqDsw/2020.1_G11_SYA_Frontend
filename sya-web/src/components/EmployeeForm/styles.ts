import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
  background: rgba(20,18,18, 0.3);
`;

export const Card = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 32.63%;
  height: 38%;
  padding: 38px 50px 38px 50px;
  z-index: 16;
  background: #141212;
  border: 4px solid #fcfcfc;
  border-radius: 15px;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 22px !important;
    padding: 0 8px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 22px;
    }

    &:not(:first-child) {
      margin-top: 24px;
    }

    input[type="text"] {
      background: transparent;
      position: relative;
      color: #fcfcfc;
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid ${shade(0.2, '#fcfcfc')};
      margin-left: 25px;
      font-size: 22px;
    }
  }

  svg {
    border-radius: 50%;
    padding: 5px;
    border: 3px solid #fcfcfc;
    width: 60px;
    height: 60px;
  }
`;


