import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 71px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  padding-top: 25px;

  p {
    padding-left: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Icon = styled.div`
  display: flex;
  padding: 13px;
  svg,
  img {
    border-radius: 50%;
    border: 1px solid white;
    height: 56px;
  }
`;
