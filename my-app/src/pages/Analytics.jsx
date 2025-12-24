function Analytics() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600 mt-1">Insights and trends for your household spending</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total Spent This Month</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$0.00</p>
          <p className="text-sm text-green-600 mt-2">↓ 0% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Average per Person</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$0.00</p>
          <p className="text-sm text-gray-500 mt-2">Per month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Top Category</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">-</p>
          <p className="text-sm text-gray-500 mt-2">No data yet</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Spending by Category
          </h3>
          <div className="text-center py-12 text-gray-500">
            <p className="text-4xl mb-2">📊</p>
            <p className="font-medium">No data available</p>
            <p className="text-sm mt-1">Add expenses to see insights</p>
          </div>
        </div>

        {/* Monthly Trend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Trend
          </h3>
          <div className="text-center py-12 text-gray-500">
            <p className="text-4xl mb-2">📈</p>
            <p className="font-medium">No data available</p>
            <p className="text-sm mt-1">Add expenses to see trends</p>
          </div>
        </div>

        {/* Spending by Roommate */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Spending by Roommate
          </h3>
          <div className="text-center py-12 text-gray-500">
            <p className="text-4xl mb-2">👥</p>
            <p className="font-medium">No data available</p>
            <p className="text-sm mt-1">Add roommates and expenses</p>
          </div>
        </div>

        {/* Recent Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Category Breakdown
          </h3>
          <div className="space-y-3">
            {['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Transport'].map((category) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{category}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">$0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
