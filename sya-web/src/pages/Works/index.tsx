import React, { useState, useCallback, useEffect, useRef } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { FormHandles } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { RiCloseCircleFill } from 'react-icons/ri';
import { ImHourGlass } from 'react-icons/im';
import { GiTwoCoins } from 'react-icons/gi';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import Sidebar from '../../components/Sidebar';
import WorkItem from '../../components/WorkItem';
import WorkInput from '../../components/EmployeeForm/EmployeeInput';
import Button from '../../components/Button';
import InputTwo from '../../components/InputTwo';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import {
  Container,
  WorkList,
  Content,
  ButtonToNewWork,
  WorkForm,
  Card,
  ContentCard,
  ContentNewWorkInputs,
} from './styles';

interface Work {
  id: string;
  price: string;
  duration: string;
  name: string;
}

interface WorkData {
  price: string;
  duration: string;
  name: string;
}

const Work: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const [isViewForm, setIsViewForm] = useState(false);
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    api.get<Work[]>('/works').then((response) => {
      setWorks(response.data);
    });
  }, [works]);

  const handleSubmit = useCallback(
    async (data: WorkData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          duration: Yup.string().required(),
          price: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, duration, price } = data;
        await api.post('/works', {
          name,
          duration,
          price,
        });
        addToast({
          type: 'success',
          title: 'Serviço criado com sucesso!',
          description: 'Serviço criado, o trabalho engrandece o homem!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.',
        });
      }
    },
    [addToast]
  );

  const handleViewForm = useCallback(() => {
    setIsViewForm(true);
  }, []);

  const handleUnviewForm = useCallback(() => {
    setIsViewForm(false);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <WorkList>
          {works.map((work) => (
            <WorkItem
              key={work.id}
              name={work.name}
              duration={work.duration}
              price={work.price}
            />
          ))}
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
              <Form onSubmit={handleSubmit}>
                <ContentCard>
                  <div>
                    <span>
                      <FiAlertCircle color="#FCFcfc" size={50} />
                    </span>
                    <WorkInput name="name" placeholder="Nome do Serviço" />
                  </div>
                  <ContentNewWorkInputs>
                    <div>
                      <p>Duração</p>
                      <br />
                      <InputTwo
                        name="duration"
                        icon={ImHourGlass}
                        placeholder="07:00"
                        style={{ marginTop: '0px', width: '100%' }}
                      />
                    </div>
                    <div>
                      <p>Valor</p>
                      <br />
                      <InputTwo
                        name="price"
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
