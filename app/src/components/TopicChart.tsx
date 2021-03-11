import React from 'react';
import { TopicByMonth } from '../types';

interface Props {
  chartData: TopicByMonth;
}

// Get list of the most 'prevalent' topics (likelihood * frequency)
const listTopTopics = (
  topicsByMonth: TopicByMonth,
  amount: number
): string[] => {
  const topicList = Object.entries(topicsByMonth.All);
  topicList.sort((a, b) => b[1] - a[1]);

  let topTopics = [];
  for (let i = 0; i < amount; i++) {
    topTopics.push(topicList[i][0]);
  }
  return topTopics;
};

// Get data for each topic in a format easily usable by the chart
// [['Month', prevalence]...]
const getTopicData = (topic: string, topicsByMonth: TopicByMonth) => {
  let topicData = [];
  for (const month in topicsByMonth) {
    if (month === 'All') continue;

    // Declaring types for Typescript's benefit - see https://stackoverflow.com/questions/59233965/typescript-element-implicitly-has-type-any-with-for-in-loops
    const monthObject = topicsByMonth[month as keyof typeof topicsByMonth];
    topicData.push([month, monthObject[topic as keyof typeof month]]);
  }

  return topicData;
};

function TopicChart(props: Props) {
  const { chartData } = props;

  const topTopics = listTopTopics(chartData, 5);
  console.log(getTopicData(topTopics[0], chartData));

  return <div></div>;
}

export default TopicChart;
