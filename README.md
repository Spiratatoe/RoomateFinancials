# Roommate Finance Tracker

A React-based web application for tracking shared and personal expenses among roommates. Features authentication via Auth0, expense management, CSV import/export, and data visualization.

## Features

- 🔐 **Secure Authentication** - Auth0 integration for user management
- 💰 **Expense Tracking** - Track both personal and shared expenses
- 📊 **Data Visualization** - Interactive charts for spending analysis
- 📁 **CSV Import** - Import expenses from CSV files
- 👥 **Roommate Management** - Track expenses by roommate
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Authentication**: Auth0
- **Charts**: Recharts
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Icons**: Lucide React

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Auth0 account (for authentication)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Auth0** (if deploying to a different environment)

   The app is pre-configured for `http://localhost:5173/`. If deploying elsewhere:

   - Update `src/main.jsx` with your Auth0 domain and client ID
   - Update Auth0 Application settings with your URLs:
     - Allowed Callback URLs
     - Allowed Logout URLs
     - Allowed Web Origins

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will run at [http://localhost:5173](http://localhost:5173)

   ⚠️ **Important**: The app MUST run on port 5173 due to Auth0 callback URL configuration.

## Available Scripts

- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Usage

### First Time Setup

1. Navigate to [http://localhost:5173](http://localhost:5173)
2. Click "Sign Up" to create an Auth0 account
3. Complete the Auth0 registration flow
4. You'll be redirected back to the app

### Managing Expenses

- **View Dashboard**: See all expenses, stats, and charts on the Overview tab
- **Personal Expenses**: View only your personal expenses
- **Shared Expenses**: View expenses shared with roommates
- **Upload CSV**: Import expenses from a CSV file

### CSV Format

Your CSV should have the following columns:

```csv
date,description,amount,category,roommate,type
2024-12-01,Groceries,120.50,Food,Alice,shared
2024-12-03,Netflix,15.99,Entertainment,Bob,personal
```

**Field Requirements:**
- `date` - Date in YYYY-MM-DD format
- `description` - Text description of expense
- `amount` - Numeric amount (no currency symbols)
- `category` - Category name (Food, Utilities, Entertainment, etc.)
- `roommate` - Name of the roommate
- `type` - Either "personal" or "shared"

## Project Structure

```
my-app/
├── src/
│   ├── components/         # React components
│   │   ├── LoginButton.jsx
│   │   ├── LogoutButton.jsx
│   │   ├── SignupButton.jsx
│   │   ├── StatsCards.jsx
│   │   ├── CategoryChart.jsx
│   │   ├── SavingsChart.jsx
│   │   ├── RoommateBreakdown.jsx
│   │   ├── ExpenseTable.jsx
│   │   └── CSVUpload.jsx
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Tailwind base styles
│   └── common.css          # Common component styles
├── public/                 # Static assets
├── .gitignore
├── CLAUDE.md              # AI assistant guidance
├── README.md              # This file
├── REQUIREMENTS.md        # Project requirements
├── SECURITY.md            # Security documentation
├── package.json
└── vite.config.js         # Vite configuration
```

## Authentication

This app uses Auth0 for authentication. 

**Note**: For SPAs, the Client ID is public and safe to commit to version control. Security is enforced through Auth0's application configuration (allowed URLs, etc.).

## Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Deployment Considerations

When deploying to production:

1. Update Auth0 configuration with production URLs
2. Update `src/main.jsx` if using different Auth0 application
3. Ensure the deployment URL is added to Auth0's:
   - Allowed Callback URLs
   - Allowed Logout URLs
   - Allowed Web Origins

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue in the GitHub repository.
