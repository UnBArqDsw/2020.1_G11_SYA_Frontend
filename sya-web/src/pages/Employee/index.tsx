import React from 'react';
import LineBody from '../../components/LineBody';
import Sidebar from '../../components/Sidebar';
import { Container } from './styles';

const Employee: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <LineBody />
    </Container>
  );
};

export default Employee;
