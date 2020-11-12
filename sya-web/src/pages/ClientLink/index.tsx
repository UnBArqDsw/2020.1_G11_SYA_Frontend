import React from 'react';

import { FiArrowLeft, FiPower, FiCamera, FiMail, FiUser, FiPhone } from 'react-icons/fi';
import { AiFillSchedule, AiOutlineShopping, AiFillStar } from 'react-icons/ai';
import { ImHourGlass } from 'react-icons/im';
import { MdBusinessCenter } from 'react-icons/md';
import { Form } from '@unform/web';

import {
  Container,
  Logo,
  CompanyProfile,
  Row,
  Column,
  Topic
} from './styles';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import InputTwo from '../../components/InputTwo';
import Button from '../../components/Button';
import WeekCard from '../../components/WeekCard';
import CheckboxInput from '../../components/CheckboxInput';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface SelectOption {
  id: string;
  value: string;
  label: string;
}

const ClientLink: React.FC = () => {

  const companyName = "Satchel Company";
  const options_work: SelectOption[] = [
    { id: '1', value: 'Valor 1', label: 'Serviço 1' },
    { id: '2', value: 'Valor 2', label: 'Serviço 2' },
    { id: '3', value: 'Valor 3', label: 'Serviço 3' }
  ];
  const options_employee: SelectOption[] = [
    { id: '1', value: 'Valor 1', label: 'Funcionário 1' },
    { id: '2', value: 'Valor 2', label: 'Funcionário 2' },
    { id: '3', value: 'Valor 3', label: 'Funcionário 3' }
  ];

  const manhaOptions: CheckboxOption[] = [
    { id: '1', value: '08_00', label: '8:00' },
    { id: '2', value: '09_00', label: '9:00' },
    { id: '3', value: '10_00', label: '10:00' }
  ];

  const tardeOptions: CheckboxOption[] = [
    { id: '1', value: '12_30', label: '12:30' },
    { id: '2', value: '14_20', label: '14:20' },
    { id: '3', value: '15_00', label: '15:00' }
  ];

  const noiteOptions: CheckboxOption[] = [
    { id: '1', value: '19_00', label: '19:00' },
    { id: '2', value: '20_00', label: '20:00' },
    { id: '3', value: '22_00', label: '22:00' }
  ];

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  if(width <= 480){
    return (
      <Container>
        Largura: { width } <br />
        Sou MENOR e igual  480
      </Container>
    );
  } else {
    return (
      <Container>
        <Form style={{width: "100%"}} onSubmit={() => console.log('Oi')}>
          <Column>
            <Row>
              <CompanyProfile>
                <Logo>
                  <FiUser size={50} />
                </Logo>
                <p>{ companyName }</p>
              </CompanyProfile>

              <Topic>
                Meu Perfil
              </Topic>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="phone" icon={FiPhone} placeholder="Telefone" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Topic>
                Serviço
              </Topic>

              <InputSelect name="work" options={ options_work } icon={MdBusinessCenter} placeholder="Serviço" />

              <Topic>
                Funcionário
              </Topic>

              <InputSelect name="employee" options={ options_employee } icon={FiUser} placeholder="Funcionários" />
            </Row>
            <Row>
              <Topic>
                Calendário
              </Topic>

              Colocar calendário aqui com os dias para selecionar com o input do tipo "Radio",
              que só pode ser selecionado 1 por vez, ou seja, só pode selecionar 1 dia do calendário.

              <Topic>
                Manhã
              </Topic>

              <CheckboxInput name="hour" options={manhaOptions} />

              <Topic>
                Tarde
              </Topic>

              <CheckboxInput name="hour" options={tardeOptions} />

              <Topic>
                Noite
              </Topic>

              <CheckboxInput name="hour" options={noiteOptions} />

            </Row>
          </Column>
          <Column>
            <Button style={{ width: '301px' }} type="submit">
              Confirmar Agendamento
            </Button>
          </Column>
        </Form>
      </Container>
    );
  }
};

export default ClientLink;
