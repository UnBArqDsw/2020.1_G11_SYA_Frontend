import React from 'react';

import { FiUser } from 'react-icons/fi';

import { RiArchiveFill } from 'react-icons/ri';

import { Container, Archive, Card } from './styles';

interface EmployeeProps {
  name: string;
  work: string;
}

const EmployeeItem: React.FC<EmployeeProps> = ({ name, work }) => {
  return (
    <Container>
      <Card>
        <span>
          <FiUser color="#FCFcfc" size={50} />
        </span>
        <div>
          <p>{name}</p>
          <p>{work}</p>
        </div>
      </Card>
      <Archive>
        <span>
          <RiArchiveFill color="#FCFcfc" size={50} />
        </span>
      </Archive>
    </Container>
  );
};

export default EmployeeItem;
