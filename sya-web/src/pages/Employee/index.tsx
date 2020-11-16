import React, { useState, useCallback, useEffect } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { RiCloseCircleFill } from 'react-icons/ri';
import Sidebar from '../../components/Sidebar';
import EmployeeItem from '../../components/EmployeeItem';
import EmployeeInput from '../../components/EmployeeForm/EmployeeInput';
import Button from '../../components/Button';
import CheckboxInput from '../../components/CheckboxInput';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  EmployeeList,
  Content,
  ButtonToNewEmployee,
  EmployeeForm,
  Card,
  ContentCard,
  Check,
} from './styles';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const Employee: React.FC = () => {
  const checkboxOptions: CheckboxOption[] = [
    { id: '1', value: 'cabelo', label: 'Cabelo' },
    { id: '2', value: 'make', label: 'Maquiagem' },
  ];
  const [employees, setEmployees] = useState([]);
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
              <Form
                onSubmit={handleSubmit}
                initialData={{ checkbox: ['node'] }}
              >
                <ContentCard>
                  <div>
                    <span>
                      <FiUser color="#FCFcfc" size={50} />
                    </span>
                    <EmployeeInput
                      name="name_employee"
                      placeholder="Nome do Funcionário"
                    />
                  </div>
                  <div>
                    <p>Serviços Prestados</p>
                  </div>
                  <Check>
                    <CheckboxInput name="services" options={checkboxOptions} />
                  </Check>
                  <Button style={{ width: '100%' }} type="submit">
                    Salvar
                  </Button>
                </ContentCard>
              </Form>
            </Card>
          </EmployeeForm>
        )}
      </Content>
    </Container>
  );
};

export default Employee;
