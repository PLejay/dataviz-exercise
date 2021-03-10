import React from 'react';
import { ValuePerMonth } from '../types';
import { scaleLinear, scaleBand } from '@visx/scale';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';

interface Props {
  chartData: ValuePerMonth;
}

function LineChart(props: Props) {
  const { chartData } = props;
  // Convert the data to format [['Jan',25],['Feb',18],...]
  let data: [string, number][] = Object.entries(chartData).sort(
    (a, b) => b[1] - a[1]
  );

  // Create a graph, following the example at https://github.com/airbnb/visx
  // Define the graph dimensions and margins
  const width = 500;
  const height = 500;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  // Define max vertical and horizontal bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Set the values used for the x and y axes
  const x = (d: [string, number]) => d[0];
  const y = (d: [string, number]) => d[1];

  // Scale the graph based on the available data
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4,
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
  });

  // Compose together the scale and accessor functions to get point functions
  type Accessor = (d: [string, number]) => string | number;
  const compose = (scale: any, accessor: Accessor) => (
    data: [string, number]
  ) => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d);
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#fc2e1c"
            />
          </Group>
        );
      })}
    </svg>
  );
}

export default LineChart;
