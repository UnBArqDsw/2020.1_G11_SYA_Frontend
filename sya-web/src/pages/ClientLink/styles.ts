import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  widthProp: number;
}

export const Container = styled.div<ContainerProps>`

  ${(props) =>
    props.widthProp > 480 &&
    css`
        display: flex;
        flex-direction: column;
        height: 94vh;
        padding: 30px;
        margin: 25px;
        border: 2px solid #fcfcfc;
        border-radius: 30px;
    `}

  ${(props) =>
    props.widthProp <= 480 &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 94vh;
      padding: 40px 20px;
      margin: 25px;
      border: 2px solid #fcfcfc;
      border-radius: 30px;
  `}
`;

export const SubContainerMobile = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;


  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    margin-top: 18px;
    font-size: 24px;
    max-width: 100%;
    font-weight: 500;
    line-height: 29px;
    color: #FCFCFC;
  }

  button:last-child {
    margin-top: 30px;
    margin-bottom: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const Topic = styled.div`
  color: #898989;
  border-bottom: 1px solid #898989;
  padding: 5px 0;
  margin: 30px 0;
  width: 100%;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 50%;
`;

export const Column= styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  button:last-child {
    margin: 0 auto;
  }
`;

export const CompanyProfile = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin: auto 25px;
    font-size: 24px;
    max-width: 220px;
  }
`;

export const Logo = styled.div`
  padding: 8px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #fcfcfc;
  display: flex;
  justify-content:center;

  svg {
    margin: 25px 0;
  }
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
  top: 100px;

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

export const Break = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
      margin-bottom: 30px;
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

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 10px;
  }

  h1 {
    margin-top: 25px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;
