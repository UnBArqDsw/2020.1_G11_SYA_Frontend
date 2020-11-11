import React, {
  ButtonHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Day: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  const inputRefs = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(
    children as string
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container
      style={{
        background: isChecked ? '#fcfcfc' : '#141212',
        color: isChecked ? '#141212' : '#fcfcfc',
      }}
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      type="button"
      {...rest}
    >
      {children}
      <input ref={inputRefs} type="checkbox" />
    </Container>
  );
};

export default Day;
