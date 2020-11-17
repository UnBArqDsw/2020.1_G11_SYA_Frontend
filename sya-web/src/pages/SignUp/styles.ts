import styled from 'styled-components';

import { shade } from 'polished';

import signUpBackground from '../../assets/signInBackground.png';

export const Container = styled.div`
  flex-direction: row;
  display: flex;
`;

export const SubContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 79%;
  height: 100vh;
  overflow-y: auto;
  align-items: center;
  position: relative;
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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 50%;

  h1 {
    font-weight: bold;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    button:last-child {
      margin: 0 auto;
      width: 385px;
    }

    > a {
      color: #fcfcfc;
      font-size: 15px;
      margin-top: 20px;
      margin-bottom: 20px;
      text-decoration: none;
      transition: color 0.2s;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#fcfcfc')};
      }
    }
  }

  #HourInput {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1640px;
    margin: 15px auto;

    svg {
      color: #fcfcfc;
      width: 25px;
      height: 25px;
    }

    p {
      margin-top: 15px;
      font-weight: bold;
      font-size: 24px;
    }
  }
`;
