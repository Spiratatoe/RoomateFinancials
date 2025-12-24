# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Roommate Finance Tracker** application built with React + Vite. It helps roommates track shared and personal expenses, visualize spending patterns, and manage financial data through CSV uploads.

## Commands

### Development
```bash
npm run dev          # Start development server with hot reload (Vite) on port 5173
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

**Important:** The application MUST run on port 5173 due to Auth0 callback URL configuration.

## Architecture

### Application Structure

**Single-Page Application with Tab-Based Navigation:**
- The app uses a **tab-based navigation system** (not React Router) managed by state in `App.jsx`
- Four main tabs: Overview, Personal Expenses, Shared Expenses, Upload CSV
- All navigation is controlled by `activeTab` state variable

**Data Model:**
```javascript
{
  id: string,
  date: string,
  description: string,
  amount: number,
  category: string,
  roommate: string,
  type: 'personal' | 'shared'
}
```

**Mock Data:**
- The app currently uses mock data defined in `App.jsx`
- `mockExpenses` array contains sample expense data
- `mockSavingsData` contains historical savings/spending trends
- CSV uploads append to existing expense data in state

### Component Organization

**Main App (`src/App.jsx`):**
- Central state management for expenses and active tab
- Contains all business logic for calculating statistics (totals, category breakdowns, roommate breakdowns)
- Handles CSV upload processing
- Uses CSS classes from `common.css` for consistent styling

**Presentation Components (`src/components/`):**
- `StatsCards.jsx` - Four metric cards showing total spending, personal spending, shared expenses, and total savings
- `CategoryChart.jsx` - Pie chart for spending by category (uses Recharts)
- `SavingsChart.jsx` - Line chart for savings vs spending trends over time
- `RoommateBreakdown.jsx` - Bar chart showing personal vs shared spending per roommate
- `ExpenseTable.jsx` - Filterable table displaying expense details
- `CSVUpload.jsx` - File upload component with CSV parsing logic

**Authentication Components (`src/components/`):**
- `LoginButton.jsx` - Triggers Auth0 login flow
- `LogoutButton.jsx` - Triggers Auth0 logout flow
- `SignupButton.jsx` - Triggers Auth0 signup flow (login with screen_hint=signup)

### Styling Approach

**CSS Organization:**
- **`common.css`** - Contains all reusable CSS classes for the application (cards, grids, navigation, etc.)
- **`index.css`** - Tailwind configuration and theme variables (colors, spacing, etc.)
- **Tailwind CSS** - Used for utility classes in some components (e.g., ExpenseTable)
- Components primarily use CSS classes from `common.css` with minimal inline styles

**Key CSS Classes (defined in `common.css`):**
- `.card` - Standard white card container with shadow and border radius
- `.stats-grid` - Responsive grid for stat cards: `repeat(auto-fit, minmax(250px, 1fr))`
- `.charts-grid` - Responsive grid for charts: `repeat(auto-fit, minmax(400px, 1fr))`
- `.nav-tab` - Navigation tab styling with active state
- `.stat-card`, `.stat-label`, `.stat-value` - Stat card components
- `.upload-zone` - CSV upload drop zone styling

### Data Flow

1. **Expense Data:**
   - Initialized with `mockExpenses` in `App.jsx` state
   - CSV uploads parse rows and append to expense array
   - All statistics are derived calculations from expense array using `.reduce()` and `.filter()`

2. **Calculated Values:**
   - `totalSpending` - Sum of all expenses
   - `personalSpending` - Sum of expenses where `type === 'personal'`
   - `sharedSpending` - Sum of expenses where `type === 'shared'`
   - `categoryData` - Aggregated spending grouped by category
   - `roommateData` - Aggregated spending grouped by roommate (split by personal/shared)

3. **CSV Upload Flow:**
   - User selects CSV file → `CSVUpload` component reads file
   - Parses CSV with headers (date, description, amount, category, roommate, type)
   - Transforms rows into expense objects
   - Calls `handleCSVUpload` in App which appends to expenses state
   - Automatically switches to 'overview' tab after upload

## Key Dependencies

- **React 19** - UI framework
- **Vite** - Build tool and dev server (configured for port 5173 with strictPort)
- **Recharts** - Charting library (PieChart, LineChart, BarChart)
- **lucide-react** - Icon library
- **Tailwind CSS 4** - Utility-first CSS framework (configured but limited usage)
- **clsx + tailwind-merge** - Utility for conditional class names
- **@auth0/auth0-react** - Auth0 SDK for authentication

## Important Implementation Details

### CSS Refactoring

The codebase was recently refactored to use a centralized CSS approach:
- Common styles extracted to `src/common.css` for easier management
- Reduced inline styles to improve maintainability
- Retained Tailwind for utility classes and theme variables
- Legacy CSS files (App.css, Dashboard.css, FileImport.css) and unused pages/components removed

### CSV Format

Expected CSV structure:
```csv
date,description,amount,category,roommate,type
2024-12-01,Groceries,120.50,Food,Alice,shared
2024-12-03,Netflix,15.99,Entertainment,Bob,personal
```

- `type` field must be either "shared" or "personal" (case-insensitive)
- `amount` is parsed as float
- Missing fields default to empty string or "Other"/"Unknown"

### State Management

- **No global state library** - Uses React's built-in `useState`
- All state lives in `App.jsx` and is passed down via props
- No context providers or Redux (except Auth0Provider)
- State updates are immutable (spreads existing arrays when adding new data)

### Authentication

The app uses **Auth0** for authentication:

**Configuration:**
- Domain: Set via `VITE_AUTH0_DOMAIN` environment variable (`.env` file)
- Client ID: Set via `VITE_AUTH0_CLIENT_ID` environment variable (`.env` file)
- Callback URL: `http://localhost:5173/` (configured in Auth0 dashboard)
- Logout URL: `http://localhost:5173/` (configured in Auth0 dashboard)
- Web Origin: `http://localhost:5173/` (configured in Auth0 dashboard)

**Implementation:**
- Environment variables loaded from `.env` file (not committed to git)
- Copy `.env.example` to `.env` and fill in your Auth0 credentials
- `Auth0Provider` wraps the app in `main.jsx` using `import.meta.env.VITE_AUTH0_*` variables
- `useAuth0` hook provides authentication state (`isLoading`, `isAuthenticated`, `user`, `error`)
- App renders different views based on auth state:
  - Loading state while Auth0 initializes
  - Login/Signup page for unauthenticated users
  - Main app for authenticated users
- User info displayed in header with logout button when authenticated

**Important:** The Vite dev server MUST run on port 5173 to match Auth0 callback URLs.

**Environment Variables:**
Create a `.env` file with:
```
VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```
