import React, { useRef, useCallback } from 'react';
import { FiArrowLeft, FiPower, FiCamera, FiMail, FiUser } from 'react-icons/fi';
import { AiFillSchedule, AiOutlineShopping, AiFillStar } from 'react-icons/ai';
import { ImHourGlass } from 'react-icons/im';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../../components/Input';
import InputTwo from '../../components/InputTwo';
import Button from '../../components/Button';
import WeekCard from '../../components/WeekCard';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Content,
  Photo,
  AvatarInput,
  Break,
  FirstColumn,
  SecondColumn,
} from './styles';

interface ProfileData {
  name: string;
  email: string;
  cpf: string;
  business_area: string;
  business_name: string;
  finish_hour: string;
  initial_hour: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome necessário'),
          email: Yup.string().email().required('Duração necessária'),
          cpf: Yup.string().required('CPF necessário'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Serviço criado com sucesso!',
          description: 'Serviço criado, o trabalho engrandece o homem!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao criar serviço',
          description: 'Ocorreu um erro ao criar o serviço, tente novamente',
        });
      }
    },
    [addToast]
  );
  return (
    <Container>
      <header>
        <div>
          <FiArrowLeft />
          <FiPower />
        </div>
      </header>
      <Photo>
        <AvatarInput>
          <img
            src="https://avatars1.githubusercontent.com/u/48137972?s=460&u=7471585d946d915235ff9532f65a4082788abb06&v=4"
            alt="Daniel"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={() => console.log('Oi')} />
          </label>
        </AvatarInput>
      </Photo>
      <Break>
        <Content>
          <Form
            initialData={{
              name: user.name,
              email: user.email,
              cpf: user.cpf,
              business_area: user.business_area,
              business_name: user.business_name,
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <FirstColumn>
              <h1>Meu Perfil</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input name="cpf" icon={AiFillSchedule} placeholder="CPF" />

              <h1>Dias de Funcionamento</h1>
              <WeekCard />
            </FirstColumn>

            <SecondColumn>
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

              <h1>Presto Serviço das: </h1>
              <div>
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
            </SecondColumn>
          </Form>
          <Button style={{ width: '301px' }} type="submit">
            Confirmar mudanças
          </Button>
        </Content>
      </Break>
    </Container>
  );
};

export default Profile;
