import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  input {
    background: transparent;
    color: #363636;
    position: relative;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid ${shade(0.2, '#fcfcfc')};
    margin-left: 25px;
    font-size: 22px;
    padding: 8px 0;
  }

  ${(props) =>
    props.isErrored &&
    css`
      input {
        border-color: #ff0000;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      input {
        border-color: #fcfcfc;
        color: #fcfcfc;
      }
    `}

    ${(props) =>
    props.isFilled &&
    css`
      input {
        border-color: #fcfcfc;
        color: #fcfcfc;
      }
    `}
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
