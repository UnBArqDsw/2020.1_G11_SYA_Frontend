import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: object;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const InputSelect: React.FC<InputProps> = ({
  name,
  containerStyle,
  icon: Icon,
  options,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputSelectBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <select
        style={containerStyle}
        onFocus={handleInputSelectFocus}
        onBlur={handleInputSelectBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      >
        {options.map((option, index) => (
          <option value={ option.value }>{ option.label }</option>
        ))}
      </select>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#ff0000" size={20} />
        </Error>
      )}
    </Container>
  );
};
export default InputSelect;
