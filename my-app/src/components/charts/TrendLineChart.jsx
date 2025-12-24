import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function TrendLineChart({ data, dataKey, color = '#3B82F6', title, isEmpty = false }) {
  // Empty data for skeleton
  const emptyData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    value: 0
  }));

  const displayData = isEmpty ? emptyData : data;

  return (
    <div className="relative h-[200px]">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={displayData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey || 'value'}
            stroke={color}
            strokeWidth={2}
            dot={false}
            className={isEmpty ? 'opacity-20' : ''}
          />
        </LineChart>
      </ResponsiveContainer>
      {isEmpty && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-lg">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">No data yet</p>
            <p className="text-gray-300 text-xs mt-1">Add expenses to see trends</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrendLineChart;
