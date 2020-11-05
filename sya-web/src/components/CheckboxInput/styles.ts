import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-left: 10px;
  }
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  align-items: center;
  justify-content: center;
  border: 2px solid #fcfcfc;
  border-radius: 10px;
  font-size: 24px;
  background: transparent;
  padding: 10px;

  input {
    visibility: hidden;
    position: absolute;
  }
`;
