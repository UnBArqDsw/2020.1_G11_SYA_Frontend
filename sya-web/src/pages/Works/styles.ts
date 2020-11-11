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
  width: 25%;
  min-height: 40%;
  padding: 40px 50px 20px 50px;
  z-index: 16;
  background: #141212;
  border: 4px solid #fcfcfc;
  border-radius: 15px;
  overflow-y: auto;
  overflow-x: hidden;

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

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;

    input {
      max-width: 92%;
    }

    p {
      font-size: 22px;
    }
  }
`;

export const ContentNewWorkInputs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
`;

export const Duration = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 25px;
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;
