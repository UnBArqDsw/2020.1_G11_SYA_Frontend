import React from 'react';


import AppointmentLogo from '../../assets/appointment_logo.svg';
import HourglassLogo from '../../assets/hourglass.svg';
import WorkLogo from '../../assets/work.svg';
import GroupLogo from '../../assets/group.svg';
import { FiEdit3 } from 'react-icons/fi';
import { Container, Item } from './styles';

const MenuItem: React.FC = () => {
  return (
    <Container>
      <a href="#">
        <Item>
          <div>
            <img src={AppointmentLogo} alt="Icon" />
          </div>
          <p>Agendamentos</p>
        </Item>
      </a>
      <a href="#">
        <Item>
          <div>
            <img src={HourglassLogo} alt="Icon" />
          </div>
          <p>Marcar Horário</p>
        </Item>
      </a>
      <a href="#">
        <Item>
          <div>
            <img src={WorkLogo} alt="Icon" />
          </div>
          <p>Serviços</p>
        </Item>
      </a>
      <a href="#">
        <Item>
          <div>
            <img src={GroupLogo} alt="Icon" />
          </div>
          <p>Funcionários</p>
        </Item>
      </a>
    </Container>
  );
};

export default MenuItem;
