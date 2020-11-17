import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoIosBusiness } from 'react-icons/io';
import { useAuth } from '../../hooks/auth';
import MenuItem from '../MenuItem';
import { Container, ProfileAvatar } from './styles';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <ProfileAvatar>
        {user.avatar_url ? (
          <img src={user.avatar_url} alt={user.name} />
        ) : (
          <span>
            <IoIosBusiness color="#FCFcfc" />
          </span>
        )}
        <Link to="/profile">
          <FiEdit />
        </Link>
        <p>Pedro Satchel Company</p>
      </ProfileAvatar>
      <MenuItem />
    </Container>
  );
};

export default Sidebar;
