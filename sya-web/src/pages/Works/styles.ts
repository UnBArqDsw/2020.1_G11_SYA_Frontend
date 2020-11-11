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

export const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  height: 90%;
  margin-top: 37px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fcfcfc;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #363636;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #363636;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;

export const ButtonToNewWork = styled.div`
  position: fixed;
  outline: none;
  cursor: pointer;
  background: transparent;
  bottom: 50px;
  right: 50px;
`;

export const WorkForm = styled.div`
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
  width: 40%;
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

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 22px;
    }
  }

  div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ContentNewWorkInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div:first-child {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  div:nth-child(2n) {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  input {
    width: 100%;
  }
`;
