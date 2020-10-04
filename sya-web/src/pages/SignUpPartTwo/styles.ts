import styled from 'styled-components';

import { shade } from 'polished';

import signUpBackground from '../../assets/signupBackgroundPartOne.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 1000px;

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      text-align: left;
      font-size: 36px;
      margin-bottom: 46px;
      font-weight: bold;
    }

    a {
      color: #fcfcfc;
      text-align: left;
      display: block;
      font-size: 15px;
      margin-top: 20px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fcfcfc')};
      }
    }
  }
  > a {
    color: #fcfcfc;
    text-align: left;
    display: block;
    font-size: 15px;
    margin-top: 20px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#fcfcfc')};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Col = styled.div`
  margin: 0 5%;
  input {
    max-width: 320px;
    width: 320px;
  }
`;


