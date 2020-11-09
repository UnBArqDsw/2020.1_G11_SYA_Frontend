import React from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { RiArchiveFill } from 'react-icons/ri';

import { Container, Archive, Card } from './styles';

interface ServiceProps {
  name: string;
}

const ServiceItem: React.FC<ServiceProps> = ({ name }) => {
  return (
    <Container>
      <Card>
        <span>
          <FiAlertCircle color="#FCFcfc" size={50} />
        </span>
        <div>
          <p>{ name }</p>
        </div>
        <span>
          <FiAlertCircle color="#FCFcfc" size={50} />
        </span>
      </Card>
      <Archive>
        <span>
          <RiArchiveFill color="#FCFcfc" size={50} />
        </span>
      </Archive>
    </Container>
  );
};

export default ServiceItem;
