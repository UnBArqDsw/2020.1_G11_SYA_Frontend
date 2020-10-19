import React, { useState, useCallback } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Sidebar from '../../components/Sidebar';
import EmployeeItem from '../../components/EmployeeItem';
import EmployeeForm from '../../components/EmployeeForm';

import {
  Container,
  EmployeeList,
  Content,
  ButtonToNewEmployee,
} from './styles';

const Employee: React.FC = () => {
  const [isViewForm, setIsViewForm] = useState(false);

  const handleViewForm = useCallback(() => {
    setIsViewForm(true);
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

        {isViewForm && <EmployeeForm />}
      </Content>
    </Container>
  );
};

export default Employee;
