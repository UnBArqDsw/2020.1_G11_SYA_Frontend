import React from 'react';
// import LineBody from '../../components/LineBody';
import Sidebar from '../../components/Sidebar';
import PlusIcon from '../../assets/plusIcon.svg';
import UserIcon from '../../assets/user.svg';
import { Container, EmployeeItem, EmployeeList, Body, ButtonToNewEmployee, EmployeeNameAndService } from './styles';

const Employee: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Body>
        <EmployeeList>
          <EmployeeItem>
            <label>
              <img src={UserIcon} alt="Icon" />
            </label>
            <EmployeeNameAndService>
              <p>Funcionário 1</p>
              <p>Serviço 1</p>
            </EmployeeNameAndService>
          </EmployeeItem>
          <EmployeeItem>
            <label>
              <img src={UserIcon} alt="Icon" />
            </label>
            <EmployeeNameAndService>
              <p>Funcionário 2</p>
              <p>Serviço 2</p>
            </EmployeeNameAndService>
          </EmployeeItem>
          <EmployeeItem>
            <label>
              <img src={UserIcon} alt="Icon" />
            </label>
            <EmployeeNameAndService>
              <p>Funcionário 3</p>
              <p>Serviço 3</p>
            </EmployeeNameAndService>
          </EmployeeItem>
        </EmployeeList>
        <ButtonToNewEmployee>
          <img
            src={ PlusIcon }
            alt="New Employee"
          />
        </ButtonToNewEmployee>
      </Body>
    </Container>
  );
};

export default Employee;
