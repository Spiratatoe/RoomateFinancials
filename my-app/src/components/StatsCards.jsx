import { DollarSign, TrendingUp, Users, PiggyBank } from 'lucide-react';

export function StatsCards({ totalSpending, personalSpending, sharedSpending, savings }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Total Spending</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.25rem' }}>${totalSpending.toFixed(2)}</p>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', padding: '0.75rem', borderRadius: '9999px' }}>
            <DollarSign style={{ width: '1.5rem', height: '1.5rem', color: '#2563EB' }} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Personal Spending</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.25rem' }}>${personalSpending.toFixed(2)}</p>
          </div>
          <div style={{ backgroundColor: '#F3E8FF', padding: '0.75rem', borderRadius: '9999px' }}>
            <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#9333EA' }} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Shared Expenses</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.25rem' }}>${sharedSpending.toFixed(2)}</p>
          </div>
          <div style={{ backgroundColor: '#D1FAE5', padding: '0.75rem', borderRadius: '9999px' }}>
            <Users style={{ width: '1.5rem', height: '1.5rem', color: '#059669' }} />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>Total Savings</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.25rem' }}>${savings.toFixed(2)}</p>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', padding: '0.75rem', borderRadius: '9999px' }}>
            <PiggyBank style={{ width: '1.5rem', height: '1.5rem', color: '#D97706' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
