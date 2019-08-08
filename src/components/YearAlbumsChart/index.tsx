import React, { useLayoutEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';

interface Props {
  data: any;
  color?: string;
  currentYear?: string;
  changeYear(year: string): void;
}

let previous: any = null;

const YearAlbumsChart = ({
 data, color, currentYear, changeYear,
}: Props) => {
  useLayoutEffect(() => {
    if (data.length) {
      setTimeout(() => {
        const list = document.querySelectorAll('svg g text');
        const bar = document.getElementsByTagName('rect')[3];
        const text = list[list.length - 1];
        const g = text ? text.parentElement : null;

        if (g) {
          if (previous) {
            try {
              g.removeChild(previous);
            } catch {}
          }
          const { innerHTML } = g;

          let width = bar ? bar.width.baseVal.value : 60;
          const diff = width * 0.4;
          width += diff;
          const markerElem = `
          <rect
          class="no-events"
          width="${width}"
          height="400px"
          stroke-width="6"
          stroke-dasharray="${width},1200,${width},1200"
            stroke="#8d8d8d"
            rx="0"
            ry="0"
            fill="rgb(0,0,0,0.2)"
            fill-opacity="0.2"
            style="transform:translate(-${diff / 2}px,0);"
            />
            <text transform="translate(${(width - diff) / 2},-20)" text-anchor="middle" 
            style="dominant-baseline: central; font-size: 13px; fill: rgb(51, 51, 51);">Atual</text>`;

          g.innerHTML = markerElem + innerHTML;
          previous = g.querySelector('rect');
        }
      }, 500);
    }
  }, [data, currentYear]);

  const padding = 3.5 / data.length;

  return (
    <div className="chart">
      <ResponsiveBar
        data={data}
        indexBy="year"
        margin={{
          top: 50,
          right: 30,
          bottom: 50,
          left: 60,
        }}
        keys={['tracks0', 'tracks1', 'tracks2', 'tracks3']}
        padding={padding > 1 ? 0.8 : padding}
        colors={[color || '#F7CD8E']}
        defs={[
          {
            id: 'opacity',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.2)',
            spacing: 5,
            lineWidth: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'tracks1',
            },
            id: 'opacity',
          },
          {
            match: {
              id: 'tracks3',
            },
            id: 'opacity',
          },
        ]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        markers={[
          {
            axis: 'x',
            value: currentYear || 0,
            lineStyle: { strokeWidth: 0 },
            textStyle: { fill: 'transparent' },
            legend: 'Atual',
          },
        ]}
        enableLabel={false}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        motionStiffness={90}
        motionDamping={15}
        onClick={(data) => {
          changeYear(data.indexValue.toString());
        }}
        tooltip={(tooltip: any) => {
          const { data, id, value } = tooltip;
          const key = id.toString();
          const index = parseInt(key[key.length - 1]);
          const album = data.albums[index];
          return (
            <div style={{ textAlign: 'center', textTransform: 'capitalize' }}>
              <span>{album.name}</span>
              <br />
              <strong>{`Tracks: ${value} `}</strong>
            </div>
          );
        }}
      />
    </div>
  );
};

export default YearAlbumsChart;

export const buildChartData = (dataYears: any) => {
  const data = [];
  const years: string[] = [];
  for (const year in dataYears) {
    const obj: any = { year };
    years.push(year);
    for (const index in dataYears[year]) {
      const album = dataYears[year][index];
      obj[`tracks${index}`] = album.total_tracks;
      obj.albums = dataYears[year];
    }
    data.push(obj);
  }

  console.log(data);
  return data;
};
