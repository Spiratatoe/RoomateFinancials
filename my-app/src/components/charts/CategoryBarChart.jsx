import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function CategoryBarChart({ data, categories, colors, isEmpty = false }) {
  const emptyData = [
    { name: 'Person 1', cat1: 0, cat2: 0, cat3: 0 },
    { name: 'Person 2', cat1: 0, cat2: 0, cat3: 0 },
  ];

  const displayData = isEmpty ? emptyData : data;

  return (
    <div className="relative h-[250px]">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={displayData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          {!isEmpty && <Legend />}
          {categories?.map((category, index) => (
            <Bar
              key={category}
              dataKey={category}
              fill={colors?.[index] || '#3B82F6'}
              radius={[4, 4, 0, 0]}
              className={isEmpty ? 'opacity-20' : ''}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      {isEmpty && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-lg">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">No data yet</p>
            <p className="text-gray-300 text-xs mt-1">Add expenses to see breakdown</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryBarChart;
