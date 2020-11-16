import styled from 'styled-components';

import { shade } from 'polished';

import signUpBackground from '../../assets/signupBackgroundPartOne.png';

export const Container = styled.div`
  height: 100vh;
  flex-direction: row;
  display: flex;
  align-items: stretch;

  header {
    height: 260px;
    background: transparent;

    display: flex;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;

      width: 100%;
      max-width: 1640px;
      margin: 0 auto;

      svg {
        color: #fcfcfc;
        width: 45px;
        height: 45px;
      }
    }
  }
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
  max-width: 75%;

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

export const WrapPassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 400px;

  input {
    width: 90px;
  }

  #passwordSepararion{
    width: 65px;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 200px;
  width: 440px;

  h1 {
    margin-top: 25px;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 95px;
  width: 440px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const CheckboxContainer = styled.div`


`;
