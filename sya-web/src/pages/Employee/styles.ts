import styled from 'styled-components';

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
  cursor: pointer;
  background: #141212;
  bottom: 50px;
  right: 50px;
`;
