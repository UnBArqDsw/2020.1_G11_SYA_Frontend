import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  position: relative;
  height: 94vh;
  width: 100%;
  padding: 50px;
  margin: 25px;
  margin-left: 0px;
  border: 4px solid #fcfcfc;
  border-radius: 30px;
`;

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonToNewEmployee = styled.div`
  position: fixed;
  outline: none;
  cursor: pointer;
  background: transparent;
  bottom: 50px;
  right: 50px;
`;

export const EmployeeForm = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 15;
  background: rgba(20, 18, 18, 0.3);
`;

export const Card = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40%;
  padding: 38px 50px 0px 50px;
  z-index: 16;
  background: #141212;
  border: 4px solid #fcfcfc;
  border-radius: 15px;
  overflow-y: auto;

  > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export const ContentCard = styled.div`
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
  }

  svg {
    border-radius: 50%;
    padding: 5px;
    border: 3px solid #fcfcfc;
    width: 60px;
    height: 60px;
  }
`;
