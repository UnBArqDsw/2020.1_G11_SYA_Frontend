import React from 'react';

import { Container, Icon, Item } from './styles';

const MenuItem: React.FC = () => {
  return (
    <Container>
      <Item>
        <Icon>
          <img src="" alt="Icon" />
        </Icon>
        <p>Agendamentos</p>
      </Item>
      <Item>
        <Icon>
          <img src="" alt="Icon" />
        </Icon>
        <p>Marcar Horário</p>
      </Item>
      <Item>
        <Icon>
          <img src="" alt="Icon" />
        </Icon>
        <p>Serviços</p>
      </Item>
      <Item>
        <Icon>
          <img src="" alt="Icon" />
        </Icon>
        <p>Funcionários</p>
      </Item>
    </Container>
  );
};

export default MenuItem;
