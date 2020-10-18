import React from 'react';

import { FaSuitcase } from 'react-icons/fa';
import { ImHourGlass, ImClock } from 'react-icons/im';
import { FiUsers } from 'react-icons/fi';
import { Container, Item } from './styles';

const MenuItem: React.FC = () => {
  return (
    <Container>
      <Item>
        <div>
          <ImClock color="#FCFcfc" size={30} />
        </div>
        <p>Agendamentos</p>
      </Item>

      <Item>
        <div>
          <ImHourGlass color="#FCFcfc" size={30} />
        </div>
        <p>Marcar Horário</p>
      </Item>

      <Item>
        <div>
          <FaSuitcase color="#FCFcfc" size={30} />
        </div>
        <p>Serviços</p>
      </Item>

      <Item>
        <div>
          <FiUsers color="#FCFcfc" size={30} />
        </div>
        <p>Funcionários</p>
      </Item>
    </Container>
  );
};

export default MenuItem;
