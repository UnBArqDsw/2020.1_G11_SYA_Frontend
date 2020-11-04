import React, { useState, useCallback } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { RiCloseCircleFill } from 'react-icons/ri';
import Sidebar from '../../components/Sidebar';
import EmployeeItem from '../../components/EmployeeItem';
import ServiceCard from '../../components/WeekCard/Day';
import Button from '../../components/Button';

import {
  Container,
  EmployeeList,
  Content,
  ButtonToNewEmployee,
  EmployeeForm,
  Card,
  ContentCard,
} from './styles';

const Employee: React.FC = () => {
  const [isViewForm, setIsViewForm] = useState(false);

  const handleViewForm = useCallback(() => {
    setIsViewForm(true);
  }, []);

  const handleUnviewForm = useCallback(() => {
    setIsViewForm(false);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <EmployeeList>
          <EmployeeItem name="Daniel" work="Cabelereiro" />
          <EmployeeItem name="Daniel" work="Cabelereiro" />
          <EmployeeItem name="Daniel" work="Cabelereiro" />
        </EmployeeList>

        <ButtonToNewEmployee>
          <BsPlusCircle color="#fcfcfc" size={60} onClick={handleViewForm} />
        </ButtonToNewEmployee>

        {isViewForm && (
          <EmployeeForm>
            <Card>
              <RiCloseCircleFill
                color="#FCFCFC"
                size={33}
                onClick={handleUnviewForm}
              />
              <ContentCard>
                <div>
                  <span>
                    <FiUser color="#FCFcfc" size={50} />
                  </span>
                  <input
                    type="text"
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
              </ContentCard>
            </Card>
          </EmployeeForm>
        )}
      </Content>
    </Container>
  );
};

export default Employee;
