# RoomateFinancials
Doing financial analytics on spending and money flow with a roommates spending in the equation

## Deployment Steps

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/RoomateFinancials.git
   cd RoomateFinancials
   ```

2. Navigate to the app directory:
   ```bash
   cd my-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Production Build
1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build locally:
   ```bash
   npm run preview
   ```

### Deployment Options

#### Option 1: Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd my-app
   vercel
   ```

#### Option 2: Netlify
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify via:
   - Netlify CLI: `netlify deploy --prod --dir=dist`
   - Netlify web interface: Drag and drop the `dist` folder

#### Option 3: GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/RoomateFinancials",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```
