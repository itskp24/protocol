# Detailed Setup Guide

## Prerequisites

1. Node.js v20 or later
2. npm v9 or later
3. Git Bash (for Windows users)

## Installation Steps

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### 2. Running the Application

The application consists of both a server and client that run together using a single command:

```bash
npm run dev
```

This command will start both:
- Express server (backend) on port 5000
- Vite development server (frontend) on the same port

### 3. Common Issues and Solutions

#### ESM URL Scheme Error

If you see this error:
```
Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader
```

Solutions:
1. Make sure you're in the project root directory, not in client/ or server/
2. Run the following commands:
```bash
# Clean npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Start the application
npm run dev
```

#### Port Already in Use

If port 5000 is already in use:

**Windows:**
```cmd
# Find the process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace <PID> with the actual process ID)
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
# Find the process using port 5000
lsof -i :5000

# Kill the process (replace <PID> with the actual process ID)
kill -9 <PID>
```

### 4. Project Structure

```
├── client/           # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Page components
│   │   └── ...
├── server/           # Backend code
└── shared/          # Shared code
```

### 5. Development Tips

1. Always run commands from the project root directory, not from client/ or server/
2. The application uses a single package.json at the root level
3. Don't run the client separately - the setup is configured to run both frontend and backend together
4. Check the terminal output for any compilation errors
5. Make sure your Node.js version is 20 or higher: `node --version`

### 6. Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

### 7. Verification

To verify the application is running correctly:

1. Open `http://localhost:5000` in your browser
2. You should see the portfolio website
3. Check the browser console for any errors
4. Check the terminal for any server-side errors

### 8. Troubleshooting Steps

If you encounter issues:

1. Verify Node.js version:
```bash
node --version  # Should be v20.x or higher
```

2. Clean and reinstall:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

3. Check running processes:
```bash
# Windows
netstat -ano | findstr :5000

# Mac/Linux
lsof -i :5000
```

4. Verify you're in the correct directory:
```bash
# Should show package.json
ls package.json
```

If problems persist, check the logs in `npm-debug.log` if it exists.
