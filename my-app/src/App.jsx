import { useState } from 'react';
import { CSVUpload } from './components/CSVUpload';
import { CategoryChart } from './components/CategoryChart';
import { SavingsChart } from './components/SavingsChart';
import { ExpenseTable } from './components/ExpenseTable';
import { RoommateBreakdown } from './components/RoommateBreakdown';
import { StatsCards } from './components/StatsCards';
import { Receipt } from 'lucide-react';

// Mock initial data
const mockExpenses = [
  { id: '1', date: '2024-12-01', description: 'Groceries', amount: 120.50, category: 'Food', roommate: 'Alice', type: 'shared' },
  { id: '2', date: '2024-12-03', description: 'Electricity Bill', amount: 85.00, category: 'Utilities', roommate: 'Bob', type: 'shared' },
  { id: '3', date: '2024-12-05', description: 'Netflix', amount: 15.99, category: 'Entertainment', roommate: 'Alice', type: 'personal' },
  { id: '4', date: '2024-12-07', description: 'Internet Bill', amount: 60.00, category: 'Utilities', roommate: 'Charlie', type: 'shared' },
  { id: '5', date: '2024-12-10', description: 'Restaurant', amount: 45.00, category: 'Food', roommate: 'Bob', type: 'personal' },
  { id: '6', date: '2024-12-12', description: 'Gas', amount: 50.00, category: 'Transportation', roommate: 'Charlie', type: 'personal' },
  { id: '7', date: '2024-12-15', description: 'Cleaning Supplies', amount: 35.00, category: 'Household', roommate: 'Alice', type: 'shared' },
  { id: '8', date: '2024-12-18', description: 'Movie Tickets', amount: 28.00, category: 'Entertainment', roommate: 'Bob', type: 'personal' },
  { id: '9', date: '2024-12-20', description: 'Groceries', amount: 95.00, category: 'Food', roommate: 'Charlie', type: 'shared' },
  { id: '10', date: '2024-12-22', description: 'Water Bill', amount: 40.00, category: 'Utilities', roommate: 'Alice', type: 'shared' },
];

const mockSavingsData = [
  { month: 'Jul', savings: 450, spending: 1200 },
  { month: 'Aug', savings: 520, spending: 1100 },
  { month: 'Sep', savings: 380, spending: 1350 },
  { month: 'Oct', savings: 610, spending: 980 },
  { month: 'Nov', savings: 550, spending: 1150 },
  { month: 'Dec', savings: 700, spending: 1050 },
];

export default function App() {
  const [expenses, setExpenses] = useState(mockExpenses);
  const [activeTab, setActiveTab] = useState('overview');

  const handleCSVUpload = (data) => {
    const newExpenses = data.map((row, index) => ({
      id: `upload-${Date.now()}-${index}`,
      date: row.date || '',
      description: row.description || '',
      amount: parseFloat(row.amount) || 0,
      category: row.category || 'Other',
      roommate: row.roommate || 'Unknown',
      type: (row.type?.toLowerCase() === 'shared' ? 'shared' : 'personal'),
    }));

    setExpenses([...expenses, ...newExpenses]);
    alert(`Successfully uploaded ${newExpenses.length} expenses!`);
    setActiveTab('overview');
  };

  // Calculate statistics
  const totalSpending = expenses.reduce((sum, e) => sum + e.amount, 0);
  const personalSpending = expenses.filter(e => e.type === 'personal').reduce((sum, e) => sum + e.amount, 0);
  const sharedSpending = expenses.filter(e => e.type === 'shared').reduce((sum, e) => sum + e.amount, 0);
  const totalSavings = mockSavingsData.reduce((sum, m) => sum + m.savings, 0);

  // Category data for pie chart
  const categoryData = expenses.reduce((acc, expense) => {
    const existing = acc.find(item => item.name === expense.category);
    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  // Roommate breakdown data
  const roommateData = expenses.reduce((acc, expense) => {
    const existing = acc.find(item => item.name === expense.roommate);
    if (existing) {
      if (expense.type === 'personal') {
        existing.personal += expense.amount;
      } else {
        existing.shared += expense.amount;
      }
    } else {
      acc.push({
        name: expense.roommate,
        personal: expense.type === 'personal' ? expense.amount : 0,
        shared: expense.type === 'shared' ? expense.amount : 0,
      });
    }
    return acc;
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1.5rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Receipt style={{ width: '2rem', height: '2rem', color: '#2563EB' }} />
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827' }}>Roommate Finance Tracker</h1>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '1rem 0.5rem',
                borderBottom: activeTab === 'overview' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'overview' ? '#2563EB' : '#6B7280',
                transition: 'all 0.2s',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              style={{
                padding: '1rem 0.5rem',
                borderBottom: activeTab === 'personal' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'personal' ? '#2563EB' : '#6B7280',
                transition: 'all 0.2s',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              Personal Expenses
            </button>
            <button
              onClick={() => setActiveTab('shared')}
              style={{
                padding: '1rem 0.5rem',
                borderBottom: activeTab === 'shared' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'shared' ? '#2563EB' : '#6B7280',
                transition: 'all 0.2s',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              Shared Expenses
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              style={{
                padding: '1rem 0.5rem',
                borderBottom: activeTab === 'upload' ? '2px solid #2563EB' : '2px solid transparent',
                color: activeTab === 'upload' ? '#2563EB' : '#6B7280',
                transition: 'all 0.2s',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              Upload CSV
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1rem' }}>
        {activeTab === 'overview' && (
          <>
            <StatsCards
              totalSpending={totalSpending}
              personalSpending={personalSpending}
              sharedSpending={sharedSpending}
              savings={totalSavings}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <CategoryChart data={categoryData} />
              <SavingsChart data={mockSavingsData} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <RoommateBreakdown data={roommateData} />
            </div>

            <ExpenseTable expenses={expenses} title="All Expenses" filterType="all" />
          </>
        )}

        {activeTab === 'personal' && (
          <ExpenseTable expenses={expenses} title="Personal Expenses" filterType="personal" />
        )}

        {activeTab === 'shared' && (
          <ExpenseTable expenses={expenses} title="Shared Expenses" filterType="shared" />
        )}

        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Upload CSV Data</h2>
              <p className="text-gray-600">
                Upload a CSV file with your expense data to add to the tracker.
                The CSV should include the following columns: date, description, amount, category, roommate, and type.
              </p>
            </div>
            <CSVUpload onUpload={handleCSVUpload} />

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">CSV Format Example:</h3>
              <pre className="bg-white p-4 rounded border border-blue-200 text-sm overflow-x-auto">
{`date,description,amount,category,roommate,type
2024-12-01,Groceries,120.50,Food,Alice,shared
2024-12-03,Netflix,15.99,Entertainment,Bob,personal
2024-12-05,Electricity,85.00,Utilities,Charlie,shared`}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
