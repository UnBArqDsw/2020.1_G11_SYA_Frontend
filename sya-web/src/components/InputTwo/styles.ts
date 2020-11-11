import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #141212;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  & + div {
    margin-left: 15px;
  }

  border: 2px solid #363636;
  color: #898989;

  display: flex;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff0000;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #fcfcfc;
      color: #fcfcfc;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #fcfcfc;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fcfcfc;
    width: 100%;

    &::placeholder {
      color: #898989;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #ff0000;
    color: #fcfcfc;

    &::before {
      border-color: #ff0000 transparent;
    }
  }
`;
