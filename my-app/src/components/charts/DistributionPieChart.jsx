import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#60A5FA', '#A78BFA', '#F472B6'];

function DistributionPieChart({ data, isEmpty = false }) {
  const emptyData = [
    { name: 'Needs', value: 1, percentage: 50 },
    { name: 'Wants', value: 1, percentage: 30 },
    { name: 'Savings', value: 1, percentage: 20 }
  ];

  const displayData = isEmpty ? emptyData : data;

  const renderLabel = ({ name, percentage, value }) => {
    if (isEmpty) return '';
    return `${name}\n${value.toLocaleString()}\n${percentage}%`;
  };

  return (
    <div className="relative h-[250px]">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={displayData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            className={isEmpty ? 'opacity-20' : ''}
          >
            {displayData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
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

export default DistributionPieChart;
