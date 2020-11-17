import React from 'react';

import { FaSuitcase } from 'react-icons/fa';
import { ImHourGlass, ImClock } from 'react-icons/im';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Item } from './styles';

const MenuItem: React.FC = () => {
  return (
    <Container>
      <Link style={{ outline: 'none', textDecoration: 'none' }} to="/dashboard">
        <Item>
          <div>
            <ImClock color="#FCFcfc" size={30} />
          </div>
          <p>Agendamentos</p>
        </Item>
      </Link>

      <Link style={{ outline: 'none', textDecoration: 'none' }} to="/works">
        <Item>
          <div>
            <FaSuitcase color="#FCFcfc" size={30} />
          </div>
          <p>Serviços</p>
        </Item>
      </Link>

      <Link style={{ outline: 'none', textDecoration: 'none' }} to="/employees">
        <Item>
          <div>
            <FiUsers color="#FCFcfc" size={30} />
          </div>
          <p>Funcionários</p>
        </Item>
      </Link>
    </Container>
  );
};

export default MenuItem;
