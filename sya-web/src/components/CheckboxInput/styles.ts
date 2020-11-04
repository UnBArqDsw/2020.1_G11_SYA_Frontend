import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    visibility: hidden;
    position: absolute;
  }
`;

export const Label = styled.label`
  border: 2px solid #fcfcfc;
  border-radius: 10px;
  background: red;
  font-size: 24px;
  background: transparent;
  padding: 10px;
  & + label {
    margin-left: 10px;
  }
`;
