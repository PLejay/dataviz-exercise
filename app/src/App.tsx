import React from 'react';
import './App.css';
import { TESTQUERY } from './services/graphqlService/queries';
import { useQuery } from '@apollo/client';

function App() {
  const { loading, error, data } = useQuery(TESTQUERY);

  if (loading) return <div>Loading...</div>;
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
