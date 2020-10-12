import React from 'react';
import { FiArrowLeft, FiPower, FiCamera, FiMail, FiUser } from 'react-icons/fi';
import { AiFillSchedule, AiOutlineShopping, AiFillStar } from 'react-icons/ai';
import { Form } from '@unform/web';
import {
  Container,
  Content,
  Photo,
  AvatarInput,
  Break,
  FirstColumn,
  SecondColumn,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import WeekCard from '../../components/WeekCard';

const Profile: React.FC = () => {
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
          <Form onSubmit={() => console.log('Oi')}>
            <FirstColumn>
              <h1>Meu Perfil</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />

              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="changeEmail"
                icon={FiMail}
                placeholder="Trocar e-mail"
              />
              <h1>Dias de Funcionamento</h1>
              <WeekCard />
            </FirstColumn>

            <SecondColumn>
              <Input name="cpf" icon={AiFillSchedule} placeholder="CPF" />

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
