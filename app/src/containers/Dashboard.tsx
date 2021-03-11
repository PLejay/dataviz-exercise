import React from 'react';
import { ChartData } from '../types';
import LineChart from '../components/LineChart';
import TopicChart from '../components/TopicChart';

interface Props {
  data: ChartData;
}

function Dashboard(props: Props) {
  const { data } = props;

  return (
    <div>
      <LineChart chartData={data.postData} />
      <TopicChart chartData={data.topicData} />
    </div>
  );
}

export default Dashboard;
