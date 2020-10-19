import React from 'react';

import { FiUser } from 'react-icons/fi';

import { Container, Card, Content } from './styles';

import ServiceCard from '../../components/WeekCard/Day';
import Button from '../../components/Button';


const EmployeeForm: React.FC = () => {
  return (
    <Container>
      <Card>
        <Content>
          <div>
            <span>
              <FiUser color="#FCFcfc" size={50} />
            </span>
            <input
              type="text"
              value=""
              placeholder="Nome do Funcionário"
            />
          </div>
          <div>
            <p>Serviços Prestados</p>
          </div>
          <div>
            <ServiceCard name="service" value="Make">
              Make
            </ServiceCard>
            <ServiceCard name="service" value="Cabelo">
              Cabelo
            </ServiceCard>
            <ServiceCard name="service" value="Barba">
              Barba
            </ServiceCard>
          </div>
          <Button style={{ width: '100%' }} type="submit">
            Salvar
          </Button>
        </Content>
      </Card>
    </Container>
  );
};

export default EmployeeForm;
