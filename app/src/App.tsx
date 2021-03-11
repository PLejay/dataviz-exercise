import React, { useEffect, useState } from 'react';
import './App.css';
import { TESTQUERY } from './services/graphqlService/queries';
import { useQuery } from '@apollo/client';
import { getPostNumberByMonth, getTopicsByMonth } from './utils/data-handler';
import { ChartData } from './types';
import Dashboard from './containers/Dashboard';

function App() {
  const { loading, error, data } = useQuery(TESTQUERY);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    if (data) {
      const postsByMonth = getPostNumberByMonth(data.allPosts);
      const topicsByMonth = getTopicsByMonth(data.allPosts);
      const newChartData = {
        postData: postsByMonth,
        topicData: topicsByMonth,
      };
      setChartData(newChartData);
    }
  }, [data]);

  if (loading || !chartData) return <div>Loading...</div>;
  return (
    <div className="App">
      <Dashboard data={chartData} />
    </div>
  );
}

export default App;
