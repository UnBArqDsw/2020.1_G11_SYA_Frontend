import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";

import "../../assets/css/calendarClientLink.css";

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
  Topic,
  SubContainer,
  SubContainerMobile,
  CalendarContainer,
  Aste,
  Calendar,
  CalendarInput
} from './styles';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import InputTwo from '../../components/InputTwo';
import Button from '../../components/Button';
import WeekCard from '../../components/WeekCard';
import CheckboxInput from '../../components/CheckboxInput';
import { GiConsoleController } from 'react-icons/gi';

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

  const [startDate, setStartDate] = React.useState<Date>(new Date());

  if(width <= 480){
    return (
      <Form style={{width: "100%"}} onSubmit={() => console.log('Oi')}>
        <Container widthProp={ width }>
          <SubContainerMobile>
            <Logo>
              <FiUser size={50} />
            </Logo>
            <p>{ companyName }</p>

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


            <Topic>
              Calendário
            </Topic>

            <CalendarContainer>
              <Aste></Aste>
              <Aste></Aste>
              <Aste></Aste>
              <DatePicker
                locale={ pt }
                selected={ startDate }
                onChange={ (value: Date) => setStartDate(value) }
                inline
              />
            </CalendarContainer>

            {/* <CalendarContainer>
              <Aste></Aste>
              <Aste></Aste>
              <Aste></Aste>
              <Calendar>
                  <table>
                    <thead>
                      <th>Seg</th>
                      <th>Ter</th>
                      <th>Qua</th>
                      <th>Qui</th>
                      <th>Sex</th>
                      <th>Sab</th>
                      <th>Dom</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                      </tr>
                    </tbody>
                  </table>
              </Calendar>
            </CalendarContainer> */}


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

            <Button style={{ width: '301px' }} type="submit">
              Confirmar Agendamento
            </Button>
          </SubContainerMobile>
        </Container>
      </Form>
    );
  } else {
    return (
      <Container widthProp={ width }>
        <SubContainer>
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

                <CalendarContainer>
                  <Aste></Aste>
                  <Aste></Aste>
                  <Aste></Aste>
                  <DatePicker
                    locale={ pt }
                    selected={ startDate }
                    onChange={ (value: Date) => setStartDate(value) }
                    inline
                  />
                </CalendarContainer>
                {/* <CalendarContainer>
                  <Aste></Aste>
                  <Aste></Aste>
                  <Aste></Aste>
                  <Calendar>
                      <table>
                        <thead>
                          <th>Seg</th>
                          <th>Ter</th>
                          <th>Qua</th>
                          <th>Qui</th>
                          <th>Sex</th>
                          <th>Sab</th>
                          <th>Dom</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                          </tr>
                        </tbody>
                      </table>
                  </Calendar>
                </CalendarContainer> */}

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
        </SubContainer>
      </Container>
    );
  }
};

export default ClientLink;
