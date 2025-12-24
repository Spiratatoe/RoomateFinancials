import TrendLineChart from '../components/charts/TrendLineChart';
import DistributionPieChart from '../components/charts/DistributionPieChart';
import CategoryBarChart from '../components/charts/CategoryBarChart';

function Dashboard() {
  // Mock data - will be replaced with real data from context/state
  const hasData = false; // Set to true when user has expenses

  const monthlyTrendData = [
    { month: 'Jan', value: 5161 },
    { month: 'Feb', value: 5839 },
    { month: 'Mar', value: 5350 },
    { month: 'Apr', value: 4274 },
    { month: 'May', value: 4478 },
    { month: 'Jun', value: 4983 },
    { month: 'Jul', value: 6081 },
    { month: 'Aug', value: 4627 },
    { month: 'Sep', value: 5860 },
    { month: 'Oct', value: 5767 },
    { month: 'Nov', value: 6071 },
    { month: 'Dec', value: 4415 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your financial overview</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 shadow-sm">
            + Add Expense
          </button>
        </div>
      </div>

      {/* Top Metrics Bar - Enhanced */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Annual Income</p>
            <p className="text-4xl font-bold text-white">$0</p>
            <p className="text-xs text-white/70 mt-2">+0% from last year</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Total Expenses</p>
            <p className="text-4xl font-bold text-white">$0</p>
            <p className="text-xs text-white/70 mt-2">No expenses yet</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Annual Savings</p>
            <p className="text-4xl font-bold text-white">$0</p>
            <p className="text-xs text-white/70 mt-2">Target: 20%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Left to Spend</p>
            <p className="text-4xl font-bold text-white">$0</p>
            <p className="text-xs text-white/70 mt-2">This month</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Best Saving Month</p>
            <p className="text-4xl font-bold text-white">-</p>
            <p className="text-xs text-white/70 mt-2">Most savings</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 font-medium mb-2">Biggest Expense</p>
            <p className="text-4xl font-bold text-white">-</p>
            <p className="text-xs text-white/70 mt-2">Top category</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Distribution */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Budget Distribution
            </h3>
            <DistributionPieChart isEmpty={!hasData} />
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Categories
            </h3>
            <div className="space-y-3">
              {['Groceries', 'Rent', 'Utilities', 'Dining Out', 'Entertainment'].map((category, index) => (
                <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                  </div>
                  <span className="font-bold text-gray-900">$0</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Roommate Expenses */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Expenses by Roommate
          </h3>
          <CategoryBarChart
            isEmpty={!hasData}
            categories={['internet', 'rent', 'utilities']}
            colors={['#8B5CF6', '#EC4899', '#F59E0B']}
          />
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Split</span>
              <span className="font-semibold text-gray-900">$0</span>
            </div>
          </div>
        </div>

        {/* Right Column - Trend Analysis */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Needs</h3>
                <p className="text-xs text-gray-500">Essential expenses</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">$0</p>
                <p className="text-xs text-gray-500">50% target</p>
              </div>
            </div>
            <TrendLineChart
              data={monthlyTrendData}
              dataKey="value"
              color="#3B82F6"
              isEmpty={!hasData}
            />
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Wants</h3>
                <p className="text-xs text-gray-500">Discretionary spending</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">$0</p>
                <p className="text-xs text-gray-500">30% target</p>
              </div>
            </div>
            <TrendLineChart
              data={monthlyTrendData}
              dataKey="value"
              color="#8B5CF6"
              isEmpty={!hasData}
            />
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Savings</h3>
                <p className="text-xs text-gray-500">Money saved</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-pink-600">$0</p>
                <p className="text-xs text-gray-500">20% target</p>
              </div>
            </div>
            <TrendLineChart
              data={monthlyTrendData}
              dataKey="value"
              color="#EC4899"
              isEmpty={!hasData}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Recent Transactions */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h3>
            <p className="text-sm text-gray-500">Latest activity across all roommates</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All →
          </button>
        </div>
        <div className="text-center py-12 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="font-medium text-gray-900">No transactions yet</p>
          <p className="text-sm mt-2 text-gray-500">Add your first expense to get started</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
