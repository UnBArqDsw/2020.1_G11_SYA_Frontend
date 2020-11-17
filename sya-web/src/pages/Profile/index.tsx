import React, { ChangeEvent, useRef, useCallback } from 'react';
import { FiArrowLeft, FiPower, FiCamera, FiMail, FiUser } from 'react-icons/fi';
import { IoIosBusiness } from 'react-icons/io';
import { AiFillSchedule, AiOutlineShopping, AiFillStar } from 'react-icons/ai';
import { ImHourGlass } from 'react-icons/im';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import InputTwo from '../../components/InputTwo';
import Button from '../../components/Button';
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
  const history = useHistory();

  const { user, updateUser, signOut } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string(),
          email: Yup.string().email(),
          business_area: Yup.string(),
          business_name: Yup.string(),
          initial_hour: Yup.string(),
          finish_hour: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/profile', {
          name: data.name,
          email: data.email,
          business_area: data.business_area,
          business_name: data.business_name,
          initial_hour: data.initial_hour,
          finish_hour: data.finish_hour,
        });

        updateUser(response.data);
        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Informações alteradas com sucesso!',
          description:
            'Suas informações foram alteradas, cheque e confira se está tudo certo!',
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
    [addToast, history, updateUser]
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado',
          });
        });
      }
    },
    [addToast, updateUser]
  );
  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </div>
      </header>
      <Photo>
        <AvatarInput>
          {user.avatar_url ? (
            <img src={user.avatar_url} alt={user.name} />
          ) : (
            <span>
              <IoIosBusiness color="#FCFcfc" />
            </span>
          )}
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </AvatarInput>
      </Photo>
      <Break>
        <Content>
          <Form
            ref={formRef}
            initialData={{
              name: user.name,
              email: user.email,
              cpf: user.cpf,
              business_area: user.business_area,
              business_name: user.business_name,
              initial_hour: user.initial_hour,
              finish_hour: user.finish_hour,
            }}
            onSubmit={handleSubmit}
          >
            <FirstColumn>
              <h1>Meu Perfil</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="cpf"
                icon={AiFillSchedule}
                placeholder="CPF"
                readOnly
              />
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
              <Button
                style={{
                  position: 'relative',
                  right: '250px',
                  top: '55px',
                  width: '301px',
                }}
                type="submit"
              >
                Confirmar mudanças
              </Button>
            </SecondColumn>
          </Form>
        </Content>
      </Break>
    </Container>
  );
};

export default Profile;
