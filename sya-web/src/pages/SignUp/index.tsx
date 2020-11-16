import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';

import { FiSkipBack, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';
import { ImHourGlass } from 'react-icons/im';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { Container, Background, SubContainer, Row, Column } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputTwo from '../../components/InputTwo';

import logoImg from '../../assets/logo.svg';

interface SignUnFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUnFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
          business_area: Yup.string().min(6, 'No mínimo 6 dígitos'),
          business_name: Yup.string().min(6, 'No mínimo 6 dígitos'),
          finish_hour: Yup.string().required('E-mail obrigatório'),
          initial_hour: Yup.string().required('E-mail obrigatório'),
          cpf: Yup.string().required('E-mail obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no SYA',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Background />

      <SubContainer>
        <img src={logoImg} alt="Logo SYA" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
            </Row>

            <Row>
              <Input
                name="business_name"
                icon={AiFillStar}
                placeholder="Nome da empresa"
              />
              <Input
                name="business_area"
                icon={AiOutlineShopping}
                placeholder="Área de atuação"
              />

              <h1 style={{ marginTop: '25px' }}>Presto serviço das:</h1>
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
              <Link to="/">
                <FiSkipBack />
                Voltar Para Login
              </Link>

              <Button type="submit">Continuar</Button>
            </span>
          </Column>
        </Form>
      </SubContainer>
    </Container>
  );
};

export default SignUp;
