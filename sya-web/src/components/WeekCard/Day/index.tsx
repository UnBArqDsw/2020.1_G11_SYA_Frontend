import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Day: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container style={{ background: "#141212" }} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Day;
