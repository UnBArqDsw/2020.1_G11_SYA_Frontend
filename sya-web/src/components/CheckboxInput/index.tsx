import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { Container, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  option: {
    id: string;
    value: string;
    label: string;
  };
  index: any;
}
const CheckboxInput: React.FC<Props> = ({ name, option, index, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      <Label
        style={{
          background: isChecked ? '#fcfcfc' : '#141212',
          color: isChecked ? '#141212' : '#fcfcfc',
        }}
        htmlFor={option.id}
        key={option.id}
      >
        <input
          onClick={() => setIsChecked(!isChecked)}
          ref={(ref) => {
            inputRefs.current[index] = ref as HTMLInputElement;
          }}
          value={option.value}
          type="checkbox"
          id={option.id}
          {...rest}
        />
        {option.label}
      </Label>
    </Container>
  );
};
export default CheckboxInput;
