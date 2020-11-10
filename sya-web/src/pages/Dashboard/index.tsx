import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Sidebar from '../../components/Sidebar';

import { Container, Content, Calendar } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Calendar>
          <Paper style={{ background: '#898989' }}>
            <Scheduler height={858}>
              <ViewState />
              <WeekView startDayHour={9} endDayHour={19} />
              <Appointments />
            </Scheduler>
          </Paper>
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
