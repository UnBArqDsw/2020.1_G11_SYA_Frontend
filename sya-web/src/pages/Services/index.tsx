import React, { useState, useCallback } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { RiCloseCircleFill } from 'react-icons/ri';
import Sidebar from '../../components/Sidebar';
import ServiceItem from '../../components/ServiceItem';
import ServiceInput from '../../components/EmployeeForm/EmployeeInput';
import Button from '../../components/Button';
import CheckboxInput from '../../components/CheckboxInput';

import {
  Container,
  ServiceList,
  Content,
  ButtonToNewService,
  ServiceForm,
  Card,
  ContentCard,
  Check,
} from './styles';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const Service: React.FC = () => {
  const [isViewForm, setIsViewForm] = useState(false);

  const handleViewForm = useCallback(() => {
    setIsViewForm(true);
  }, []);

  const handleUnviewForm = useCallback(() => {
    setIsViewForm(false);
  }, []);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <ServiceList>
          <ServiceItem name="Cabelo" />
          <ServiceItem name="Barba" />
          <ServiceItem name="Make" />
        </ServiceList>

        <ButtonToNewService>
          <BsPlusCircle color="#fcfcfc" size={60} onClick={handleViewForm} />
        </ButtonToNewService>

        {isViewForm && (
          <ServiceForm>
            <Card>
              <RiCloseCircleFill
                color="#FCFCFC"
                size={33}
                onClick={handleUnviewForm}
              />
              <Form
                onSubmit={handleSubmit}
                initialData={{ checkbox: ['node'] }}
              >
                <ContentCard>
                  <div>
                    <span>
                      <FiAlertCircle color="#FCFcfc" size={50} />
                    </span>
                    <ServiceInput
                      name="name_service"
                      placeholder="Nome do Serviço"
                    />
                  </div>
                  <div>
                    <p>Serviços Prestados</p>
                  </div>
                  <Button style={{ width: '100%' }} type="submit">
                    Salvar
                  </Button>
                </ContentCard>
              </Form>
            </Card>
          </ServiceForm>
        )}
      </Content>
    </Container>
  );
};

export default Service;
