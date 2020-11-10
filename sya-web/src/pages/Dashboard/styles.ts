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

export const Calendar = styled.div`
  flex: 1;

  .DayScaleEmptyCell-emptyCell-17 {
    background: #363636;
    border-radius: 10px 0px 0px 0px;
  }
  .makeStyles-flexRow-31 {
    background: #363636;
  }

  .Label-text-35 {
    color: #fcfcfc;
    font-family: Montserrat;
  }
  .Cell-dayOfMonth-23 {
    background: #363636;
    color: #fcfcfc;
    font-family: Montserrat;
  }
  .Cell-dayView-25 {
    background: #363636;
  }
  .Cell-dayOfWeek-22 {
    background: #363636;
    color: #fcfcfc;
    font-family: Montserrat;
  }
  .Cell-cell-21 {
    background: #363636;
  }
  .makeStyles-dayScaleEmptyCell-16 {
    background: #141212;
  }
`;
