import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function SavingsChart({ data }) {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Savings vs Spending Trend</h3>
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
