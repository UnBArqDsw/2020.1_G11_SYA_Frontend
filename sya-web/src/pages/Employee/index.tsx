import React from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Sidebar from '../../components/Sidebar';
import PlusIcon from '../../assets/plusIcon.svg';
import EmployeeItem from '../../components/EmployeeItem';
import EmployeeForm from '../../components/EmployeeForm';

import {
  Container,
  EmployeeList,
  Content,
  ButtonToNewEmployee,
} from './styles';

const Employee: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <EmployeeList>
          <EmployeeItem name="Daniel" work="Cabelereiro" />
          <EmployeeItem name="Daniel" work="Cabelereiro" />
          <EmployeeItem name="Daniel" work="Cabelereiro" />
        </EmployeeList>

        <EmployeeForm />

        <ButtonToNewEmployee>
          <BsPlusCircle color="#fcfcfc" size={60} />
        </ButtonToNewEmployee>
      </Content>
    </Container>
  );
};

export default Employee;
