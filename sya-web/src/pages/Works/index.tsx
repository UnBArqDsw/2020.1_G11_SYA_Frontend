import React, { useState, useCallback } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { Form } from '@unform/web';
import { RiCloseCircleFill } from 'react-icons/ri';
import { ImHourGlass } from 'react-icons/im';
import { GiTwoCoins } from 'react-icons/gi';
import Sidebar from '../../components/Sidebar';
import WorkItem from '../../components/WorkItem';
import WorkInput from '../../components/EmployeeForm/EmployeeInput';
import Button from '../../components/Button';
import CheckboxInput from '../../components/CheckboxInput';
import InputTwo from '../../components/InputTwo';

import {
  Container,
  WorkList,
  Content,
  ButtonToNewWork,
  WorkForm,
  Card,
  ContentCard,
  ContentNewWorkInputs
} from './styles';

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const Work: React.FC = () => {
  const [isViewForm, setIsViewForm] = useState(false);

  const handleViewForm = useCallback(() => {
    setIsViewForm(true);
  }, []);

  const handleUnviewForm = useCallback(() => {
    setIsViewForm(false);
  }, []);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <WorkList>
          <WorkItem name="Cabelo" duration="01:30" />
          <WorkItem name="Barba" duration="00:30" />
          <WorkItem name="Make" duration="01:30" />
        </WorkList>

        <ButtonToNewWork>
          <BsPlusCircle color="#fcfcfc" size={60} onClick={handleViewForm} />
        </ButtonToNewWork>

        {isViewForm && (
          <WorkForm>
            <Card>
              <RiCloseCircleFill
                color="#FCFCFC"
                size={33}
                onClick={handleUnviewForm}
              />
              <Form
                onSubmit={handleSubmit}
                initialData={{ checkbox: ['node'] }}
              >
                <ContentCard>
                  <div>
                    <span>
                      <FiAlertCircle color="#FCFcfc" size={50} />
                    </span>
                    <WorkInput
                      name="name_service"
                      placeholder="Nome do Serviço"
                    />
                  </div>
                  <ContentNewWorkInputs>
                    <div>
                      <p>Duração</p>
                      <br></br>
                      <InputTwo
                        name="duration"
                        icon={ImHourGlass}
                        placeholder="07:00"
                        style={{ marginTop: '0px', width: '100%' }}
                      />
                    </div>
                    <div>
                      <p>Valor</p>
                      <br></br>
                      <InputTwo
                        name="value"
                        icon={GiTwoCoins}
                        placeholder="120,00"
                        style={{ marginTop: '0px', width: '100%' }}
                      />
                    </div>
                  </ContentNewWorkInputs>
                  <Button style={{ width: '100%' }} type="submit">
                    Salvar
                  </Button>
                </ContentCard>
              </Form>
            </Card>
          </WorkForm>
        )}
      </Content>
    </Container>
  );
};

export default Work;
