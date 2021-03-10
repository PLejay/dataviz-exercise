import React from 'react';
import { ValueByMonth } from '../types';
import LineChart from '../components/LineChart';

interface Props {
  data: ValueByMonth;
}

function Dashboard(props: Props) {
  const { data } = props;

  return <LineChart chartData={data} />;
}

export default Dashboard;
