import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import signInBackground from '../../assets/signInBackground.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 800px;

  img {
    width: 200px;
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      text-align: left;
      font-size: 36px;
      margin-bottom: 30px;
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
    text-decoration: none;
    padding-bottom: 30px;
    position: relative;
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

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
