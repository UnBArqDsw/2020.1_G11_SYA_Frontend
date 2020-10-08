import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: color-interpolation-filters;

  form {
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: 45px;

    h1 {
      margin-bottom: 36px;
      font-weight: bold;
      text-align: left;
    }

    a {
      color: #fcfcfc;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fcfcfc')};
      }
    }

    Button {
      background: #fcfcfc;
    }
  }
`;

export const Break = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 200px;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -180px auto 0;
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fcfcfc;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #141212;
    }

    &:hover {
      background: ${shade(0.2, '#fcfcfc')};
    }
  }
`;
