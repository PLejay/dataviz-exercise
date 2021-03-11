import React from 'react';
import { ChartData } from '../types';
import PostChart from '../components/PostChart';
import TopicChart from '../components/TopicChart';

interface Props {
  data: ChartData;
}

function Dashboard(props: Props) {
  const { data } = props;

  return (
    <div>
      <h1>Data visualisation exercise</h1>
      <PostChart chartData={data.postData} />
      <TopicChart chartData={data.topicData} />
    </div>
  );
}

export default Dashboard;
