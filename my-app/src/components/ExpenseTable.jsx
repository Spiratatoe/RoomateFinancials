import { DollarSign, User, Calendar } from 'lucide-react';

export function ExpenseTable({ expenses, title, filterType = 'all' }) {
  const filteredExpenses = filterType === 'all'
    ? expenses
    : expenses.filter(e => e.type === filterType);

  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', padding: '1.5rem' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-xl font-bold text-green-600">
          Total: ${totalAmount.toFixed(2)}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Description</th>
              <th className="text-left py-3 px-4">Category</th>
              <th className="text-left py-3 px-4">Roommate</th>
              <th className="text-right py-3 px-4">Amount</th>
              <th className="text-center py-3 px-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  No expenses found
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {expense.date}
                    </div>
                  </td>
                  <td className="py-3 px-4">{expense.description}</td>
                  <td className="py-3 px-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {expense.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      {expense.roommate}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-medium">
                    <div className="flex items-center justify-end gap-1">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      {expense.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      expense.type === 'shared'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {expense.type}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
