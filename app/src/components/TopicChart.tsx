import React, { useState } from 'react';
import { TopicByMonth } from '../types';
import { extent, max } from 'd3-array';
import { Group } from '@visx/group';
import { line, LinePath } from '@visx/shape';
import { scalePoint, scaleLinear } from '@visx/scale';
import { useEffect } from 'react';
import { monthList } from '../utils/month-list';
import { AxisLeft, AxisBottom } from '@vx/axis';
import TopicLabel from './TopicLabel';
import './styles.css';

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
const getTopicData = (
  topic: string,
  topicsByMonth: TopicByMonth
): [string, number][] => {
  let topicData = [];
  for (const month in topicsByMonth) {
    if (month === 'All') continue;

    // Declaring types for Typescript's benefit - see https://stackoverflow.com/questions/59233965/typescript-element-implicitly-has-type-any-with-for-in-loops
    const monthObject = topicsByMonth[month as keyof typeof topicsByMonth];
    topicData.push([month, monthObject[topic as keyof typeof month]]);
  }

  return topicData as [string, number][];
};

function TopicChart(props: Props) {
  const { chartData } = props;
  const topicAmount = 5;

  // Aggregate data for all top topics
  const topTopics = listTopTopics(chartData, topicAmount);
  const [currentTopicIndex, setCurrentTopicIndex] = useState<number>(0);

  let data: [string, [string, number][]][] = [];
  for (let i = 0; i < topicAmount; i++) {
    data.push([topTopics[i], getTopicData(topTopics[i], chartData)]);
  }

  const handleLabelClick = (label: string): void => {
    const isLabel = (newLabel: string) => newLabel === label;
    setCurrentTopicIndex(topTopics.findIndex(isLabel));
  };

  // Define the graph dimensions and margins
  const width = 800;
  const height = 500;
  const margin = { top: 20, bottom: 50, left: 20, right: 50 };

  // Define max vertical and horizontal bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // let allData = [];
  // data.forEach((topicData) => {
  //   allData.push(topicData[1].reduce((rec, d) => rec.concat(d), []));
  // });

  // Set the values used for the x and y axes
  const x = (d: [string, number]): string => d[0];
  const y = (d: [string, number]): number => d[1];

  // Scale the graph based on the available data
  const xScale = scalePoint({
    range: [0, xMax],
    domain: monthList,
  });
  const yScale = scaleLinear<number>({
    range: [yMax - 20, 0],
    domain: [0, 8],
    round: true,
  }) as any;

  const lineData = data[currentTopicIndex][1] as [string, number][];
  const colors = ['red', 'blue', 'green', 'black', 'orange'];

  return (
    <div>
      <h2>Topic prevalence by month</h2>
      <div className="topics">
        {topTopics.map((topic, i) => (
          <div key={i}>
            <TopicLabel label={topic} handleLabelClick={handleLabelClick} />
          </div>
        ))}
      </div>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="#C2C2C2" rx={25} ry={14} />
        return (
        <Group top={25} left={40}>
          <LinePath
            data={lineData}
            x={(d) => xScale(x(d)) ?? 0}
            y={(d) => yScale(y(d)) ?? 0}
            stroke={colors[currentTopicIndex]}
            strokeWidth={2}
            strokeOpacity={1}
            shapeRendering={'geometricPrecision'}
          />
          <AxisBottom
            scale={xScale}
            top={yMax}
            left={0}
            label={'Months'}
            stroke={'#1b1a1e'}
          />
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={'Topic prevalence (likelihood * frequency)'}
            stroke={'#1b1a1e'}
          />
        </Group>
        );
      </svg>
    </div>
  );
}

export default TopicChart;
