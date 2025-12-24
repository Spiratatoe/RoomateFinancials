import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function RoommateBreakdown({ data }) {
  return (
    <div className="card">
      <h3 className="chart-title">Roommate Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Bar dataKey="personal" fill="#8884D8" name="Personal" />
          <Bar dataKey="shared" fill="#82CA9D" name="Shared" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
