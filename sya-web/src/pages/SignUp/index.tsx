import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { FiSkipBack, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';
import { Container, Content, Background, WrapPassword, FirstColumn, SecondColumn, CheckboxContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="Logo SYA" />

        <Form onSubmit={handleSubmit}>
          <FirstColumn>
            <h1>Logar</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="cpf" icon={FiUser} placeholder="CPF/CNPJ" />
            <Input name="business_name" icon={AiFillStar} placeholder="Nome da empresa" />
            <Input name="business_area" icon={AiOutlineShopping} placeholder="Área de atuação" />
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
          </FirstColumn>

          <a href="login">
            <FiSkipBack />
            Voltar Para Login
          </a>

          <SecondColumn>
            <h1>Presto serviço das:</h1>
          </SecondColumn>

          <Button type="submit">Continuar</Button>
        </Form>


      </Content>
    </Container>
  );
};

export default SignUp;
