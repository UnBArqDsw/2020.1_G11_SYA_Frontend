import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  min-width: 315px;
  width: 28%;
  margin: 25px;
  border: 4px solid #fcfcfc;
  border-radius: 30px;
  overflow-y: hidden;
`;

export const ProfileAvatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  top: 74px;

  #userProfileAvatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin: 0 auto;
    border: 4px solid #fcfcfc;
    transition: all 0.2s;
  }

  a {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fcfcfc;
    background: #141212;
    right: 25px;
    bottom: 40px;
    cursor: pointer;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #fcfcfc;
    }

    &:hover {
      background: #fcfcfc;
      svg {
        color: #141212;
      }
    }
  }

  p {
    margin-top: 20px;
  }
`;
