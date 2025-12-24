import { useState } from 'react';

function Settlements() {
  const [showRecordPayment, setShowRecordPayment] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Settlements</h2>
        <p className="text-gray-600 mt-1">Manage payments and balances between roommates</p>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Your Balance</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$0.00</p>
          <p className="text-sm text-gray-500 mt-2">All settled up!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total You Owe</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$0.00</p>
          <p className="text-sm text-gray-500 mt-2">To roommates</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total Owed to You</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$0.00</p>
          <p className="text-sm text-gray-500 mt-2">From roommates</p>
        </div>
      </div>

      {/* Suggested Settlements */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Suggested Settlements
          </h3>
          <button
            onClick={() => setShowRecordPayment(!showRecordPayment)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Record Payment
          </button>
        </div>

        {showRecordPayment && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Record a Payment</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select roommate...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select roommate...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note (optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Venmo payment for groceries"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Record Payment
              </button>
              <button
                onClick={() => setShowRecordPayment(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="text-center py-8 text-gray-500">
          <p className="text-4xl mb-2">💸</p>
          <p className="font-medium">All balanced!</p>
          <p className="text-sm mt-1">No settlements needed at the moment</p>
        </div>

        {/* Example of how settlement suggestions will look (commented out) */}
        {/*
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-sm">
                YOU
              </div>
              <div>
                <p className="font-medium text-gray-900">You owe John</p>
                <p className="text-sm text-gray-600">For rent and groceries</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-red-600">$150.00</p>
              <button className="mt-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                Mark as Paid
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div>
                <p className="font-medium text-gray-900">Sarah owes you</p>
                <p className="text-sm text-gray-600">For utilities</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-green-600">$75.00</p>
              <button className="mt-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                Send Reminder
              </button>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Payment History
        </h3>
        <div className="text-center py-8 text-gray-500">
          <p className="text-4xl mb-2">📋</p>
          <p className="font-medium">No payments recorded yet</p>
          <p className="text-sm mt-1">Payment history will appear here</p>
        </div>
      </div>
    </div>
  );
}

export default Settlements;
