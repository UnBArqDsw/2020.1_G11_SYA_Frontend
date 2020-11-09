import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;

  & + div {
    margin-top: 50px;
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background: #000;
  padding: 16px;
  width: 100%;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 70px;
    background: #fcfcfc;
    left: 0;
  }

  span {
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 15px;
  }

  p {
    padding-bottom: 12px;
    font-size: 24px;
  }

  p:last-child {
    margin-top: 10px;
    font-size: 18px;
  }

`;

export const Archive = styled.div`
  display: flex;
  margin-left: 20px;
  span {
    border-radius: 50%;
    padding: 10px;
    border: 3px solid #fcfcfc;
  }
`;
