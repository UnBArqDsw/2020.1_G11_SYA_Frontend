import React from 'react';
import {
  FiArrowLeft,
  FiPower,
  FiCamera,
  FiMail,
  FiUser,
  FiLock,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Photo, AvatarInput, Break } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

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
            <h1>Meu Perfil</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="changeEmail"
              icon={FiMail}
              placeholder="Trocar e-mail"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </Form>
        </Content>
        <Content>
          <Form onSubmit={() => console.log('Oi')}>
            <h1>Meu Perfil</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="changeEmail"
              icon={FiMail}
              placeholder="Trocar e-mail"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </Form>
        </Content>
      </Break>
    </Container>
  );
};

export default Profile;
