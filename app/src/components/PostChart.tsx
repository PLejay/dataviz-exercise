import React from 'react';
import { ValueByMonth } from '../types';
import { scaleLinear, scaleBand } from '@visx/scale';
import { Group } from '@visx/group';
import { Bar, Line, LinePath } from '@visx/shape';
import { extent } from 'd3-array';

interface Props {
  chartData: ValueByMonth;
}

function PostChart(props: Props) {
  const { chartData } = props;
  // Convert the data to format [['Jan',25],['Feb',18],...]
  let data: [string, number][] = Object.entries(chartData);

  // Create a graph, following the example at https://github.com/airbnb/visx
  // Define the graph dimensions and margins
  const width = 800;
  const height = 500;
  const margin = { top: 10, bottom: 10, left: 20, right: 20 };

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
    <div>
      <h2>Posts by month</h2>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="#C2C2C2" rx={25} ry={14} />
        {data.map((d, i) => {
          const barHeight = yMax - yPoint(d);
          return (
            <Group key={`bar-${i}`} top={10} left={15}>
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
    </div>
  );
}

export default PostChart;
