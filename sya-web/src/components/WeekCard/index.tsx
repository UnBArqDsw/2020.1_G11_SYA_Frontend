import React from 'react';

import { Container } from './styles';
import Day from './Day';

const WeekCard: React.FC = () => {
  return (
    <Container>
      <div>
        <Day>Seg</Day>
        <Day>Ter</Day>
        <Day>Qua</Day>
        <Day>Qui</Day>
      </div>
      <div>
        <Day>Sex</Day>
        <Day>Sab</Day>
        <Day>Dom</Day>
      </div>
    </Container>
  );
};

export default WeekCard;
