import React from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { RiArchiveFill } from 'react-icons/ri';
import { ImHourGlass } from 'react-icons/im';

import { Container, Archive, Card, Duration } from './styles';

interface WorkProps {
  name: string;
  duration: string;
}

const WorkItem: React.FC<WorkProps> = ({ name, duration }) => {
  return (
    <Container>
      <Card>
        <span>
          <FiAlertCircle color="#FCFcfc" size={50} />
        </span>
        <div>
          <p>{ name }</p>
        </div>
        <Duration>
          <ImHourGlass color="#FCFcfc" size={18} />
          <p>{ duration }</p>
        </Duration>
      </Card>
      <Archive>
        <span>
          <RiArchiveFill color="#FCFcfc" size={50} />
        </span>
      </Archive>
    </Container>
  );
};

export default WorkItem;
