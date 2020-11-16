import React, {
  InputHTMLAttributes
} from 'react';

import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  ...rest
}) => {
  return (
    <Container>
      <input type="checkbox" name={name}></input>
      <label htmlFor={name}>{label}</label>
    </Container>
  );
};

export default Checkbox;
