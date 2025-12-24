import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function RoommateBreakdown({ data }) {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Roommate Spending Breakdown</h3>
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
