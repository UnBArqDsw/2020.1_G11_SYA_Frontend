import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';

import { FiSkipBack, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background, Row, Col } from './styles';


import Input from '../../components/Input';
import Button from '../../components/Button';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import logoImg from '../../assets/logo.svg';

const SignUpPartTwo: React.FC = () => {

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo SYA" />

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h1>Outras<br />Informações</h1>
              <Input name="cpf-cnpj" icon={FiUser} placeholder="CPF/CNPJ" />
              <Input name="companyName" icon={FiUser} placeholder="Nome da Empresa" />
              <Input name="companyBranch" icon={FiMail} placeholder="Ramo da Empresa" />
            </Col>
            <Col>
              <h1>Presto Serviço das: </h1>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </Col>
          </Row>
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiSkipBack />
          Voltar Para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUpPartTwo;
