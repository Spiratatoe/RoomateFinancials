import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function SavingsChart({ data }) {
  return (
    <div className="card">
      <h3 className="chart-title">Savings vs Spending Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Legend />
          <Line type="monotone" dataKey="savings" stroke="#00C49F" strokeWidth={2} />
          <Line type="monotone" dataKey="spending" stroke="#FF8042" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
