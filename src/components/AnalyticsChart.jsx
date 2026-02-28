import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { name: 'S', value: 40, type: 'dashed' },
  { name: 'M', value: 70, type: 'solid' },
  { name: 'T', value: 85, type: 'solid' },
  { name: 'W', value: 95, type: 'solid' },
  { name: 'T', value: 60, type: 'dashed' },
  { name: 'F', value: 50, type: 'dashed' },
  { name: 'S', value: 45, type: 'dashed' },
];

const AnalyticsChart = () => {
  return (
    <div className="w-full h-40 sm:h-48 md:h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          {/* PATTERN FOR DASHED BARS */}
          <defs>
            <pattern
              id="diagonalHatch"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#CBD5E1"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          {/* X AXIS */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            dy={8}
          />

          {/* TOOLTIP */}
          <Tooltip
            cursor={{ fill: 'transparent' }}
            contentStyle={{
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
              fontSize: '12px',
            }}
          />

          {/* BARS */}
          <Bar
            dataKey="value"
            radius={[10, 10, 10, 10]}
            barSize={24} 
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.value > 80
                    ? 'var(--color-donezo-dark)'
                    : entry.type === 'dashed'
                    ? 'url(#diagonalHatch)'
                    : 'var(--color-donezo-light)'
                }
                stroke={entry.type === 'dashed' ? '#CBD5E1' : 'none'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;