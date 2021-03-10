import React from 'react';
import { ValuePerMonth } from '../types';
import LineChart from '../components/LineChart';

interface Props {
  data: ValuePerMonth;
}

function Dashboard(props: Props) {
  const { data } = props;

  return <LineChart chartData={data} />;
}

export default Dashboard;
