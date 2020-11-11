import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 75px;
  padding-top: 71px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  padding-top: 38px;
  cursor: pointer;
  transition: all 0.2s;

  p {
    padding-left: 20px;
    font-family: Montserrat;
    color: #fcfcfc;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    transition: all 0.2s;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #fcfcfc;
    height: 56px;
    width: 56px;
    padding: 13px;
    transition: all 0.2s;
  }

  &:hover {
    color: #898989;
    div {
      border: 3px solid #898989;
    }

    img,
    svg {
      fill: #898989;
    }

    p {
      color: #898989;
    }
  }
`;
