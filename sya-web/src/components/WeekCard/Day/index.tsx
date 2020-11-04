import React, { ButtonHTMLAttributes, useState, useCallback, useEffect } from 'react';

import { Container, Input } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Day: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container style={{ background: (isChecked ? "#fcfcfc" : "#141212"), color: (isChecked ? "#141212" : "#fcfcfc") }} onClick={ () => { setIsChecked(!isChecked) } } type="button" {...rest}>
      {children}
      <Input type="checkbox" checked={ isChecked } />
    </Container>
  );
};



export default Day;
