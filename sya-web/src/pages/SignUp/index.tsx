import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { FiSkipBack, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';
import { Container, Background, WrapPassword, SubContainer, Row, Column } from './styles';
import { ImHourGlass } from 'react-icons/im';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputTwo from '../../components/InputTwo';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />

      <SubContainer>


        <img src={logoImg} alt="Logo SYA" />

        <Form onSubmit={handleSubmit}>
          <Column>
            <Row>
              <h1>Cadastrar</h1>
            </Row>
          </Column>
          <Column>
            <Row>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="cpf" icon={FiUser} placeholder="CPF/CNPJ" />
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

            </Row>

            <Row>
              <Input name="business_name" icon={AiFillStar} placeholder="Nome da empresa" />
              <Input name="business_area" icon={AiOutlineShopping} placeholder="Área de atuação" />

              <h1 style={{ marginTop: "25px" }}>Presto serviço das:</h1>
              <div id="HourInput">
                <div style={{ marginRight: '10%', width: '30% !important' }}>
                  <InputTwo
                    name="initial_hour"
                    icon={ImHourGlass}
                    placeholder="07:00"
                    style={{ marginTop: '0px', width: '100%' }}
                  />
                </div>
                <p>às</p>
                <div style={{ marginLeft: '10%', width: '30% !important' }}>
                  <InputTwo
                    name="finish_hour"
                    icon={ImHourGlass}
                    placeholder="18:00"
                    style={{ marginTop: '0px', width: '100%' }}
                  />
                </div>
              </div>
            </Row>

          </Column>

          <Column>
            <span>
              <a href="login">
                <FiSkipBack />
                Voltar Para Login
              </a>

              <Button type="submit">Continuar</Button>
            </span>
          </Column>
        </Form>
      </SubContainer>
    </Container>
  );
};

export default SignUp;
