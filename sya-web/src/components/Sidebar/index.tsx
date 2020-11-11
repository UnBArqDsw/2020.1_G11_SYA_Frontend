import React from 'react';
import { FiEdit } from 'react-icons/fi';
import MenuItem from '../MenuItem';
import { Container, ProfileAvatar } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <ProfileAvatar>
        <img
          id="userProfileAvatar"
          src="https://avatars0.githubusercontent.com/u/42544693?s=460&u=565def9804de5d4e1b0f6fc609d3cc96fff3fd6e&v=4"
          alt="Satchel"
        />
        <a href="/profile">
          <FiEdit />
        </a>
        <p>Pedro Satchel Company</p>
      </ProfileAvatar>
      <MenuItem />
    </Container>
  );
};

export default Sidebar;
