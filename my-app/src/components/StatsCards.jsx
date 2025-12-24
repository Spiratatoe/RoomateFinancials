import { DollarSign, TrendingUp, Users, PiggyBank } from 'lucide-react';

export function StatsCards({ totalSpending, personalSpending, sharedSpending, savings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Spending</p>
            <p className="text-2xl font-bold mt-1">${totalSpending.toFixed(2)}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Personal Spending</p>
            <p className="text-2xl font-bold mt-1">${personalSpending.toFixed(2)}</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Shared Expenses</p>
            <p className="text-2xl font-bold mt-1">${sharedSpending.toFixed(2)}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <Users className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Savings</p>
            <p className="text-2xl font-bold mt-1">${savings.toFixed(2)}</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-full">
            <PiggyBank className="w-6 h-6 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
