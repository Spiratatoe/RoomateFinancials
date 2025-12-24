import { DollarSign, TrendingUp, Users, PiggyBank } from 'lucide-react';

export function StatsCards({ totalSpending, personalSpending, sharedSpending, savings }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="card-header">
          <div>
            <p className="stat-label">Total Spending</p>
            <p className="stat-value">${totalSpending.toFixed(2)}</p>
          </div>
          <div className="stat-icon-wrapper stat-icon-blue">
            <DollarSign style={{ width: '1.5rem', height: '1.5rem', color: '#2563EB' }} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-header">
          <div>
            <p className="stat-label">Personal Spending</p>
            <p className="stat-value">${personalSpending.toFixed(2)}</p>
          </div>
          <div className="stat-icon-wrapper stat-icon-purple">
            <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#9333EA' }} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-header">
          <div>
            <p className="stat-label">Shared Expenses</p>
            <p className="stat-value">${sharedSpending.toFixed(2)}</p>
          </div>
          <div className="stat-icon-wrapper stat-icon-green">
            <Users style={{ width: '1.5rem', height: '1.5rem', color: '#059669' }} />
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="card-header">
          <div>
            <p className="stat-label">Total Savings</p>
            <p className="stat-value">${savings.toFixed(2)}</p>
          </div>
          <div className="stat-icon-wrapper stat-icon-yellow">
            <PiggyBank style={{ width: '1.5rem', height: '1.5rem', color: '#D97706' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
