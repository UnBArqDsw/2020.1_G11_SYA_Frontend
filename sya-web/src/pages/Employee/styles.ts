import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Body = styled.div`
  position: relative;
  height: 94vh;
  width: 100%;
  padding: 50px;
  margin: 25px;
  border: 2px solid #fcfcfc;
  border-radius: 30px;
`;

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmployeeItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: #000;
  padding: 16px;
  width: 100%;
  cursor: pointer;

  &:not(:first-child){
    margin-top: 20px;
  }

  &::before {
    content: "";
    position:absolute;
    left: 0;
    width: 2px;
    border-radius: 1px;
    height: 10px;
    background: white;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  label{
    border-radius: 50%;
    border: 1px solid #fcfcfc;
    padding:8px;
    margin-left: 10px;

    img, svg {
      width: 25px;
      height: 20px;
    }
  }
`;

export const EmployeeNameAndService = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  p:first-child {
    font-size: 18px;
  }

  p:nth-child(2) {
    font-size: 14px;
  }
`;

export const ButtonToNewEmployee = styled.div`
  position: fixed;
  width: 45.83px;
  height: 45.83px;
  padding: 10px;
  cursor: pointer;
  background: #141212;
  bottom: 50px;
  right: 50px;
  border: 1px solid #fcfcfc;
  border-radius: 50%;
  transition: all .2s;

  svg, img {
    width: 100%;
  }

  &:hover {
      background: ${shade(0.2, '#fcfcfc')};

    svg, img {
      fill: #141212;
    }
  }


`;
