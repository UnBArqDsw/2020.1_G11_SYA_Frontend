import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react';
import { useField } from '@unform/core';
import { Container, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}
const CheckboxInput: React.FC<Props> = ({ name, options, ...rest }) => {
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
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <Label
          style={{
            background: isChecked ? '#fcfcfc' : '#141212',
            color: isChecked ? '#141212' : '#fcfcfc',
          }}
          onClick={() => setIsChecked(!isChecked)}
          htmlFor={option.id}
          key={option.id}
        >
          <input
            defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
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
      ))}
    </Container>
  );
};
export default CheckboxInput;
