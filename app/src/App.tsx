import React, { useEffect, useState } from 'react';
import './App.css';
import { TESTQUERY } from './services/graphqlService/queries';
import { useQuery } from '@apollo/client';
import { getPostNumberByMonth } from './utils/data-handler';
import { ValuePerMonth } from './types';
import Dashboard from './containers/Dashboard';

function App() {
  const { loading, error, data } = useQuery(TESTQUERY);
  const [chartData, setChartData] = useState<ValuePerMonth | null>(null);

  useEffect(() => {
    if (data) {
      const postsByMonth = getPostNumberByMonth(data.allPosts);
      setChartData(postsByMonth);
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
