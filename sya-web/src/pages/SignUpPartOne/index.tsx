import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { FiSkipBack, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background, WrapPassword } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUpPartOne: React.FC = () => {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo SYA" />

        <Form onSubmit={handleSubmit}>
          <h1>Logar</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <WrapPassword>
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <div id="passwordSepararion"></div>
              <Input
                name="confirm_password"
                icon={FiLock}
                type="password"
                placeholder="Confirmar Senha"
              />
            </WrapPassword>
            <Button type="submit">Continuar</Button>
        </Form>

        <a href="login">
          <FiSkipBack />
          Voltar Para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUpPartOne;
